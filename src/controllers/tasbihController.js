const Tasbih = require("../models/Tasbih");

const createTasbih = async (req, res) => {
    new Tasbih(req.body).save()
        .then(() => {
            res.status(200).json({message: "Tasbih successfully created"});
        })
        .catch((err) => {
            res.status(500).json({message: "Error creating Tasbih"})
        });
} 

const getAllTasbih = async (req, res) => {
    try{
        const tasbihs = await Tasbih.find();
        res.status(200).json(tasbihs);
    } catch(err) {
        res.status(500).json(err);
    }
}

const getTasbihById = async (req, res) => {
    try {
        const tasbih = await Tasbih.findById(req.params.id);
        res.status(200).json(tasbih);
    } catch(err) {
        res.status(500).json(err);
    }
}


module.exports = {
    createTasbih,
    getAllTasbih,
    getTasbihById
}