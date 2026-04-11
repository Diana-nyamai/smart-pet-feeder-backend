const feederService = require('../services/feederService');

exports.feedCat = async (req, res) => { 
    try {
        const result = feederService.feedCat();
        res.status(200).json({
            message: 'Feeding the cat...',
            data: result
        });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Failed to feed the cat', error: error.message });

    }
}