const mongoose = require("mongoose");
require("dotenv").config();

const connect = async(req, res) => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Mongodb connected succcessfully ${connect.connection.host}`);
    } catch (error) {
        console.log("Some Error has occured");
        console.error(error);
        process.exit(1);
    }
};

module.exports = connect;