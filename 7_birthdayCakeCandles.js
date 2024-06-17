function birthdayCakeCandles(candles) {
  // Write your code here
  let high = [];
  let top = Math.max(...candles);

  for (const num of candles) {
    if (num === top) {
      high.push(num);
    }
  }
  return high.length;
  // console.log(Math.max(...candles));
  // console.log(high);
  //   console.log(high.length);
}

let candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles));
