
// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
 arr.forEach(function(name)){
  if (name === "Waldo"){
   found(i);
  }
 }
}
​
function actionWhenFound(indexWaldo) {
 console.log("Found Waldo at index " + indexWaldo);
}
​
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound)