const schema  = require('../database/schema')

class Restaurant extends schema {

    constructor(obj) {
        super()
        this.id = obj.id
        this.name = obj.name;
        this.location = obj.location;    
    }
}

module.exports = Restaurant