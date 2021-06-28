const express = require('express');
const response=require('../../network/response')
const controller = require('./controller')
const router = express.Router();



router.get('/',function(req,res){
    controller.getUser()
        .then((userList)=>{
            response.success(req,res,userList,200);
        }).catch(e=>{
            response.error(req,res,'Unexpected Error',500, e);
        })
});

router.post('/',function(req,res){
    controller.addUser(req.body.name).then((fullUser)=>{
        response.success(req,res,fullUser);
    }).catch(e=>{
        response.error(req,res,'Informacion invalida',400,"Error de controlador");
    });
});





module.exports = router;