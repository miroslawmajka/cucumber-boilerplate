const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    // Artificial timeout for the request
    const sampleParam = req.query.sampleParam;
    const target = 'iframe-content';

    if (sampleParam) {
        setTimeout(() => {
            res.render(target, {
                layout: false,
                sampleParam
            });
        }, 1500);
    } else {
        res.render(target, { layout: false });
    }
});

module.exports = router;
