const express = require('express');
const router = express.Router();

/* GET main iframe page */
router.get('/', (req, res, next) => {
    const sampleParam = req.query.sampleParam;
    const target = 'iframe-content';

    if (sampleParam) {
        // Artificial timeout for the request
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
