const mongoose = require('mongoose');
abc = "mongodb+srv://milandama11:khOrcwik37qryYfg@cluster0.wbyarxd.mongodb.net/Cluster0?retryWrites=true&w=majority";
const connectDB = (uri) => {
        return mongoose.connect(uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
};

module.exports = connectDB;

