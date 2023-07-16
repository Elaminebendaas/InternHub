const express = require('express');
const router = express.Router();
const { ajouterStage, fetchStage, fetchListEtudiants, appliquerStage, deleteStage } = require('../controllers/stageController')

router
.post('/', ajouterStage)
.get('/fetchstage', fetchStage)
.post('/fetchetudiants', fetchListEtudiants)
.post('/appliquer', appliquerStage)
.post('/deletestage', deleteStage)


module.exports = router;