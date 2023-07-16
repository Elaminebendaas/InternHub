const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');

const port = 5000;

//Les Routers
const enregistrementRouter = require('./routes/enregistrer.js')
const loginRouter = require('./routes/login.js')
const stageRouter = require('./routes/stage.js')


app.use(cors());
app.use(express.urlencoded( {extended: true} ));
app.use(express.json());


main().catch((err) => console.log(err));

async function main(){
    await mongoose.connect(process.env.DBCLE)
}


app.use('/enregistrement', enregistrementRouter)
app.use('/login', loginRouter)
app.use('/creerstage', stageRouter)


app.listen(port, () => {
    console.log(`Le serveur est sur port ${port}`)
})


module.exports = mongoose