const express = require('express');
const ctrl = require('../controllers/steering-wheels');
const router = express.Router();

router.get('/all', ctrl.getAllCategoriesAndPhotos);
router.get('/categories', ctrl.getCategories);
router.get('/photos', ctrl.getPhotos);

module.exports = router;
