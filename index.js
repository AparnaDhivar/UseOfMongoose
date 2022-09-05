var express = require('express');
var app = express();
var mongoose = require('mongoose');
const conn = mongoose.connect("mongodb://localhost:27017/testmongoose");

//schema

const uschema = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    }

});

const umodel = mongoose.model('umodel',uschema);
let obj = new umodel({name:'abc',password:'123456',email:'abc06@gmail.com'});
obj.save((err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data);

})