import { TokenName } from '@idl/tokenizer';

import { TokenFormatter } from '../../formatter-rule-set.interface';

/**
 * Consistent formatting for python code
 */
export const PYTHON_FORMATTER: TokenFormatter<TokenName> = (token) => {
  token.match[0] = token.match[0].replace(/>>>\s*/g, '>>>');
};
