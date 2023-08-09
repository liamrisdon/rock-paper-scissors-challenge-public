import express from "express";
const router = express.Router();

router.post("/", (req, res) => {

    const game = req.app.locals.game

    const choice = req.body.choice
    game.player.setMove(choice);


    const result = game.calculateWinner();
    req.app.locals.result = result;;

    res.render("result", {
        choice: choice,
        result: result
    })

    // res.redirect("/result");

});


export { router as resultRouter };