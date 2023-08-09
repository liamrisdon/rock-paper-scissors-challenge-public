import { expect } from "chai";
import Bot from "../src/bot.js";

describe("Bot tests", () => {

    let newBot;

    beforeEach(() => {
        newBot = new Bot();
    })

    it('should create a new instance of a bot', () => {
        expect(newBot).instanceOf(Bot);
    })

    it('should set a random move for the bot', () => {
        const handMoves = ["rock", "paper", "scissors"];
        expect(handMoves).to.include(newBot.createRandomMove());

    })

    it('should return the correct move when get move is called on bot', () => {

        let expected = newBot.createRandomMove();
        console.log(`expected: ${expected}`);
        expect(newBot.getMove()).to.equal(expected);

    })
})