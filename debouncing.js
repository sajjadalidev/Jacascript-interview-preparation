// debouncing concept: is used for optimizing and performance of the web application
// How => Limiting the rate of execution of a function
// For example if we want to fetch data from backend at every key press by user so we can make them bound for specific time
// We can review a short example of debouncing method in JavaScript

let counter = 1;
function getData() {
  // fetch data from backend
  console.log("counter", counter++);
}

// Debouncing Implementation

function debounce(fn, de) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, de);
  };
}

// Debouncing , betterFunction

const betterFunction = debounce(getData, 500);
