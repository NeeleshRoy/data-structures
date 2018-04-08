export default function (a, b) {
  if (typeof(a) === 'object') {
    const temp = a;
    a = b;
    b = temp;
    return a.concat(b);
  }
  return [b, a];
}
