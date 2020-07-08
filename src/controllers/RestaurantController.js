const Restaurant = require('../models/Restaurant');
const Vote = require('../models/Vote');

module.exports = {
    index: async (req, res) => {
        try {
            res.json(Restaurant.find())
        } catch (error) {
            res.status(500).json({message: "Error find restaurant", error: error});
        }
    },
    create : async (req, res) => {
        try {
            const { name, location } = req.body
            const restaurant = await new Restaurant({name, location})
            await restaurant.save()
            res.json(restaurant)
        } catch (error) {
            res.status(500).json({message: "Error create restaurant", error: error});
        }
    },
    show : async (req, res) => {
        try {
            const {id} = req.params
            const restaurant = await Restaurant.findOne({"id":id})
            return res.json(restaurant)

        } catch (error) {
            res.status(500).json({message: "Error find restaurant", error: error});
        }
    },
    update: async (req, res) => {
        try {
            const {id, name, location } = req.body
            const restaurant = await Restaurant.findOne({"id":id})
            restaurant.name = name
            restaurant.location = location
            await restaurant.save()
            res.json(restaurant)
        } catch (error) {
            res.status(500).json({message: "Error update restaurant", error: error});
        }
    },
    delete:async (req, res) => {
        try {
            const {id} = req.params
            const restaurant = Restaurant.remove({"id":id})[0]
            Vote.remove({"restaurantId":restaurant.id})
            res.json(restaurant)
        } catch (error) {
            res.status(500).json({message: "Error remove restaurant", error: error});
        }
    }
}