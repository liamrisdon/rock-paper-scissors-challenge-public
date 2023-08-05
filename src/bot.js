class Bot {

    #name = "Bot"

    setRandomMove() {
        const moves = ["rock", "paper", "scissors"];
        const randomChoice = Math.floor(Math.random() * 3);
        return moves[randomChoice];
    }

    getName() { return this.#name; }

}

export default Bot;