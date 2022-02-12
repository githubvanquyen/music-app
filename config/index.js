const mongoose = require('mongoose');

function connect (){
    const URI ='mongodb+srv://vanquyen:Maybomnuoc123%40@cluster0.nwqem.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(()=>{console.log('BD conneted');})
        .catch((error)=>{
            console.log('error:', error.message);
        })
}
module.exports ={connect}