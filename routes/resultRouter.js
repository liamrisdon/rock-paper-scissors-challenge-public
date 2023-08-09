import express from "express";
const router = express.Router();

router.post("/", (req, res) => {

    const game = req.app.locals.game

    const choice = req.body.choice
    game.player.setMove(choice);
    game.bot.createRandomMove();


    const result = game.calculateWinner();
    req.app.locals.result = result;

    const botMove = game.bot.getMove();

    console.log(botMove);

    res.render("result", {
        choice: choice,
        result: result,
        botMove: botMove
    })

    // res.redirect("/result");

});


export { router as resultRouter };