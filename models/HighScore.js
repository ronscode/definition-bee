const mongoose = require ('mongoose') 
const Schema = mongoose.Schema;

let HighScoreSchema = new Schema ({
    username : { type : String},
    highSore : { type : Number}
})

module.exports = mongoose.model('HighScore', HighScoreSchema);