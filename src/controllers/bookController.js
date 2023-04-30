const { Book } = require('../models/Book');

const getBook = async (req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    }catch(err){
        res.status(500).json(err);
    }
}

const getAllBook = async (req, res) => {
    const qNew = req.query.new;

    try{
        let book;

        if(qNew){
            book = await Book.find().sort({createdAt: -1}).limit(1);
        } else {
            book = await Book.find();
        }
        
        res.status(200).json(book);
    }catch(err){
        res.status(500).json(err);
    }
}


module.exports = {
    getAllBook,
    getBook,
}