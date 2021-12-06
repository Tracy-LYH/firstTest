const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema={
    name:String,
    age:Number,
    health:String
}
const mybeta = mongoose.model('cats', schema);

//const kitty = new mybeta({ name: 'testZildjian2' });
//kitty.save().then(() => console.log('testmeow1'));
//const kitty1=new mybeta({name:"zhang3",age:1,health:"good"})
//kitty1.save().then(()=>console.log("new schema writed"))
mybeta.find({name:"zhang1"},(err,data)=>{console.log(data[0]._doc.name)});