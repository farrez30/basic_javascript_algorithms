function diagonalDifference(arr) {
  // Write your code here
  let left = 0;
  let right = 0;
  let i = 0;
  let j = arr[0].length - 1;
  for (const item of arr) {
    left += item[i];
    right += item[j];
    i++;
    j--;
  }
  return Math.abs(left - right);
}

let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(arr));
