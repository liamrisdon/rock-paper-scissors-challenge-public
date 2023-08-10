class Bot {

    name = "Bot";
    move = " ";

    createRandomMove() {
        const moves = ["rock", "paper", "scissors"];
        const randomChoice = Math.floor(Math.random() * 3);
        this.move = moves[randomChoice];
        return this.move;
    }

    getName() { return this.name; }

    getMove() { return this.move; }

}

export default Bot;