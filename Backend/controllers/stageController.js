const Stage = require('../models/Stage.js')
const Etudiants = require('../models/Etudiants.js')


async function ajouterStage(req, res){
    const {employeurID, nomEmployeur, courielEmployeur, telEmployeur, nomEnterprise, adresseEnterprise, typeDeStage, numDePosDispo, descriptionDuStage} = req.body


    const nouvStage = new Stage({
        employeurID: employeurID,
        nomEmployeur: nomEmployeur,
        courielEmployeur: courielEmployeur,
        telEmployeur: telEmployeur,
        nomEnterprise: nomEnterprise,
        adresseEnterprise: adresseEnterprise,
        typeDeStage: typeDeStage,
        numDePosDispo: numDePosDispo,
        descriptionDuStage: descriptionDuStage
        
    })
    await nouvStage.save()
    res.status(200).json({message: "Le stage a ete ajouter"})
}


async function fetchStage(req, res){
    const lesStage = await Stage.find()

    return res.json({message: lesStage})
}

async function fetchListEtudiants(req, res){
    const { stageID } = req.body
    const tempStage = await Stage.findById(stageID)

    if(tempStage.etudiantsApplique.length === 0){
        res.status(408)
    }else{
        let lesEtudiantsID = tempStage.etudiantsApplique

        
        if(lesEtudiantsID.length){
            
            res.json(await listEtudiants(tempStage.etudiantsApplique))
            
    }
}
}

async function deleteStage(req, res){
    const { stageID } = req.body


    await Stage.findByIdAndDelete(stageID)
    res.json({message: "a response baby"})

}


async function listEtudiants(lesEtudiantsID){
    let arrayEtudiants = []

    for(const etudiant in lesEtudiantsID){
        
        let tempEtudiant = await Etudiants.findById(lesEtudiantsID[etudiant])

            arrayEtudiants.push({
            nomComplet: `${tempEtudiant.nom}, ${tempEtudiant.prenom}`,
            couriel: tempEtudiant.adresseCouriel,
            numeroDA: tempEtudiant.numeroDA
        })   
    }
    return arrayEtudiants
            
}

async function appliquerStage(req,res){
    const { user, stageID } = req.body
    const tempStage = await Stage.findById(stageID)

    tempStage.etudiantsApplique.push(user)
    tempStage.save()

    res.status(200).json({message: 'appliquer'})

}


module.exports = {ajouterStage, fetchStage, fetchListEtudiants, appliquerStage, deleteStage}