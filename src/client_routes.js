const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {res.render('Index')});
router.get('/recipes', (req, res) => {res.render('Recipes')});
router.get('/roulette', (req, res) => {res.render('Roulette')});
router.get('/contact', (req, res) => {res.render('Contact')});
router.get('/cocktails', (req, res) => {res.render('Cocktails')});

module.exports = router;