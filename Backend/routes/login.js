const express = require('express');
const router = express.Router();
const { loginEtudiant, loginEmployeur, verificationTypeDeCompte } = require('../controllers/loginController');


//true = etudiant login, false = employeur login
router.post('/', async (req, res) => {
    const {couriel, password } = req.body
    const typeDeCompte = await verificationTypeDeCompte(couriel, password)
    
    
    if( typeDeCompte === null){
        res.status(409).json({message: "Utilisateur n'existe pas"})
    }else if(typeDeCompte){
        const etudiantCompte = await loginEtudiant(couriel, password)


        if(etudiantCompte!== false){ 
            return res.status(200).json(etudiantCompte)
        }else{
            return res.status(409).json({message: "Mot de passe invalide"})
        }
    }else{
        const employeurCompte = await loginEmployeur(couriel, password)


        if(employeurCompte !== false){ 
            return res.status(201).json(employeurCompte)
        }else{
            return res.status(409).json({message: "Mot de passe invalide"})
        }
    }
})



module.exports = router;