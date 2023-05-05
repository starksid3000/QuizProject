require("dotenv").config();
const connectDB = require("./db/connect");

const Question  = require("./models/product");
const QuestionJSON = require("./question.json");

const start = async () =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await Question.create(QuestionJSON);
        console.log("success");
    }
    catch(error){
        console.log(error);
    }
};


start();
