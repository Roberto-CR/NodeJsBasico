const { socket } = require('../../socket');
const store = require('./store');
function addMessage(chat, user, message, file) {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error('[messageController] No hay chat usuario o mensaje');
            reject('Los datos son incorrectos');
            return false;
        }

        let fileUrl = '';
        if (file) {
            fileUrl = 'http://localhost:3000/app/files/' + file.filename;
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl,
        };
        
        store.add(fullMessage);
        Socket.io.emit('message',full)
        resolve(fullMessage);
    });
}

function getMessage(filterUser){

    return new Promise((resolve,reject)=>{
        resolve(store.list(filterUser));
    })
}
function updateMessage(id,message){
    return new Promise(async (resolve,reject)=>{
    if (!id || !message) {
            reject('Invalid date');
            return false;
        }
        const result = await store.updateText(id,message)
        resolve(result);
    })
}
function deleteMessage(id){
    return new Promise(async (resolve,reject)=>{
    if (!id) {
            reject('Invalid id');
            return false;
        }
        store.remove(id)
        .then(()=>{
            resolve();
        })
        .catch(e=>{
            reject(e);
        })
    })
}

module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage,
}
