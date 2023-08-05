class Bot {

    setRandomMove() {
        const moves = ["rock", "paper", "scissors"];
        const randomChoice = Math.floor(Math.random() * 3);
        return moves[randomChoice];
    }

}

export default Bot;