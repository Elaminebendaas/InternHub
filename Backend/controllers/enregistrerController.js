const bcrypt = require('bcryptjs');

//Models
const Etudiant = require('../models/Etudiants.js')
const Employeur = require('../models/Employeur.js')

async function enregistrerEtudiant(req, res){
    const { prenom, nom, numeroDA, adresseCouriel, password, profilDeSortie } = req.body;
    const tempSearch = await Etudiant.findOne({adresseCouriel: adresseCouriel});

    if(tempSearch){
        return res.status(409).json({message: "Utilisateur existe deja"})
    }else{
        bcrypt.hash(password, 10, async(err, hashedPassword) => {
            if(err){
                return res.status(409).json({message: "error pour enregistrer le mdp dans la base de donnees"})
            }else{
                const nouvEtudiant = new Etudiant({
                    prenom: prenom,
                    nom: nom,
                    numeroDA: numeroDA,
                    adresseCouriel: adresseCouriel,
                    motDePasse: hashedPassword,
                    profilDeSortie: profilDeSortie
                })
                nouvEtudiant.save();
                return res.status(200).json({message: "OK"})
            }    
        })
    }

}

async function enregistrerEmployeur(req, res){
    const { prenom, nom, password, numTel, adresseCouriel, nomEnterprise, adresseEnterprise } = req.body;
    
    const tempSearch = await Employeur.findOne({adresseCouriel: adresseCouriel})
    
    if(tempSearch){
        return res.status(409).json({message: "Utilisateur existe deja"})
    }else{
        bcrypt.hash(password, 10, async(err, hashedPassword) => {
            if(err){
                return res.status(409).json({message: "error pour enregistrer le mdp dans la base de donnees"})
            }else{
                const nouvEmployeur = new Employeur({
                    prenom: prenom,
                    nom: nom,
                    numTel: numTel,
                    adresseCouriel: adresseCouriel,
                    motDePasse: hashedPassword,
                    nomEnterprise: nomEnterprise,
                    adresseEnterprise: adresseEnterprise,
                })
                nouvEmployeur.save()
                return res.status(200).json({message: "OK"})
            }
        })

    }
}

module.exports = {enregistrerEtudiant, enregistrerEmployeur}