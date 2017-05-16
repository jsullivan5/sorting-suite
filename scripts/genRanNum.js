function genRanNum(count) {
  var numArray = [];

  for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * 100)
    numArray.push(randomNumber)
  }
  return numArray;
}




export default genRanNum
