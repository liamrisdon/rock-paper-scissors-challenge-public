import express from "express";
const router = express.Router();

router.post("/", (req, res) => {

    const game = req.app.locals.game;

    const choice = req.body.choice
    game.player.setMove(choice);
    game.bot.createRandomMove();
    const botMove = game.bot.getMove();

    const result = game.calculateWinner();
    req.app.locals.result = result;

    res.render("result", {
        choice: choice,
        result: result,
        botMove: botMove
    });

});


export { router as resultRouter };