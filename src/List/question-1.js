export default function (element, list) {
  const items = list.toString();
  for (let i = 0; i < list.length(); i++) {
    if (items[i] < element) {
      list.append(element);
      return list;
    }
  }
  return list;
}
