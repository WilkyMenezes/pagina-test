const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

const pokedex = [
    {
    id: 1,
    nome: "Blastoise",
    tipo: "Water",
    categoia: "Shellfish",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
},

{
    id: 2,
    nome: "Metapod",
    tipo: "Bug",
    categoia: "Cocoon",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
},
{
    id: 3,
    nome: "Arbok",
    tipo: "Poison",
    categoia: "Cobra",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png"
}
]


// app.get("/", function(req, res){
//     res.send("Olá Mundo")
// });

app.get("/home", (req, res) => {
    res.render("index", {pokedex});
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro")
    
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
