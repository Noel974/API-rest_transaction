// Importation du package mongoose
const mongoose = require('mongoose');

// Unicité de l'adresse mail de l'utilisateur via 'mongoose-unique-validator'
const uniqueValidator = require('mongoose-unique-validator');

const portefeuilleSchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    balance: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

// Application du plugin sur le portefeuilleSchema
portefeuilleSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Portefeuille', portefeuilleSchema);
