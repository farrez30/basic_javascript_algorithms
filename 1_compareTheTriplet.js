function compareTriplets(a, b) {
  let final = [];
  let aScore = 0;
  let bScore = 0;
  let i = 0;
  for (const itemA of a) {
    if (itemA > b[i]) {
      aScore++;
    } else if (itemA < b[i]) {
      bScore++;
    }
    i++;
  }
  final.push(aScore, bScore);
  return final;
}

const final = compareTriplets([5, 6, 7], [3, 6, 10]);
console.log(final);
