// Importation du package mongoose
const mongoose = require('mongoose');

// Unicité de l'adresse mail de l'utilisateur via 'mongoose-unique-validator'
const uniqueValidator = require('mongoose-unique-validator');

const categorieSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

// Application du plugin sur le categorieSchema
categorieSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Categorie', categorieSchema);
