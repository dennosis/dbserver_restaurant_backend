const schema  = require('../database/schema')

class Vote extends schema {
    constructor(obj) {
        super()
        this.id = obj.id
        this.userId = obj.userId;
        this.restaurantId = obj.restaurantId;
        this.date = (new Date).toLocaleDateString()  
    }
}

module.exports = Vote
