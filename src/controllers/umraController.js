const Umra = require('../models/Umra');

const getUmra = async (req, res) => {
    try{
        const umras = await Umra.find();
        res.status(200).send(umras);
    }catch(err){
        console.log(err);

        res.status(500).send('You dont have any umra');
    }
}

const createUmra = async (req, res) => {
    try{
        const newUmra = new Umra();
    
        newUmra.title = `Untitled ${newUmra._id}`;
    
        await newUmra.save();
        res.status(200).send(newUmra);
    }catch(err){
        res.status(500).send("Error creating umra");
    }
}

const updateUmra = async (req, res) => {
    await Umra.findOne({}, {}, { sort: { _id: -1 }})
        .then((lastDocument) => {
            lastDocument.updatedAt = new Date();

            lastDocument.save()
                .then((updatedDocument) => {
                    return res.status(200).json(updatedDocument);
                })
                .catch((err) => {
                    return res.status(500).send('Error updating document');
                });
        }) 
        .catch((err) => {
            console.log(err)
            return res.status(500).send('Error finding last document');
        });
}

const deleteUmra = async (req, res) => {  
    await Umra.findOneAndRemove({}, { sort: { _id: -1 } })
        .then((deletedDocument) => {
            return res.status(200).send('Document deleted successfully');
        })
        .catch((err) => {
            return res.status(500).send('Error deleting last document');
        });      
}

const updateUmraTitle = async (req, res) => {
    await Umra.findOne({}, {}, { sort: { _id: -1 }})
        .then((lastDocument) => {
            lastDocument.title = req.body.title;

            lastDocument.save()
                .then((updatedDocument) => {
                    return res.status(200).json(updatedDocument);
                })
                .catch((err) => {
                    return res.status(500).send('Error updating document');
                });
        }) 
        .catch((err) => {
            console.log(err)
            return res.status(500).send('Error finding last document');
        });
}

module.exports = {  
    getUmra,
    createUmra,
    updateUmra,
    deleteUmra,
    updateUmraTitle
}