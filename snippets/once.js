// compute once, then reuse result
//
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }
    return result;
  };
}

// Example
const initialize = once(() => console.log("Initialized!"));
initialize(); // Output: Initialized!
initialize(); // No output
