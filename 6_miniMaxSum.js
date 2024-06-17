function miniMaxSum(arr) {
  // Write your code here
  let final = [];
  let temp = 0;
  let i = 0;

  while (i <= arr.length - 1) {
    arr.map((num, idx) => {
      if (i !== idx) {
        temp += num;
      } else {
        temp += 0;
      }
    });
    final.push(temp);
    temp = 0;
    i++;
  }

  //   console.log(temp);
  //   console.log(final);
  console.log(Math.min(...final), Math.max(...final));
}

let arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);
