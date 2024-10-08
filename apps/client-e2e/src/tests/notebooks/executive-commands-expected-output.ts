import { GetExtensionPath, Sleep } from '@idl/shared';
import { OpenNotebookInVSCode, VSCODE_COMMANDS } from '@idl/vscode/shared';
import expect from 'expect';
import * as vscode from 'vscode';

import { RunnerFunction } from '../runner.interface';
import { CompareNotebookJSONOutputs } from './helpers/compare-notebook-json-outputs';

/**
 * Verifies we set quiet right and have the correct outputs
 */
export const ExecutiveCommandsExpectedOutput: RunnerFunction = async (init) => {
  const nbUri = GetExtensionPath(
    'idl/test/client-e2e/notebooks/executive-commands/quiet-works-right.idlnb'
  );

  const expectedUri = GetExtensionPath(
    'idl/test/client-e2e/notebooks/executive-commands/quiet-works-right-output.idlnb'
  );

  // open notebook
  const nb = await OpenNotebookInVSCode(nbUri, true);

  // short pause to parse
  await Sleep(500);

  // run all cells
  await vscode.commands.executeCommand(VSCODE_COMMANDS.NOTEBOOK_RUN_ALL);

  // save to disk
  await nb.save();

  // compare outputs
  await CompareNotebookJSONOutputs(expectedUri, nbUri);

  // run all cells
  await vscode.commands.executeCommand(VSCODE_COMMANDS.NOTEBOOK_CLEAR_OUTPUTS);

  // save to disk
  await nb.save();

  // close notebook
  await vscode.commands.executeCommand(VSCODE_COMMANDS.CLOSE_EDITOR);

  // pause momentarily
  await Sleep(100);

  // verify we cleaned up
  expect(vscode.window.activeNotebookEditor).toBeUndefined();
};
