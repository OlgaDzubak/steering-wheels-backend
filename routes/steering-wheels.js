const express = require('express');
const ctrl = require('../controllers/steering-wheels');
const router = express.Router();

router.get('/categories', ctrl.getCategories);
router.get('/photos', ctrl.getPhotos);

module.exports = router;
