const rotateString = (str, n, direction) => {
  // str = input string
  // n = number of rotations
  //
  // input str = random ,1, right
  // output mrando
  let result = '';
  const leftRotate = () => {
    strFirst = str.slice(0, n);
    strSecond = str.slice(n);
    strComplete = strSecond + strFirst;
    return strComplete;
  };
  const rightRotate = () => {
    strFirst = str.slice(-n);
    strSecond = str.slice(0, (str.length) - n);
    strComplete = strFirst + strSecond;
    return strComplete;
  };
  if (str || n || direction) {
    if (direction === 'right') {
      result = rightRotate();
    } else if (direction === 'left') {
      result = leftRotate();
    } else {
      throw Error('Invalid Direction');
    }
  } else {
    throw Error('Invalid Input');
  }
  return result;
}
module.exports = rotateString;
