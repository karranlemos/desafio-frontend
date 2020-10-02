const express = require('express');
const app = express();


app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(`${__dirname}/pages/index.html`));

app.get('/imoveis', (req, res) => res.sendFile(`${__dirname}/pages/imoveis.html`));

app.get('/fale-conosco', (req, res) => res.sendFile(`${__dirname}/pages/fale-conosco.html`));

app.get('/servicos', (req, res) => res.sendFile(`${__dirname}/pages/servicos.html`));

app.use((req, res) => res.sendFile(`${__dirname}/pages/404.html`));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));