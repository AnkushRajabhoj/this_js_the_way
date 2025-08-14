function deepCopy(value, cache = new WeakMap()) {
  console.log(typeof value);

  // Handle primitives and functions (functions are assigned by reference)
  if (value === null || typeof value !== "object") {
    return value;
  }

  // Handle circular references
  if (cache.has(value)) {
    return cache.get(value);
  }

  // console.log(typeof value);
  // console.log(value instanceof Object);

  // Handle Date
  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  // Handle RegExp
  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags);
  }

  // Handle Array
  if (Array.isArray(value)) {
    const copy = [];
    cache.set(value, copy);
    value.forEach((item, index) => {
      copy[index] = deepCopy(item, cache);
    });
    return copy;
  }

  // Handle Object
  const copy = {};
  cache.set(value, copy);
  Object.keys(value).forEach((key) => {
    copy[key] = deepCopy(value[key], cache);
  });
  return copy;
}

const original = {
  name: "Ankush",
  meta: {
    age: 30,
    hobbies: ["coding", "trekking"],
  },
  greet: function () {
    console.log(`Hi, I'm ${this.name}`);
  },
  date: new Date(),
  regex: /abc/gi,
};

const copied = deepCopy(original);
console.log(copied);

// Test immutability for deep value
copied.meta.age = 100;
console.log(original.meta.age); // 30 -> original remains unchanged

// Test function behavior
copied.greet();
copied.name = "Ankush Rajabhoj";
copied.greet();

// They point to the same function
console.log(original.greet === copied.greet); // true

// Changing function behavior (not recommended in practice)
original.greet.customProp = "hello";
console.log(copied.greet.customProp); // "hello" → proves it's the same reference

// Avoid
const jsonCopied = JSON.parse(JSON.stringify(original));
//Loses Date, RegExp, undefined, Map, Set, functions
// Breaks with circular references

console.log(jsonCopied);
console.log(copied);
