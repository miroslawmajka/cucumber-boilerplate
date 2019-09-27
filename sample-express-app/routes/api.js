const express = require('express');
const router = express.Router();

const packageJson = require('../../package');

/* GET main API endpoint */
router.get('/', (req, res, next) => {
    res.send({
        name: packageJson.name,
        version: packageJson.version
    });
});

module.exports = router;
