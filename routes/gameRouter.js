import express from "express";
const router = express.Router();
import Game from "../src/game.js";
import Player from "../src/player.js";
import Bot from "../src/bot.js";

router.post('/', (req, res) => {

    const currentPlayer = new Player(req.body.player);
    const bot = new Bot()
    const game = new Game(currentPlayer, bot)
    req.app.locals.game = game


    res.redirect("/game");

});

router.get('/', (req, res) => {

    const player = req.app.locals.game;

    res.render("game", {
        player: player.player,
        bot: player.bot
    })

})


export { router as gameRouter };