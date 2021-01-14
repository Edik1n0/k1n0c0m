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

router.get('/cookies', (req, res) => {
    res.render('./layouts/cookies');
});

router.get('/privacy', (req, res) => {
    res.render('./layouts/privacy');
});

router.get('/sitemap', (req, res) => {
    res.render('./sitemap.xml');
});

router.get('/control', (req, res) => {
    res.render('./control/');
});

router.get('/sitemap.xml', function(req, res) {
    res.sendFile('C:/Users/user/Documents/GitHub/k1n0c0m/src/views/sitemap.xml');
});

module.exports = router;