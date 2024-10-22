const mongoose = require("mongoose");

const connectDb = async () =>{   // in async it works parallely and in sync it has to wait(block) for the fuction(api) to call even for 20sec
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);// await(waiting to connect)
        console.log(
            "Database connected:",
            connect.connection.host,
            connect.connection.name
        );
    } catch (err) {
        console.log(err);
        process.exit(1);  // we need to exit otherwise the stack of async will get filled unnecessarily
    }
};
module.exports = connectDb;