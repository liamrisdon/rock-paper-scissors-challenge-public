import { expect } from "chai";
import Game from "../src/game.js";

describe("game tests", () => {

    let newGame

    it('should set up a new game', () => {
        newGame = new Game();
        expect(newGame).instanceOf(Game);
    })



    it('should calculate winner of the game', () => {

        const newPlayer = {
            getMove() { return "paper" },
            getName() { return "newPlayer" }
        }

        const newBot = {
            getMove() { return "rock" },
            getName() { return "newBot" }
        }

        newGame = new Game(newPlayer, newBot);

        const result = newGame.calculateWinner();
        expect(result).to.equal("newPlayer wins!");

    })

    it('should allow the bot to win', () => {

        const newPlayer = {
            getMove() { return "paper" },
            getName() { return "newPlayer" }
        }

        const newBot = {
            getMove() { return "scissors" },
            getName() { return "Bot" }
        }

        newGame = new Game(newPlayer, newBot);

        const result = newGame.calculateWinner();
        expect(result).to.equal("Bot wins!");

    })

    it('should return a draw if moves are the same', () => {

        const newPlayer = {
            getMove() { return "paper" },
        }

        const newBot = {
            getMove() { return "paper" },
        }

        newGame = new Game(newPlayer, newBot);

        const result = newGame.calculateWinner();
        expect(result).to.equal("It is a draw!");
    })

})