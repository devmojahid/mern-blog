const express =  require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({path:"backend/config/config.env"});
const PORT = process.env.PORT||6000;
app.get("/",(req,res)=>{
    res.send("server Running");
})

app.listen(PORT,()=>{
    console.log(`App Is Running On ${PORT}`);
});