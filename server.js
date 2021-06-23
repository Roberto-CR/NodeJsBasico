const express = require('express');

/* const router = require('./components/message/network')
 */
const router = require('./network/routes')
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));
//app.use(router);
router(app);
/* app.use('/',(req,res)=>{
    res.send('Hola');
}) */



app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicacion esta escuchando en el localhost')