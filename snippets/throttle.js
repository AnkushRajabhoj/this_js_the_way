// Train: departs at schedule
// Ensures the function is called at most once per time interval.
// Use case: Button spamming, Event listener where state doesn't matter

function throttle(func, limit) {
  let isRunning = false;
  return function (...args) {
    if (!isRunning) {
      isRunning = true;
      func.apply(this, args);
      setTimeout(() => (isRunning = false), limit);
    }
  };
}

// Example
window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Scrolling...");
  }, 200)
);
