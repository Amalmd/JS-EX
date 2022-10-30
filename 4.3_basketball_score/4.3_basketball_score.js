const scoreLina = Math.round((189 + 120 + 103) / 3);
const scoreMais = Math.round((129 + 94 + 123) / 3);
const scoreAbod = Math.round((97 + 134 + 105) / 3);
console.log(scoreLina, scoreMais, scoreAbod);

if (scoreLina > scoreMais && scoreLina > scoreAbod) {
  console.log("Lina's team wins with " + scoreLina + ' points');
} else if (scoreMais > scoreLina && scoreMais > scoreAbod) {
  console.log("Mais's team wins with " + scoreMais + ' points');
} else if (scoreAbod > scoreLina && scoreAbod > scoreMais) {
  console.log("Abod's team wins with " + scoreAbod + ' points');
} else {
  console.log('There is a draw');
}

if (scoreLina > scoreMais) {
  console.log("Lina's team wins with " + scoreLina + ' points');
} else if (scoreMais > scoreLina) {
  console.log("Mais's team wins with " + scoreMais + ' points');
} else {
  console.log('There is a draw');
}