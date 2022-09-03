const express = require('express');
const alunoRouter = require('./alunoRouter');

const app = express();
app.use(express.json());

app.use('/alunos', alunoRouter);

app.listen(3000, () => {
    console.log('server started');
})