const Tour = require('../models/Tour');

const getTour = async (req, res) => {
    try{
        const tours = await Tour.find();
        res.status(200).send(tours);
    }catch(err){
        console.log(err);

        res.status(500).send('You dont have any tour');
    }
}

const createTour = async (req, res) => {
    try{
        const newTour = new Tour(req.body);
        await newTour.save();
        res.status(200).send(newTour);
    }catch(err){
        res.status(500).send("Error creating tour");
    }
}


module.exports = {  
    getTour,
    createTour
}