function flattenArray(arr) {
  return arr.reduce(
    (flat, item) =>
      Array.isArray(item) ? flat.concat(flattenArray(item)) : flat.concat(item),
    []
  );
}

// Example
console.log(flattenArray([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]
