const express = require('express');
const router = express.Router();
const flash = require('connect-flash');

const pool = require('../db');

router.get('/add', (req, res) => {
    res.render('links/add');
});

router.post('/add', async (req, res) => {
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url,
        description
    };
    await pool.query('INSERT INTO links SET ?', [newLink]) // Guardar a base de dates
    req.flash('success', 'Tarea guardada correctamente');
    res.redirect('/links');
});

router.get('/', async (req,res) => {
    const links = await pool.query('SELECT * FROM links'); // Consulta la db
    res.render('links/list', {links});
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM links WHERE ID = ?', [id]);
    req.flash('success', 'Tarea eliminada correctamente');
    res.redirect('/links')
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM links WHERE id = ?', [id]);
    res.render('links/edit', {link: links[0]});
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, url } = req.body;
    const newLink = {
        title,
        description,
        url
    }
    await pool.query('UPDATE links set ? WHERE id  = ?', [newLink, id]);
    req.flash('success', 'Tarea actualizada correctamente');
    res.redirect('/links');
});

module.exports = router;