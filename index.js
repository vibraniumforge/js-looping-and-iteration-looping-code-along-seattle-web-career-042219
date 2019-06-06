function writeCards(arr) {
  let newAr = [];
  for (let i = 0; i < arr.length; i++) {
    newAr.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
  }
  return newAr;
}

function countdown(x) {
  for (let i = x; i >= 0; i--) {
    console.log(i);
  }
}
