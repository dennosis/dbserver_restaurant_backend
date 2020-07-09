const request  = require('supertest')
const app = require('../../src/app');

describe('create', () => {
    it('create user with favorite restaurant', async () => {
        
        const response =  await request(app)
            .post("/user")
            .send({
                "name": "DennisTeste",
                "favoriteRestaurantId": "3MwxVwC_i"
            })

        expect(response.status).toBe(200)
    });
});

describe('update', () => {
    it('update favorite restaurant of the user', async () => {
        const response =  await request(app)
            .put("/user")
            .send({
                "id":"ofgRM3NLf",
                "name": "Dennis",
                "favoriteRestaurantId": "9Crx0fKP9M"
            })
        expect(response.body.favoriteRestaurantId).toBe("9Crx0fKP9M")
    });
});

describe('update', () => {
    it('update invalid name of the user', async () => {
        const response =  await request(app)
            .put("/user")
            .send({
                "id":"ofgRM3NLf",
                "name": "",
                "favoriteRestaurantId": "9Crx0fKP9M"
            })
        
        expect(response.status).toBe(400)
    });
});


describe('delete', () => {
    it('deleting a user', async () => {
        const response =  await request(app)
            .delete("/user/ofgRM3NLf")

            expect(response.status).toBe(200)
        });
});