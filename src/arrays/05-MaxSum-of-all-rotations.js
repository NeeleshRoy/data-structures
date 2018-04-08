import rotate from './03-array-rotation-cyclic';
export default function (array) {
  const length = array.length;
  if (length === 1 || length === 0) return array;

  let arrayCopy = array;
  let maxVal = 0;
  arrayCopy.forEach(() => {
    let arrVal = 0;
    arrayCopy = rotate(arrayCopy);
    for (let i = 0; i < length; i++) {
      arrVal += i * arrayCopy[i];
    }
    if (arrVal > maxVal) maxVal = arrVal;
  });

  return maxVal;
}
