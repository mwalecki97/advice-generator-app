const advice = require('./models/advicemodel');

//Create new advice
const createadvice = async(req, res) => {
    
//Create new advice object
const result = await advice.create(req.body)

    res.status(201).json({
        result
    })
}

//Get random advice
const getadvice = async(req, res) => {
    
    //Generate random number
    const value = await advice.find().sort({id: 'desc'}).limit(1);
    const random = Math.floor(Math.random() * value[0].id) + 1
    
    //Get ranodm object
    const result = await advice.findOne({id: `${random}`})
        
    res.status(200).json(result)
}

module.exports = {
    createadvice,
    getadvice
}