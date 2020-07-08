const schema  = require('../database/schema')

class User extends schema {
    constructor(obj) {
        super()
        this.id = obj.id;
        this.name = obj.name;
        this.favoriteRestaurantId = obj.favoriteRestaurantId;   
    }
}

module.exports = User
