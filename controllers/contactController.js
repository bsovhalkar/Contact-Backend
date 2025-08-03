// const express = require("express");
// const app = express()
// app.use(express.json());

const getContact = (req,res)=>{
    res.status(200).json(
        {message : "get all contacts"}
    );
};

const createContact  =(req,res)=>{
    // console.log("The body is:", req.body);
    if(!req.body){
        res.status(400);
        throw new Error("All fields are manadatory");
    } 
    const {name , phone , email} = req.body;
    console.log(`Name : ${name} Phone : ${phone} Email : ${email}`);
    res.status(201).json(
        {message : "Create contant"}
    );
};


const getContactByID = (req,res)=>{
    res.status(200).json(
        {message : `get contact with id ${req.params.id}`}
    );
}


const editContactByID = (req,res)=>{
    res.status(200).json(
        {message : `edit contact with id ${req.params.id}`}
    );
};

const delContactByID = (req,res)=>{
    res.status(200).json(
        {message : `Delete contact with id ${req.params.id}`}
    );
}



module.exports = {getContact , createContact, getContactByID,editContactByID,delContactByID};