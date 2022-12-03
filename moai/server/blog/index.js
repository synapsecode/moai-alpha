const router = require('express').Router();

router.get('/message', (req, res) => {
    res.status(200).json({
        message: 'Sample API Message',
    });
});

module.exports = router;