const mongoose = require('mongoose')

const etudiantSchema = new mongoose.Schema({
    prenom: String,
    nom: String,
    numeroDA: Number,
    adresseCouriel: String,
    motDePasse: String,
    profilDeSortie: Boolean, //TRUE = Reseaux et securite : FALSE = Developement d'application
    stageAppliquer: [String]
})


const Etudiant = mongoose.model('etudiant', etudiantSchema)

module.exports = Etudiant;