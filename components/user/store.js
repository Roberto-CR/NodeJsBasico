const Model = require('./model');

function addUsers(user) {
    const myUser = new Model(user);
     return myUser.save();
}

async function getUsers(){

    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addUsers,
    list: getUsers,
}