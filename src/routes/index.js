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
    res.render('./layouts/sitemap');
});

router.get('/control', (req, res) => {
    res.render('./control/');
});

router.get('/sitemap.xml', function(req, res) {
    res.sendFile('https://www.k1n0.com.co/sitemap.xml');
});

module.exports = router;