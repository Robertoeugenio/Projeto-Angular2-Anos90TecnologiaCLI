const express = require ('express');

const PORT =3000;

const app = express();

app.get("/clientes", (req, res)=> {
    res.json(
        [
            {'codigo': 1, 'nome': 'unilever'},
            {'codigo': 2, 'nome': 'bombril'}
        ]
    )
}); 

app.listen(PORT, () => console.log("escutando na porta" + PORT));