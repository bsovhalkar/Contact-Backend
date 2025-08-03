const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.connectionString);
        console.log("MongoDB connected successfully", mongoose.connection.host ,"Name ", mongoose.connection.name);
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
};

module.exports = connectDb;
