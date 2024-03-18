const express = require("express");
const route = require("./routes/router")
const app = express();
const port = 3000

app.use(express.json());
app.use(route);

app.get("/", (req, res) => {
    return res.send({ message: 'Bem-vindo à API do Banco Cubos!' });
});


app.listen(port, console.log(`Servidor iniciado em: localhost:${port}`));
