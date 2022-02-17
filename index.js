const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./config');

const routeAuth = require('./Routes/auth');
const routerPost = require('./Routes/post');
const routeSong = require('./Routes/song')

const PORT = process.env.PORT || 4000

app.use(express.json());
app.use(cors({origin:'https://musiclofi.netlify.app'}));


app.use('/auth',routeAuth);
app.use('/post',routerPost);
app.use('/song',routeSong);

db.connect()
app.listen(PORT, ()=>{
    console.log(`listen app at port ${PORT}`);
})