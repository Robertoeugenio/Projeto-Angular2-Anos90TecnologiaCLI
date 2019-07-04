const express = require('express'); // atualizado
const PORT = 4000; 
const app = express();
const db = require('./config/database');
const bodyParser = require ('body-parser');
const cors = require ('cors');

app.use(cors({
    origin:  ['http:/localhost:4200'],
    methods: ["GET", "POST", "PUT", "DELETE"],
    alloowedHeaders: ["Content-type", "Authorization"]
}))

app.use(bodyParser.json());

db.authenticate()
    .then(() => console.log('Database connected ...'))
    .catch(err => console.log('Error:  ' + err))

app.set("json spaces",4);

const index = require('./routes/index');
const clientes = require('./routes/clientes');
const videogames = require('./routes/videogames');
const serieantigas = require('./routes/serieantigas');
const desenhos = require('./routes/desenhos');



app.use('/', index);
app.use('/clientes', clientes);
app.use('/videogames', videogames);
app.use('/serieantigas', serieantigas);
app.use('/desenhos', desenhos);

/*

app.get("/clientes", (req, res) => {       //de acordo com slide
    res.json(
        [
            { 'codigo': 1, 'nome': 'Roberto' },        //passo a passo do slide
            { 'codigo': 2, 'nome': 'Eugenio' }
        ]
    )
});*/

app.listen(PORT, () => console.log("escutando na porta " + PORT));