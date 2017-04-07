function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;//setting the index to 0

  return function() {
    var result = list[i];//value of the arrary at the index "i"
    i += 1;//adding 1 to the index number
    return result
  }
}

var rollLoadedDie = makeLoadedDie();//calling the result of the makeLoadedDie function, which is a function

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());