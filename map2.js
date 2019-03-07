var words = ["ground", "control", "to", "major", "tom"];

function length(word) {
  return word.length;
}

function upperCase(word) {
  return word.toUpperCase();
}

function reverse(word) {
  return word.split('').reverse().join('');
}

function myMap(arr, callback){
  var newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr.push(callback(arr[i]));

  }return newArr;
  //console.log(arr.map(callback));
}

console.log(myMap(words,upperCase));