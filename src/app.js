function addition(a, b) {
  return a + b;
}

function multiplication(a, b) {
  return a * b;
}

function concatOdds(a, b) {
  const array = a.concat(b);
  return array.filter((e) => e % 2 !== 0).sort((a,b) => a -b);
}

console.log(concatOdds([1, 2, 5, 4, 3], [15, 14, 9, 5, 7, 22, 1, 3]))

export { addition, multiplication, concatOdds };