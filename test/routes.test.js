import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import App from "../App.js";

chai.use(chaiHttp);


describe("Routes tests", () => {

    it('/POST game test ', async () => {

        const res = await chai.request(App)
            .post("/game")
            .send({ player: 'Liam' });

        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');

    });

    it('/POST results test', async () => {

        const res = await chai.request(App)
            .post("/result")
            .send({ choice: 'Spock' });

        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');

    });

    it('/GET render index test', async () => {

        const res = await chai.request(App)
            .get("/");

        expect(res).to.have.status(200);

    });

});