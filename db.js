const mongoose = require('mongoose');
require('dotenv').config(); // Charger le fichier .env

const MONGO_URI = process.env.MONGO_URI; // Récupérer l’URL du .env

const Mongoose = mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected To Mongodb'))
    .catch((err) => console.log(err.message));

module.exports = Mongoose;