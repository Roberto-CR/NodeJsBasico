const store = require('./store');

function addUser (name){
    return new Promise((resolve,reject)=>{
        if (!name) {
            console.error('[messageController]No pasaron un parametro')
            reject ('Los datos son incorrectos');
            return false;
        }

    const user ={
        name,
    };
    store.add(user);
    resolve (user);
});
}


function getUser(){

    return new Promise((resolve,reject)=>{
        resolve(store.list());
    })
}

module.exports = {
    addUser,
    getUser,
    
}
