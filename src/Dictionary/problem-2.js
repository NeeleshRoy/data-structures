import Dictionary from './Dictionary';

export default function (sentence) {
  const words = sentence.split(' ');
  const dict = new Dictionary();
  let counter = 0;

  words.forEach(element => {
    for (let i = 0; i < words.length; i++) {
      if (words[i] === element) {
        ++counter;
      }
    }
    dict.add(element, counter);
    counter = 0;
  });

  return dict.showAll();
}
