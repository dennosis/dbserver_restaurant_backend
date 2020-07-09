const request  = require('supertest')
const app = require('../../src/app');

describe('create', () => {
    it('create restaurant with location', async () => {
        
        const response =  await request(app)
            .post("/restaurant")
            .send({
                "name": "mCdonaldsTeste",
                "location": "https://www.mcdonalds.com.br/"
            })

        expect(response.status).toBe(200)
    });
});

describe('update', () => {
    it('update favorite restaurant of the restaurant', async () => {
        const response =  await request(app)
            .put("/restaurant")
            .send({
                "id": "3MwxVwC_i",
                "name": "restaurantTeste"
            })
        expect(response.body.name).toBe("restaurantTeste")
    });
});

describe('update', () => {
    it('update invalid name of the restaurant', async () => {
        const response =  await request(app)
            .put("/restaurant")
            .send({
                "id": "3MwxVwC_i",
                "name": ""
            })
        
        expect(response.status).toBe(400)
    });
});

describe('delete', () => {
    it('deleting a restaurant', async () => {
        const response =  await request(app)
            .delete("/restaurant/3MwxVwC_i")
            expect(response.status).toBe(200)
    });
});

