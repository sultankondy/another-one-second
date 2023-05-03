const Navigation = require("../models/Navigation");

const getNavigationsByTopic = async (req, res) => {
    try{
        const nav = Navigation.findOne({topic: req.params.topic});
        res.status(200).json(nav);
    }catch(err) {
        res.status(500).json(err);
    }
}

const createNavigationsByTopic = async (req, res) => {
    const newNav = new Navigation(req.body);
    
    newNav.save()
        .then(() => {
            res.json({message: "Navigation created successfully "});
        })
        .catch((err) => {
            res.status(500).json({error: 'Error creating navigation'});
        });
}

const updateNavigationById = async (req, res) => {
    Navigation.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.json({message: `Navigation with id ${id} updated successfully`});
        })
        .catch((err) => {
            res.status(500).json({message: `Error updating navigation with id ${id}`});
        });
}

const deleteNavigationById = async (req, res) => {
    Navigation.findByIdAndDelete(req.params.id)
        .then(() => {
            req.status(200).json({message: `Navigation with id ${id} deleted successfully`})
        })
        .catch((err) => {
            req.status(500).json({message: `Error deleting navigation with id ${id}`})
        });
}

module.exports = {
    createNavigationsByTopic,
    getNavigationsByTopic,
    deleteNavigationById,
    updateNavigationById
}