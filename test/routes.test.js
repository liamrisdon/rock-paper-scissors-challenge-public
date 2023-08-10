import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import App from "../App.js";

chai.use(chaiHttp)


describe("Routes tests", () => {

    it('/POST game test ', async () => {
        const res = await chai.request(App)
            .post("/game")
            .send({ player: 'Liam' });

        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');

    })
})