const express = require('express');
const router = express.Router();

const TITLE = { title: 'Online Shopper' };

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', TITLE);
});

router.get('/additional-samples', (req, res, next) => {
  res.render('additional-samples', TITLE);
});

module.exports = router;
