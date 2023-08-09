class Game {

    constructor(player, bot) {
        this.player = player;
        this.bot = bot;
    }

    calculateWinner() {
        const handMoves = { rock: "scissors", scissors: "paper", paper: "rock" }
        if (handMoves[this.player.getMove()] === this.bot.getMove()) {
            return `${this.player.getName()} wins!`;
        }
        if (handMoves[this.bot.getMove()] === this.player.getMove()) {
            return `${this.bot.getName()} wins!`;
        }
        return "It is a draw!";
    }

}

export default Game;