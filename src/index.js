module.exports = function multiply(first, second) {
  let arrayFirst = first.split('').reverse();
  let arraySecond = second.split('').reverse();
  let arrayStack = [];

  for (let i = 0; i < arrayFirst.length; i++) {
    for (let j = 0; j < arraySecond.length; j++) {
      let multiplication = arrayFirst[i] * arraySecond[j];
      arrayStack[i + j] = (arrayStack[i + j]) ? arrayStack[i + j] + multiplication : multiplication;
    }
  }

  for (let i = 0; i < arrayStack.length; i++) {
    let remain = arrayStack[i] % 10;
    let ten = Math.floor(arrayStack[i] / 10);
    arrayStack[i] = remain;
    
    if (arrayStack[i + 1]) {
      arrayStack[i + 1] += ten;
    } else if (ten != 0) {
      arrayStack[i + 1] = ten;
    }
  }

  let result = arrayStack.reverse().join('');
  return result;
}
