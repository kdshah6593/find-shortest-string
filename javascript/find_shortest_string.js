function findShortestString(arr) {
  // type your code here
  word = ""
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      word = arr[i]
    } else if (arr[i].length < word.length) {
      word = arr[i];
    }
  }
  return word;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  startTime = Date.now();
  for (let i = 0; i < 1000; i++) {
    findShortestString(['flower', 'juniper', 'lily', 'dadelion'])
  }
  currentTime = Date.now();
  runTime = (currentTime - startTime) / 2000;
  console.log(runTime);

}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
