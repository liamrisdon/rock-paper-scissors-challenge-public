class Game {

    constructor(player, bot) {
        this.player = player;
        this.bot = bot;
    }

    calculateWinner() {
        const handMoves = { rock: ["scissors", "lizard"], scissors: ["paper", "lizard"], paper: ["rock", "Spock"], lizard: ["Spock", "paper"], Spock: ["scissors", "rock"] }
        if (handMoves[this.player.getMove()].includes(this.bot.getMove())) {
            return `${this.player.getName()} wins!`;
        }
        if (handMoves[this.bot.getMove()].includes(this.player.getMove())) {
            return `${this.bot.getName()} wins!`;
        }
        return "It is a draw!";
    }

}

export default Game;