const express = require('express'); // atualizado


const PORT = 3000; 


const app = express();


app.get("/clientes", (req, res) => {       //de acordo com slide
    res.json(
        [
            { 'codigo': 1, 'nome': 'Roberto' },        //passo a passo do slide
            { 'codigo': 2, 'nome': 'Eugenio' }
        ]
    )
});

app.listen(PORT, () => console.log("ESCUTANDO NA PORTA" + PORT));