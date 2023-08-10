class Bot {

    name = "Bot";
    move = " ";

    createRandomMove() {
        const moves = ["rock", "paper", "scissors", "lizard", "Spock"];
        const randomChoice = Math.floor(Math.random() * 5);
        this.move = moves[randomChoice];
        return this.move;
    }

    getName() { return this.name; }

    getMove() { return this.move; }

}

export default Bot;