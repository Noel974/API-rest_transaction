const Portefeuille = require('../models/Portefeuille');
const User = require('../models/user'); 

// Créer un portefeuille pour un utilisateur
exports.createPortefeuille = async (req, res) => {
    try {
        // Vérifie si l'utilisateur existe
        const user = await User.findById(req.body.user_id);
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        const portefeuille = new Portefeuille({
            user_id: req.body.user_id,
            balance: req.body.balance,
        });

        const savedPortefeuille = await portefeuille.save();
        res.status(201).json(savedPortefeuille);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer un portefeuille via user_id
exports.getPortefeuilleByUserId = async (req, res) => {
    try {
        const portefeuille = await Portefeuille.findOne({ user_id: req.params.user_id });
        if (!portefeuille) {
            return res.status(404).json({ message: "Portefeuille non trouvé" });
        }
        res.status(200).json(portefeuille);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour le solde du portefeuille
exports.updateBalance = async (req, res) => {
    try {
        const portefeuille = await Portefeuille.findOne({ user_id: req.body.user_id });
        if (!portefeuille) {
            return res.status(404).json({ message: "Portefeuille non trouvé" });
        }

        // Met à jour le solde
        portefeuille.balance = req.body.balance;
        portefeuille.updated_at = Date.now();

        const updatedPortefeuille = await portefeuille.save();
        res.status(200).json(updatedPortefeuille);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
