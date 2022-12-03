const router = require('express').Router();

router.get('/message', (req, res) => {
    res.status(200).json({
        message: 'Sample API Message',
    });
});

//NotFound
router.get('*', (req, res) => {
    res.status(404).json({
        message: 'Error 404: Not Found',
    });
});

module.exports = router;