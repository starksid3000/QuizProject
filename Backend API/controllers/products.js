const Question = require("../models/product");
const getAllProducts = async(req,res) =>{
    const {questionText,options,correctOptionIndex,select} = req.query;
    
    const queryObject = {};
    if(questionText){
        queryObject.questionText=questionText;
    }
    if(options){
        queryObject.options=Number(options);
    }
    if(correctOptionIndex){
        queryObject.correctOptionIndex=Number(correctOptionIndex);
    }
    let apiData = Question.find(queryObject);
    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }
    
    let page = Number(req.query.page) || 1 ;
    let limit = Number(req.query.limit) || 1 ;
    let skip = (page - 1 ) * limit;
    
    apiData = apiData.skip(skip).limit(limit);
    console.log(queryObject);
    const myData = await apiData;
    
    res.status(200).json({myData,nbHits:myData.length});
};

const getAllProductsTesting = async(req,res) =>{
    const myData = await Question.find({});
    res.status(200).json({myData});
};

module.exports = {getAllProducts , getAllProductsTesting};

