const express = require ('express'); 
const cors = require ('cors')

const mongoose  = require('mongoose');

const app = express(); 

require ('dotenv').config();

const userRoutes = require('./routes/User');

mongoose.connect(process.env.SECRET_DB,{

    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((err) => console.log(err));

app.use (express.json());

// Mise en place des headers pour acceder à notre API depuis n'importe quelle origine (CORS)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

module.exports = app;