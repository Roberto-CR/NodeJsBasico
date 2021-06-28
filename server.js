const express = require('express');
const app = express();
const server = require('http').Server(app);

const socket = require('./socket');
const db = require('./db')
const router = require('./network/routes')
const uri ='mongodb://db_user_nodejs:1q2w3e..@cluster0-shard-00-00.h8bfz.mongodb.net:27017,cluster0-shard-00-01.h8bfz.mongodb.net:27017,cluster0-shard-00-02.h8bfz.mongodb.net:27017/telegrom?ssl=true&replicaSet=atlas-x2srl2-shard-0&authSource=admin&retryWrites=true&w=majority';
db(uri);

socket.connect(server);

app.use(express.json());
app.use(express.urlencoded({extended : false}));
//app.use(router);
router(app);
/* app.use('/',(req,res)=>{
    res.send('Hola');
}) */



app.use('/app', express.static('public'));

server.listen(3000 , function(){
    console.log('La aplicacion esta escuchando en el localhost')
});
