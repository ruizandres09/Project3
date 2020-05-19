const express = require ("express");

const mongoose = require ("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.JSON());


//NAME OF DATABASE IS HERE
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/psykhe";
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify:false,
    useUnifiedTopology:true,
});

//ROUTES
app.use(require("./routes/api.js"));
app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}!`)
});
