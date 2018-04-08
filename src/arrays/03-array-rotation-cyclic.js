export default function (array) {
  return array.slice(1).concat(array.slice(0, 1));
}
