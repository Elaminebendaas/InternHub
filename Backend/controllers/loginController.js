const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Etudiant = require('../models/Etudiants.js')
const Employeur = require('../models/Employeur.js')

async function verificationTypeDeCompte(couriel, password){
    const etudiantVeri = await Etudiant.findOne({adresseCouriel: couriel})
    const employeurVeri = await Employeur.findOne({adresseCouriel: couriel})
    if(etudiantVeri){
        return true
    }else if(employeurVeri){
        return false
    }else{
        return null
    }
}

async function loginEtudiant(couriel, password){
    const user = await Etudiant.findOne({adresseCouriel: couriel})
    let result;

    const verification = async () => {
        const res = await bcrypt.compare(password, user.motDePasse)
        if(res){

            result = user
            
        }else{

            result = false
        }
    }

    await verification()
    return result
}

async function loginEmployeur(couriel, password){
    const user = await Employeur.findOne({adresseCouriel: couriel})
    let result;

    const verification = async () => {
        const res = bcrypt.compare(password, user.motDePasse)
        if(res){
            result = user
        }else{
            result = false
        }
    }

    await verification()
    return result
}

module.exports = {loginEtudiant, loginEmployeur, verificationTypeDeCompte}