const mongoose = require('mongoose')

const StageSchema = new mongoose.Schema({
    employeurID: String,
    nomEmployeur: String,
    courielEmployeur: String,
    telEmployeur: Number,
    nomEnterprise: String,
    adresseEnterprise: String,
    typeDeStage: String,
    numDePosDispo: Number,
    descriptionDuStage: String,
    etudiantsApplique: [String]
})


const Stage = mongoose.model('Stage', StageSchema)

module.exports = Stage;
