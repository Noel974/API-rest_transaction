const Categorie = require('../models/Categories');

// Créer une nouvelle catégorie
exports.createCategorie = async (req, res) => {
    try {
        const categorie = new Categorie({
            name: req.body.name,
        });

        const savedCategorie = await categorie.save();
        res.status(201).json(savedCategorie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer toutes les catégories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Categorie.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
