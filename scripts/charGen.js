function charGen(stringLength) {
  var text = '';
  let stringArray;
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < stringLength; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  stringArray = text.split('');

  return stringArray;
}

export default charGen;
