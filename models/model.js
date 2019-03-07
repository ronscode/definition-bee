const mongoose = require ('mongoose') 
const Schema = mongoose.Schema;

let DefinitionSchema = new Schema ({
    word : { type : String},
    definition : { type : String}
})

module.exports = mongoose.model('db', DefinitionSchema);