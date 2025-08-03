const express = require("express");


const router = express.Router();


router.route('/').get((req,res)=>{
    res.status(200).json(
        {message : "get all contacts"}
    );
});
router.route('/').post((req,res)=>{
    res.status(200).json(
        {message : "Create contant"}
    );
});
router.route('/:id').get((req,res)=>{
    res.status(200).json(
        {message : `get contact with id ${req.params.id}`}
    );
});
router.route('/:id').put((req,res)=>{
    res.status(200).json(
        {message : `edit contact with id ${req.params.id}`}
    );
});
router.route('/:id').delete((req,res)=>{
    res.status(200).json(
        {message : `Delete contact with id ${req.params.id}`}
    );
});

module.exports = router;