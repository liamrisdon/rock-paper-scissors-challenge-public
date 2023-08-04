import { expect } from "chai";
import Player from "../src/player.js"

describe("player tests", () => {

    it("should create an instance of a new player", () => {

        const newPlayer = new Player("TestPlayer");
        expect(newPlayer).instanceOf(Player);

    })
})