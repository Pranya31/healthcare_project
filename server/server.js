// FRAMEWORK CONFIGURATION
const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

// env file config
const dotenv = require("dotenv");
dotenv.config();  // enabling the env

connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); //cross origin resource sharing    //security policy to verify identity

// Error handling middleware
app.use(errorHandler);

//Routes below
app.get('/' , (req,res) => {
    res.send("working");
});


// APP CONFIG START
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})