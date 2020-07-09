const request  = require('supertest')
const app = require('../../src/app');

describe('create', () => {
    it('create a vote', async () => {
        
        const response =  await request(app)
            .post("/vote")
            .send({
                "userId": "ofgRM3NLf",
                "restaurantId": "pSHyyevJv",
                "date": "9/5/2020"
            })

        expect(response.status).toBe(200)
    });
});

describe('create', () => {
    it('create a invalide date vote', async () => {
        
        const response =  await request(app)
            .post("/vote")
            .send({
                "id":"IuvDCVoOb",
                "userId": "ofgRM3NLf",
                "restaurantId": "9Crx0fKP9M",
                "date": "7/5/2020"
            })

        expect(response.status).toBe(405)
    });
});

describe('update', () => {
    it('update restaurant of the vote', async () => {
        const response =  await request(app)
            .put("/vote")
            .send({
                "id": "IuvDCVoOb",
                "userId": "ofgRM3NLf",
                "restaurantId": "y5Vi1KJjB",
                "date": "9/5/2020"
            })

        expect(response.body.restaurantId).toBe("y5Vi1KJjB")
    });
});

describe('delete', () => {
    it('deleting a user', async () => {
        const response =  await request(app)
            .delete("/vote/IuvDCVoOb")

            expect(response.status).toBe(200)
        });
});