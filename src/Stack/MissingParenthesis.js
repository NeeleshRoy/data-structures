import Stack from './Stack';

export default function (expression = '') {
  const stack = new Stack();

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '(') {
      stack.push(i);
    }

    if (expression[i] === ')') {
      if (stack.pop() === undefined) {
        return i;
      }
    }
  }

  if (stack.length() === 1) {
    return stack.peek();
  }

  return -1;
}
