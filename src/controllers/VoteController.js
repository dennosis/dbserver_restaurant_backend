const Vote = require('../models/Vote');



const validateRestaurantVote = async (vote) =>{
    const week = await weekDays(await new Date(vote.date))

    const winningRestaurantByDayFromWeekDays = week.map((date)=>winningRestaurantByDay(date))
    
    const checkRestaurant = winningRestaurantByDayFromWeekDays.filter((item)=>item.id===vote.restaurantId)

    if(checkRestaurant.length === 0)
        return true
    
    if(checkRestaurant[0].date === vote.date)
        return true

    return false
}

const winningRestaurantByDay = (findDate)=>{
    const date = new Date(findDate)
    const votes = Vote.find({"date":date.toLocaleDateString()})
    const votesGroup = groupBy(votes, "restaurantId")
    
    const winning = {
        id:undefined,
        date:date.toLocaleDateString(),
        votes: []
    }

    Object.keys(votesGroup).forEach(function(key,index) {
        if(votesGroup[key].length > winning.votes.length){
            winning.id = key
            winning.votes = votesGroup[key]
        }
    });

    return winning
}

const groupBy = (xs, key) => {
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
};
  
const addDate = (initdate, days) =>{
    const date = new Date(initdate)
    date.setDate(date.getDate() + days);
    return date;
}
const weekDays = async (initdate) =>{
    const date = await new Date(initdate)
    const weekday = await date.getDay()
    const days = [date]
    for(let i = weekday-1; i >=0; i-- ){
        await days.unshift(addDate(date, (i-weekday)))
    }
    for(let i = weekday+1; i < 7; i++ ){
        await days.push(addDate(date, (i-weekday)))
    }
    return days
}

module.exports = {

    index: async (req, res) => {
        try {
            const {date} = req.query
            if(date){
                res.json(Vote.find({date}))
            }else{
                res.json(Vote.find())
            }
        } catch (error) {
            res.status(500).json({message: "Error find votes", error: error});
        }
    },
    create : async (req, res) => {
        try {
            const { userId, restaurantId, date } = req.body
            
            if((new Date(date)).getTime() < (new Date((new Date()).toLocaleDateString())).getTime())
                return res.status(405).json({message: "Vote cannot be created on this date", error: {date}});
            
            const vote = await new Vote({userId, restaurantId, date})

            if(!(await validateRestaurantVote(vote)))
                return res.status(405).json({message: "This restaurant was already chosen in the week", error: {restaurantId}});

            await vote.save()
            
            return res.json(vote)

        } catch (error) {
            res.status(500).json({message: "Error create vote", error: error});
        }
    },
    show : async (req, res) => {
        try {
            const {id} = req.params
            const vote = await Vote.findOne({"id":id})
            return res.json(vote)

        } catch (error) {
            res.status(500).json({message: "Error find vote", error: error});
        }
    },
    update: async (req, res) => {
        try {

            const {id, userId, restaurantId } = req.body
            const vote = await Vote.findOne({"id":id})
            user.userId = userId
            user.restaurantId = restaurantId
            await vote.save()
            res.json(vote)
        } catch (error) {
            res.status(500).json({message: "Error update vote", error: error});
        }
    },
    delete:async (req, res) => {
        try {
            const {id} = req.params
            const vote = await Vote.findOne({"id":id})

            if((new Date(vote.date)).getTime() < (new Date((new Date()).toLocaleDateString())).getTime())
                return res.status(405).json({message: "Vote cannot be removed", error: {date:vote.date}});

            res.json(Vote.remove({"id":id}))
        } catch (error) {
            res.status(500).json({message: "Error remove vote", error: error});
        }
    }



}