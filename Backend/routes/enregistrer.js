const express = require('express');
const router = express.Router();
const { enregistrerEtudiant, enregistrerEmployeur } = require('../controllers/enregistrerController')

router
.post('/etudiant', enregistrerEtudiant)
.post('/employeur', enregistrerEmployeur)



module.exports = router;