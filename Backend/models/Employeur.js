const mongoose = require('mongoose')

const employeurSchema = new mongoose.Schema({
    prenom: String,
    nom: String,
    numTel: String,
    adresseCouriel: String,
    motDePasse: String,
    nomEnterprise: String,
    adresseEnterprise: String,
    stageAjouter: [String]
})


const Employeur = mongoose.model('employeur', employeurSchema)

module.exports = Employeur;