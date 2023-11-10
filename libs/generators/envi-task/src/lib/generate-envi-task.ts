import { TaskAssembler } from '@idl/assembler';
import {
  DEFAULT_ASSEMBLER_OPTIONS,
  FormatterType,
  IAssemblerOptions,
} from '@idl/assembling/config';
import { ENVITask, ENVITaskSchema33 } from '@idl/data-types/tasks';
import {
  GenerateTaskResult,
  GetDisplayName,
  GetProcedure,
} from '@idl/generators/tasks-shared';
import { IDL_DOCS_HEADERS, IParsed } from '@idl/parsing/syntax-tree';
import { PRO_FILE_EXTENSION, TASK_FILE_EXTENSION } from '@idl/shared';
import { IDL_TRANSLATION } from '@idl/translation';
import { existsSync, writeFileSync } from 'fs';
import { basename, dirname, join } from 'path';

import { MakeENVITaskParameters } from './make-envi-task-parameters';

/**
 * Given a PRO file and an ENVI Task, attempts to generate a task
 */
export async function GenerateENVITask(
  file: string,
  parsed: IParsed,
  config: IAssemblerOptions<FormatterType> = DEFAULT_ASSEMBLER_OPTIONS,
  write = false
): Promise<GenerateTaskResult<boolean>> {
  /*
   * Base name fo the file
   */
  const baseName = basename(file, PRO_FILE_EXTENSION).toLowerCase();

  /**
   * Path to the task file we will generate
   */
  const taskUri = join(dirname(file), baseName + TASK_FILE_EXTENSION);

  /**
   * If we have an existing task, return
   */
  if (existsSync(taskUri) && write) {
    const resp: GenerateTaskResult<false> = {
      success: false,
      failureReason: IDL_TRANSLATION.generators.errors.tasks.alreadyExists,
    };
    return resp;
  }

  /**
   * Get the procedure definition
   */
  const pro = GetProcedure(baseName, parsed);
  if (pro === undefined) {
    const resp: GenerateTaskResult<false> = {
      success: false,
      failureReason: IDL_TRANSLATION.generators.errors.tasks.noProcedure,
    };
    return resp;
  }

  /**
   * Create task
   */
  const task: ENVITask<ENVITaskSchema33> = {
    schema: 'envitask_3.3',
    name: pro.meta.display,
    display_name: GetDisplayName(pro.meta.display),
    base_class: 'ENVITaskFromProcedure',
    routine: pro.meta.display,
    description: pro.meta.docsLookup[IDL_DOCS_HEADERS.DEFAULT] || '',
    parameters: MakeENVITaskParameters(pro),
  };

  /**
   * Format as a string which re-orders and gets it ready to save to disk
   */
  const formattedTask = TaskAssembler(task, config);

  // save to disk
  if (write) {
    writeFileSync(taskUri, formattedTask);
  }

  // generate response
  const resp: GenerateTaskResult<true> = {
    success: true,
    taskFile: taskUri,
    task,
    formattedTask,
    procedure: pro,
  };

  // return
  return resp;
}
