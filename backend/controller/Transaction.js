const Transaction = require('../models/Transaction');
const Categorie = require('../models/Categories');
const Portefeuille = require('../models/Portefeuille');

// Récupérer les transactions par portefeuille
exports.getTransactionsByPortefeuille = async (req, res) => {
    try {
        const portefeuille = await Portefeuille.findById(req.params.portefeuille_id);
        if (!portefeuille) {
            return res.status(404).json({ message: "Portefeuille non trouvé" });
        }

        // Trouver les transactions associées au portefeuille
        const transactions = await Transaction.find({ id_porfeuille: req.params.portefeuille_id }).populate('categorie');
        
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Créer une nouvelle transaction
exports.createTransaction = async (req, res) => {
    try {
        // Vérifie si la catégorie existe
        const categorie = await Categorie.findById(req.body.categorie);
        if (!categorie) {
            return res.status(404).json({ message: "Catégorie non trouvée" });
        }

        const transaction = new Transaction({
            id_porfeuille: req.body.id_porfeuille,
            amount: req.body.amount,
            categorie: req.body.categorie, // Référence à la catégorie
        });

        const savedTransaction = await transaction.save();
        res.status(201).json(savedTransaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer toutes les transactions avec leurs catégories
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find().populate('categorie');
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

