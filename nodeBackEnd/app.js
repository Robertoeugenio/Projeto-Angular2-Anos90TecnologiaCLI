const express = require('express'); // atualizado
const PORT = 4000; 
const app = express();

app.set("json spaces",4);

const index = require('.routes/index');
const clientes = require('.routes/clientes');

app.use('/', index);
app.use('/clientes', clientes);



/*app.get("/clientes", (req, res) => {       //de acordo com slide
    res.json(
        [
            { 'codigo': 1, 'nome': 'Roberto' },        //passo a passo do slide
            { 'codigo': 2, 'nome': 'Eugenio' }
        ]
    )
});*/

app.listen(PORT, () => console.log("escutando na porta" + PORT));