const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./partials/home');
});

router.get('/nosotros', (req, res) => {
    res.render('./layouts/nosotros');
});

router.get('/servicios', (req, res) => {
    res.render('./layouts/servicios');
});

router.get('/contacto', (req, res) => {
    res.render('./layouts/contacto');
});

module.exports = router;