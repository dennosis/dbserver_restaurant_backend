const User = require('../models/User');
const Vote = require('../models/Vote');

module.exports = {

    index: async (req, res) => {
        try {
            res.json(User.find())
        } catch (error) {
            res.status(500).json({message: "Error find users", error: error});
        }
    },
    create : async (req, res) => {
        try {
            const { name, favoriteRestaurantId } = req.body
            if(name===undefined || name==="")
                return res.status(400).json({message: "invalid name", error: {name}});
    
            const user = await new User({name, favoriteRestaurantId})
            await user.save()
            res.json(user)
        } catch (error) {
            res.status(500).json({message: "Error create user", error: error});
        }
    },
    show : async (req, res) => {
        try {
            const {id} = req.params
            const user = await User.findOne({"id":id})
            return res.json(user)

        } catch (error) {
            res.status(500).json({message: "Error find user", error: error});
        }
    },
    update: async (req, res) => {
        try {
            const {id, name, favoriteRestaurantId } = req.body

            if(name===undefined || name==="")
                return res.status(400).json({message: "invalid name", error: {name}});
        
            const user = await User.findOne({"id":id})
            user.name = name
            user.favoriteRestaurantId = favoriteRestaurantId
            await user.save()
            res.json(user)
        } catch (error) {
            res.status(500).json({message: "Error update user", error: error});
        }
    },
    delete:async (req, res) => {
        try {
            const {id} = req.params
            const user = User.remove({"id":id})[0]
            Vote.remove({"userId":user.id})

            res.json(user)
        } catch (error) {
            res.status(500).json({message: "Error remove user", error: error});
        }
    }



}