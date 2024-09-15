// Importation du package mongoose
const mongoose = require('mongoose');

// Unicité de l'adresse mail de l'utilisateur via 'mongoose-unique-validator'
const uniqueValidator = require('mongoose-unique-validator');

const transactionSchema = mongoose.Schema({
    id_porfeuille: { type: mongoose.Schema.Types.ObjectId, ref: 'Portefeuille', required: true },
    amount: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

// Application du plugin sur le transactionSchema
transactionSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Transaction', transactionSchema);
