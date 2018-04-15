import Stack from './Stack';

export default function (dispenser) {
  const s1 = new Stack();
  const s2 = new Stack();
  for (let i = 0; i < dispenser.length(); i++) {
    if (dispenser.datastore[i] !== 'yellow') {
      s1.push(dispenser.datastore[i]);
    }
  }
  for (let i = 0; i < s1.length(); i++ ) {
    s2.push(s1.datastore[i]);
  }
  return s2;
}
