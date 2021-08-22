const express = require('express');
const router = express.Router();

//Render(site navigation) Routes
router.get('/', (req, res) => {res.render('Index')});
router.get('/recipes', (req, res) => {res.render('Recipes')});
router.get('/roulette', (req, res) => {res.render('Roulette')});
router.get('/contact', (req, res) => {res.render('Contact')});
router.get('/cocktails', (req, res) => {res.render('Cocktails')});
router.get('/login', (req, res) => {res.render('Login')});

//User CRUD Routes
const userController = require('../controllers/user.controller');
router.post('/user/create', userController.create);

module.exports = router;