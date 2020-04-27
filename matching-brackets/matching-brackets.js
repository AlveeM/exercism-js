export const isPaired = (str) => {
  // var: str length
  const strLen = str.length;
  // var: array to keep track of parens
  const stack = [];

  // iterate over str
  for (let i = 0; i < strLen; i++) {
    // var: store current paren
    const curPar = str[i];
    // if: closing parens
    if (curPar == ')' || curPar == '}' || curPar == ']') {
      // empty stack: return false
      if (stack.length == 0) return false;
      // var: get open paren from stack
      const openPar = stack.pop();
      // if: open paren not correct; return false
      if((curPar == ')' && openPar != '(')
        || (curPar == '}' && openPar != '{')
        || (curPar == ']' && openPar != '[')
      ) {
        return false;
      }
      // else if: open paren; push to stack
    } else if (curPar == '(' || curPar == '{' || curPar == '[') {
      // push open paren into stack
      stack.push(curPar);
    } else {
      continue;
    }
  }

  // if: stack is not empty; return false
  if (stack.length != 0) return false;

  // return true
  return true;
};
