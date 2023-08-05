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
        expect(handMoves).to.include(newBot.setRandomMove());

    })
})