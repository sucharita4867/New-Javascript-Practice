function bestTeam(player1, player2) {
  if (typeof player1 != "object" || typeof player2 != "object") {
    return "Invalid";
  }
  let newPlayer1 = player1.foul + player1.cardY + player1.cardR;
  let newPlayer2 = player2.foul + player2.cardY + player2.cardR;
  if (newPlayer1 < newPlayer2) {
    return player1.name;
  } else if (newPlayer1 == newPlayer2) {
    return "Tie";
  } else {
    return player2.name;
  }
}
const result = bestTeam(
  { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
  { name: "France", foul: 10, cardY: 2, cardR: 1 }
);
console.log(result);
