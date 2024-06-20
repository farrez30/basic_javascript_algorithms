function aVeryBigSum(ar) {
  let final = 0;
  for (const n of ar) {
    final += n;
  }
  return final;
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
