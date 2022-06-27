const express = require('express');
const mongoose = require('mongoose');
const BrandName = require('./model')
const app = express();

app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/',{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then( ()=> console.log('db connected')
).catch(err =>console.log(err))

app.post('/addbrands',async (req,res) => {
    const {brandname} = req.body;
        try{
            const newData = new BrandName({brandname});
             await newData.save();
            return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message);
    }
})


app.get('/', (req,res) =>{
    res.send('<h1>hello world!!!</h1>')
})

 app.listen(3000, ()=> console.log('server running..'))