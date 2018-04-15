export default function (a, b) {
  if (a instanceof Object) {
    const temp = a;
    a = b;
    b = temp;
    return a.concat(b);
  }
  return [b, a];
}
