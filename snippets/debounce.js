// Elevator: starts again if called
// Ensures the function is called after a delay when a user stops triggering the event.
// Use case: Look ahead input search, window resizing, scroll events
// If it is important to call function for last state

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example
window.addEventListener(
  "resize",
  debounce(() => {
    console.log("Resized!");
  }, 500)
);
