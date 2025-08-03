const getContact = (req,res)=>{
    res.status(200).json(
        {message : "get all contacts"}
    );
};

const postContact  =(req,res)=>{
    res.status(200).json(
        {message : "Create contant"}
    );
};


const getContactByID = (req,res)=>{
    res.status(200).json(
        {message : `get contact with id ${req.params.id}`}
    );
}


const putContactByID = (req,res)=>{
    res.status(200).json(
        {message : `edit contact with id ${req.params.id}`}
    );
};

const delContactByID = (req,res)=>{
    res.status(200).json(
        {message : `Delete contact with id ${req.params.id}`}
    );
}



module.exports = {getContact , postContact, getContactByID,putContactByID,delContactByID};