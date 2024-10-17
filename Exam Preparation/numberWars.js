function numbersGame(input) {
    let player1 = input[0];
    let player2 = input[1];

    let pointsPlayer1 = 0;
    let pointsPlayer2 = 0;

    let index = 2;

    while (index < input.length) {
        if (input[index] === "End of game") {
            console.log(`${player1} has ${pointsPlayer1} points`);
            console.log(`${player2} has ${pointsPlayer2} points`);
            return;
        }

        let card1 = Number(input[index]);
        let card2 = Number(input[index + 1]);

        if (card1 > card2) {
            pointsPlayer1 += (card1 - card2);
        } else if (card2 > card1) {
            pointsPlayer2 += (card2 - card1);
        } else {
            console.log("Number wars!");
            index += 2;

            let card1War = Number(input[index]);
            let card2War = Number(input[index + 1]);

            if (card1War > card2War) {
                console.log(`${player1} is winner with ${pointsPlayer1} points`);
                return;
            } else {
                console.log(`${player2} is winner with ${pointsPlayer2} points`);
                return;
            }
        }

        index += 2;
    }
}
numbersGame(["Elena",
"Simeon",
"6",
"3",
"2",
"5",
"8",
"9",
"End of game"]);
