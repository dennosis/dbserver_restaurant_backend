const schema  = require('../database/schema')

class Vote extends schema {
    constructor(obj) {
        super()
        this.id = obj.id
        this.userId = obj.userId;
        this.restaurantId = obj.restaurantId;
        this.date = obj.date  
    }
}

module.exports = Vote
