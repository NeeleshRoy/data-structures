export default function (array, d) {
  const length = array.length;
  if (length === d || d === 0) return array;

  let a = array.slice(0, d);
  let b = array.slice(d, length);

  a = a.reverse();
  b = b.reverse();
  const c = a.concat(b);

  return c.reverse();
}
