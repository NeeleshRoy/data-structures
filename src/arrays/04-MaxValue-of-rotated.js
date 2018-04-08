export default function (array) {
  const length = array.length;
  let arrSum = 0;
  let currVal = 0;

  for (let i = 0; i < length; i++) {
    arrSum += array[i];
    currVal += (i * array[i]);
  }

  let maxVal = currVal;

  for (let j = 1; j < length; j++) {
    currVal += (arrSum - length * array[length - j]);
    if (currVal > maxVal) {
      maxVal = currVal;
    }
  }

  return maxVal;
}
