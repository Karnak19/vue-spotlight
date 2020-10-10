export default function flatten(items) {
  const flat = [];

  items.forEach((item) => {
    flat.push({ name: item.name, path: item.path });
    if (Array.isArray(item.children)) {
      flat.push(...flatten(item.children));
    }
  });

  return flat;
}
