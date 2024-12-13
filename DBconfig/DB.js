const mongoose = require('mongoose');

const dbConfig = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/yourDatabaseName');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
};

module.exports = dbConfig; 