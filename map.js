var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback){
  var finalResult =[];
 for(var i = 0; i < words.length; i++){
  finalResult.push(callback(array[i]));

 }
 return finalResult;
}




 var result1= map(words, function(word) {
  return word.length;
});

 var result2= map(words, function(word) {
  return word.toUpperCase();
});

var result3= map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(result1);
console.log(result2);
console.log(result3);


