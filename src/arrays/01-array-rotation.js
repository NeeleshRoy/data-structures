export default function (array, d) {
  const length = array.length;
  if (length === d || d === 0) return array;

  const temp = [];
  for (let i = 0; i < d; i++) {
    temp.push(array[i]);
  }
  return array.slice(d).concat(temp);
}
