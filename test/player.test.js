import { expect } from "chai";
import Player from "../src/player.js"

describe("player tests", () => {

    let newPlayer;

    beforeEach(() => {
        newPlayer = new Player("TestPlayer")
    })

    it("should create an instance of a new player", () => {

        expect(newPlayer).instanceOf(Player);

    })

    it('should return the correct name for a new player', () => {
        let expected = "TestPlayer"
        expect(newPlayer.getName()).to.equal(expected);
    })

    it('should set the correct move for the player', () => {
        let testMove = "paper"
        newPlayer.setMove(testMove);
        expect(newPlayer.getMove()).to.equal(testMove);
    })
})