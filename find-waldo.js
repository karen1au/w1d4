function findWaldo(arr, found) {
  arr.forEach(name => {
    if (name === "Waldo") {
      found(arr.indexOf(name));   // execute callback
    }
  });
}

function actionWhenFound(idx) {
  console.log("Found Waldo at index "+idx+"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// Found Waldo at index 2!