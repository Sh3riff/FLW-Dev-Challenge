const codeGen = (length) => {
        const alphanums = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        return new Array(length).fill(null).map( () => alphanums[Math.floor(Math.random() * alphanums.length)] ).join("")
},

module.exports = {
    codeGen
}