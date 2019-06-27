const express = require('express'); // atualizado


const PORT = 4000; 


const app = express();


app.get("/clientes", (req, res) => {       //de acordo com slide
    res.json(
        [
            { 'codigo': 1, 'nome': 'Roberto' },        //passo a passo do slide
            { 'codigo': 2, 'nome': 'Eugenio' }
        ]
    )
});

app.listen(PORT, () => console.log("escutando na porta" + PORT));