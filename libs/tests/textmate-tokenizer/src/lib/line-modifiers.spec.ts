import { TextMateParse } from '@idl/tests/helpers';

describe(`[auto generated] Validates line modifier (separators)`, () => {
  it(`[auto generated] parses multi-line as single-line`, async () => {
    // test code to extract tokens from
    const code = [`a = a + b() & proc & a.procMethod,1 & $`, `a={struct}`];

    // extract tokens
    const tokenized = await TextMateParse(code);

    // define expected tokens
    const expected = [
      {
        line: 0,
        match: 'a',
        startIndex: 0,
        endIndex: 1,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
      {
        line: 0,
        match: '=',
        startIndex: 2,
        endIndex: 3,
        scopes: ['source.idl', 'group.assignment.idl', 'keyword.operator.idl'],
      },
      {
        line: 0,
        match: 'a',
        startIndex: 4,
        endIndex: 5,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 0,
        match: '+',
        startIndex: 6,
        endIndex: 7,
        scopes: ['source.idl', 'group.assignment.idl', 'keyword.operator.idl'],
      },
      {
        line: 0,
        match: 'b',
        startIndex: 8,
        endIndex: 9,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'group.call.func.idl',
          'entity.name.function.idl',
        ],
      },
      {
        line: 0,
        match: '(',
        startIndex: 9,
        endIndex: 10,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'group.call.func.idl',
          'meta.brace.round.idl',
        ],
      },
      {
        line: 0,
        match: ')',
        startIndex: 10,
        endIndex: 11,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'group.call.func.idl',
          'meta.brace.round.idl',
        ],
      },
      {
        line: 0,
        match: '& ',
        startIndex: 12,
        endIndex: 14,
        scopes: ['source.idl'],
      },
      {
        line: 0,
        match: 'proc',
        startIndex: 14,
        endIndex: 18,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
      {
        line: 0,
        match: ' & ',
        startIndex: 18,
        endIndex: 21,
        scopes: ['source.idl'],
      },
      {
        line: 0,
        match: 'a',
        startIndex: 21,
        endIndex: 22,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
      {
        line: 0,
        match: '.',
        startIndex: 22,
        endIndex: 23,
        scopes: [
          'source.idl',
          'group.call.pro-method.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 0,
        match: 'procMethod',
        startIndex: 23,
        endIndex: 33,
        scopes: [
          'source.idl',
          'group.call.pro-method.idl',
          'support.function.idl-procedure-method',
        ],
      },
      {
        line: 0,
        match: ',',
        startIndex: 33,
        endIndex: 34,
        scopes: [
          'source.idl',
          'group.call.pro-method.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 0,
        match: '1',
        startIndex: 34,
        endIndex: 35,
        scopes: [
          'source.idl',
          'group.call.pro-method.idl',
          'constant.numeric.idl',
        ],
      },
      {
        line: 0,
        match: '& ',
        startIndex: 36,
        endIndex: 38,
        scopes: ['source.idl'],
      },
      {
        line: 0,
        match: '$',
        startIndex: 38,
        endIndex: 39,
        scopes: [
          'source.idl',
          'group.line-continuation.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 1,
        match: 'a',
        startIndex: 0,
        endIndex: 1,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
      {
        line: 1,
        match: '=',
        startIndex: 1,
        endIndex: 2,
        scopes: ['source.idl', 'group.assignment.idl', 'keyword.operator.idl'],
      },
      {
        line: 1,
        match: '{',
        startIndex: 2,
        endIndex: 3,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'group.structure.idl',
          'meta.brace.idl',
        ],
      },
      {
        line: 1,
        match: 'struct',
        startIndex: 3,
        endIndex: 9,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'group.structure.idl',
          'entity.name.type.idl',
        ],
      },
      {
        line: 1,
        match: '}',
        startIndex: 9,
        endIndex: 10,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'group.structure.idl',
          'meta.brace.idl',
        ],
      },
    ];
    expect(expected).toEqual(tokenized);
  });

  it(`[auto generated] loops properly stop in line modifier`, async () => {
    // test code to extract tokens from
    const code = [
      `proc & for i=0,99 do print, i & while !true do b = awesome() & foreach val, b, key do print, key, val & endedit`,
    ];

    // extract tokens
    const tokenized = await TextMateParse(code);

    // define expected tokens
    const expected = [
      {
        line: 0,
        match: 'proc',
        startIndex: 0,
        endIndex: 4,
        scopes: [
          'source.idl',
          'group.call.pro.idl',
          'support.function.idl-procedure',
        ],
      },
      {
        line: 0,
        match: '& ',
        startIndex: 5,
        endIndex: 7,
        scopes: ['source.idl'],
      },
      {
        line: 0,
        match: 'for',
        startIndex: 7,
        endIndex: 10,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'keyword.control.idl',
        ],
      },
      {
        line: 0,
        match: 'i',
        startIndex: 11,
        endIndex: 12,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 0,
        match: '=',
        startIndex: 12,
        endIndex: 13,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 0,
        match: '0',
        startIndex: 13,
        endIndex: 14,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'constant.numeric.idl',
        ],
      },
      {
        line: 0,
        match: ',',
        startIndex: 14,
        endIndex: 15,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 0,
        match: '99',
        startIndex: 15,
        endIndex: 17,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'constant.numeric.idl',
        ],
      },
      {
        line: 0,
        match: 'do',
        startIndex: 18,
        endIndex: 20,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'group.loop.do.idl',
          'keyword.control.idl',
        ],
      },
      {
        line: 0,
        match: 'print',
        startIndex: 21,
        endIndex: 26,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'group.loop.do.idl',
          'group.call.pro.idl',
          'support.function.idl-procedure',
        ],
      },
      {
        line: 0,
        match: ',',
        startIndex: 26,
        endIndex: 27,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'group.loop.do.idl',
          'group.call.pro.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 0,
        match: 'i',
        startIndex: 28,
        endIndex: 29,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'group.loop.do.idl',
          'group.call.pro.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 0,
        match: '&',
        startIndex: 30,
        endIndex: 31,
        scopes: ['source.idl'],
      },
      {
        line: 0,
        match: ' while',
        startIndex: 31,
        endIndex: 37,
        scopes: ['source.idl', 'group.loop.whileidl', 'keyword.control.idl'],
      },
      {
        line: 0,
        match: '!true',
        startIndex: 38,
        endIndex: 43,
        scopes: ['source.idl', 'group.loop.whileidl', 'constant.language.idl'],
      },
      {
        line: 0,
        match: 'do',
        startIndex: 44,
        endIndex: 46,
        scopes: [
          'source.idl',
          'group.loop.whileidl',
          'group.loop.do.idl',
          'keyword.control.idl',
        ],
      },
      {
        line: 0,
        match: 'b',
        startIndex: 47,
        endIndex: 48,
        scopes: [
          'source.idl',
          'group.loop.whileidl',
          'group.loop.do.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 0,
        match: '=',
        startIndex: 49,
        endIndex: 50,
        scopes: [
          'source.idl',
          'group.loop.whileidl',
          'group.loop.do.idl',
          'group.assignment.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 0,
        match: 'awesome',
        startIndex: 51,
        endIndex: 58,
        scopes: [
          'source.idl',
          'group.loop.whileidl',
          'group.loop.do.idl',
          'group.assignment.idl',
          'group.call.func.idl',
          'entity.name.function.idl',
        ],
      },
      {
        line: 0,
        match: '(',
        startIndex: 58,
        endIndex: 59,
        scopes: [
          'source.idl',
          'group.loop.whileidl',
          'group.loop.do.idl',
          'group.assignment.idl',
          'group.call.func.idl',
          'meta.brace.round.idl',
        ],
      },
      {
        line: 0,
        match: ')',
        startIndex: 59,
        endIndex: 60,
        scopes: [
          'source.idl',
          'group.loop.whileidl',
          'group.loop.do.idl',
          'group.assignment.idl',
          'group.call.func.idl',
          'meta.brace.round.idl',
        ],
      },
      {
        line: 0,
        match: '& ',
        startIndex: 61,
        endIndex: 63,
        scopes: ['source.idl'],
      },
      {
        line: 0,
        match: 'foreach',
        startIndex: 63,
        endIndex: 70,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'keyword.control.idl',
        ],
      },
      {
        line: 0,
        match: 'val',
        startIndex: 71,
        endIndex: 74,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 0,
        match: ',',
        startIndex: 74,
        endIndex: 75,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 0,
        match: 'b',
        startIndex: 76,
        endIndex: 77,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 0,
        match: ',',
        startIndex: 77,
        endIndex: 78,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 0,
        match: 'key',
        startIndex: 79,
        endIndex: 82,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 0,
        match: 'do',
        startIndex: 83,
        endIndex: 85,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'group.loop.do.idl',
          'keyword.control.idl',
        ],
      },
      {
        line: 0,
        match: 'print',
        startIndex: 86,
        endIndex: 91,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'group.loop.do.idl',
          'group.call.pro.idl',
          'support.function.idl-procedure',
        ],
      },
      {
        line: 0,
        match: ',',
        startIndex: 91,
        endIndex: 92,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'group.loop.do.idl',
          'group.call.pro.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 0,
        match: 'key',
        startIndex: 93,
        endIndex: 96,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'group.loop.do.idl',
          'group.call.pro.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 0,
        match: ',',
        startIndex: 96,
        endIndex: 97,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'group.loop.do.idl',
          'group.call.pro.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 0,
        match: 'val',
        startIndex: 98,
        endIndex: 101,
        scopes: [
          'source.idl',
          'group.loop.for-foreach.idl',
          'group.loop.do.idl',
          'group.call.pro.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 0,
        match: '& ',
        startIndex: 102,
        endIndex: 104,
        scopes: ['source.idl'],
      },
      {
        line: 0,
        match: 'endedit',
        startIndex: 104,
        endIndex: 111,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
    ];
    expect(expected).toEqual(tokenized);
  });

  it(`[auto generated] line separators in case statement`, async () => {
    // test code to extract tokens from
    const code = [
      `CASE typ OF`,
      `  7: begin val = "<Undefined>" & cnt = 1  & endcase`,
      `  8: val = tiff_sint(val, 0, len=cnt)`,
      `ENDCASE`,
    ];

    // extract tokens
    const tokenized = await TextMateParse(code);

    // define expected tokens
    const expected = [
      {
        line: 0,
        match: 'CASE',
        startIndex: 0,
        endIndex: 4,
        scopes: ['source.idl', 'group.logic.case.idl', 'keyword.control.idl'],
      },
      {
        line: 0,
        match: 'typ',
        startIndex: 5,
        endIndex: 8,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 0,
        match: 'OF',
        startIndex: 9,
        endIndex: 11,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'keyword.control.idl',
        ],
      },
      {
        line: 1,
        match: '7',
        startIndex: 2,
        endIndex: 3,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'constant.numeric.idl',
        ],
      },
      {
        line: 1,
        match: ':',
        startIndex: 3,
        endIndex: 4,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'keyword.control.idl',
        ],
      },
      {
        line: 1,
        match: ' begin',
        startIndex: 4,
        endIndex: 10,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.block.idl',
          'keyword.control.idl',
        ],
      },
      {
        line: 1,
        match: 'val',
        startIndex: 11,
        endIndex: 14,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.block.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 1,
        match: '=',
        startIndex: 15,
        endIndex: 16,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.block.idl',
          'group.assignment.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 1,
        match: '"',
        startIndex: 17,
        endIndex: 18,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.block.idl',
          'group.assignment.idl',
          'string.quoted.double.idl',
        ],
      },
      {
        line: 1,
        match: '<Undefined>',
        startIndex: 18,
        endIndex: 29,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.block.idl',
          'group.assignment.idl',
          'string.quoted.double.idl',
        ],
      },
      {
        line: 1,
        match: '"',
        startIndex: 29,
        endIndex: 30,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.block.idl',
          'group.assignment.idl',
          'string.quoted.double.idl',
        ],
      },
      {
        line: 1,
        match: '& ',
        startIndex: 31,
        endIndex: 33,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.block.idl',
        ],
      },
      {
        line: 1,
        match: 'cnt',
        startIndex: 33,
        endIndex: 36,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.block.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 1,
        match: '=',
        startIndex: 37,
        endIndex: 38,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.block.idl',
          'group.assignment.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 1,
        match: '1',
        startIndex: 39,
        endIndex: 40,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.block.idl',
          'group.assignment.idl',
          'constant.numeric.idl',
        ],
      },
      {
        line: 1,
        match: '&',
        startIndex: 42,
        endIndex: 43,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.block.idl',
        ],
      },
      {
        line: 1,
        match: ' endcase',
        startIndex: 43,
        endIndex: 51,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.block.idl',
          'keyword.control.idl',
        ],
      },
      {
        line: 2,
        match: '8',
        startIndex: 2,
        endIndex: 3,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'constant.numeric.idl',
        ],
      },
      {
        line: 2,
        match: ':',
        startIndex: 3,
        endIndex: 4,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'keyword.control.idl',
        ],
      },
      {
        line: 2,
        match: 'val',
        startIndex: 5,
        endIndex: 8,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 2,
        match: '=',
        startIndex: 9,
        endIndex: 10,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.assignment.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 2,
        match: 'tiff_sint',
        startIndex: 11,
        endIndex: 20,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.assignment.idl',
          'group.call.func.idl',
          'entity.name.function.idl',
        ],
      },
      {
        line: 2,
        match: '(',
        startIndex: 20,
        endIndex: 21,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.assignment.idl',
          'group.call.func.idl',
          'meta.brace.round.idl',
        ],
      },
      {
        line: 2,
        match: 'val',
        startIndex: 21,
        endIndex: 24,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.assignment.idl',
          'group.call.func.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 2,
        match: ',',
        startIndex: 24,
        endIndex: 25,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.assignment.idl',
          'group.call.func.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 2,
        match: '0',
        startIndex: 26,
        endIndex: 27,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.assignment.idl',
          'group.call.func.idl',
          'constant.numeric.idl',
        ],
      },
      {
        line: 2,
        match: ',',
        startIndex: 27,
        endIndex: 28,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.assignment.idl',
          'group.call.func.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 2,
        match: 'len',
        startIndex: 29,
        endIndex: 32,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.assignment.idl',
          'group.call.func.idl',
          'parameter.usage.keyword.idl',
          'entity.other.attribute-name.idl',
        ],
      },
      {
        line: 2,
        match: '=',
        startIndex: 32,
        endIndex: 33,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.assignment.idl',
          'group.call.func.idl',
          'parameter.usage.keyword.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 2,
        match: 'cnt',
        startIndex: 33,
        endIndex: 36,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.assignment.idl',
          'group.call.func.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 2,
        match: ')',
        startIndex: 36,
        endIndex: 37,
        scopes: [
          'source.idl',
          'group.logic.case.idl',
          'group.logic.of.idl',
          'group.logic.then.idl',
          'group.assignment.idl',
          'group.call.func.idl',
          'meta.brace.round.idl',
        ],
      },
      {
        line: 3,
        match: 'ENDCASE',
        startIndex: 0,
        endIndex: 7,
        scopes: ['source.idl', 'group.logic.case.idl', 'keyword.control.idl'],
      },
    ];
    expect(expected).toEqual(tokenized);
  });

  it(`[auto generated] verifies nested line continuations use basic token`, async () => {
    // test code to extract tokens from
    const code = [`scale=scale, $, $`];

    // extract tokens
    const tokenized = await TextMateParse(code);

    // define expected tokens
    const expected = [
      {
        line: 0,
        match: 'scale',
        startIndex: 0,
        endIndex: 5,
        scopes: ['source.idl', 'variable.other.readwrite.ts.idl'],
      },
      {
        line: 0,
        match: '=',
        startIndex: 5,
        endIndex: 6,
        scopes: ['source.idl', 'group.assignment.idl', 'keyword.operator.idl'],
      },
      {
        line: 0,
        match: 'scale',
        startIndex: 6,
        endIndex: 11,
        scopes: [
          'source.idl',
          'group.assignment.idl',
          'variable.other.readwrite.ts.idl',
        ],
      },
      {
        line: 0,
        match: ',',
        startIndex: 11,
        endIndex: 12,
        scopes: ['source.idl', 'keyword.operator.idl'],
      },
      {
        line: 0,
        match: '$',
        startIndex: 13,
        endIndex: 14,
        scopes: [
          'source.idl',
          'group.line-continuation.idl',
          'keyword.operator.idl',
        ],
      },
      {
        line: 0,
        match: ', $',
        startIndex: 14,
        endIndex: 17,
        scopes: ['source.idl', 'group.line-continuation.idl'],
      },
    ];
    expect(expected).toEqual(tokenized);
  });
});
