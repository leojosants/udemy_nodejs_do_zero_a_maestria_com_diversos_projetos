// 
const express = require('express');
const router = express.Router();
const path = require('path');
const basePatch = path.join(__dirname, '../templates');

router.get('/add', (req, res) => {
    res.sendFile(`${basePatch}/userForm.html`);    
});

router.post('/save', (req, res) => {
    
    console.log(req.body);
    
    // Exatraindo dados do formulário
    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuário é ${name} e idade de ${age} anos!`);
    
    res.sendFile(`${basePatch}/userForm.html`);    

});

router.get('/:id', (req, res) => {

    const id = req.params.id;

    // Leitura da tabela users, resgatar um usuário do banco.
    console.log(`Estamos buscando pelo usuário: ${id}`);

    res.sendFile(`${basePatch}/users.html`);

});

module.exports = router;