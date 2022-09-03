const express = require('express');

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    res.send('GET ALL')
});

router.get('/:id', (req, res) => {
    res.send('GET ID: ${req.parans.id}')
});

router.get('/matricula/:matricula', (req, res) => {
    res.send('GET Matricula: ${req.parans.matricula}')
});

router.put('/:id', (req, res) => {//atualizar
    res.send('PUT ID: ${req.body}')
});

router.post('/', (req, res) => {//salvar
    res.send('POST: ${req.body}')
});

router.delete('/:id', (req, res) => {//delete
    res.send('DELETE: ${req.parans.id}')
});

module.exports= router;