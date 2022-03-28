require("dotenv").config();

const express = require("express");
const req = require("express/lib/request");
const { get } = require("express/lib/response");
const res = require("express/lib/response");
const app = express();

const port = process.env.PORT || 3000;
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.urlencoded());

// variavel para receber dados //
let message = "";
let pokemon = "";
let id = "";

const pokedex = [
    {
    id: 1,
    nome: "Blastoise",
    tipo: "Water",
    altura: "1.6 m",
    peso: "85.5 kg",
    categoria: "Shellfish",
    habilidade: "Torrent",
    detalhes: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
},

{
    id: 2,
    nome: "Metapod",
    tipo: "Bug",
    altura: "0.7 m",
    peso: "9.9 kg",
    categoria: "Cocoon",
    habilidade: "Shed Skin",
    detalhes: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
},
{
    id: 3,
    nome: "Arbok",
    tipo: "Poison",
    altura: "3.5 m",
    peso: "65.0 kg",
    categoria: "Cobra",
    habilidade: "Shed Skin",
    detalhes: "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png"

}
]


// app.get("/", function(req, res){
//     res.send("Olá Mundo")
// });


app.get("/", (req, res) => {
    res.render("index", {pokedex, message, pokemon});
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro", {pokedex });

});

app.post("/cadastro", (req, res) => {
    const pokemon = req.body;
    pokemon.id = pokedex.length + 1;
    pokedex.push(pokemon);
    
    message = "Parabéns, seu Pokemon foi cadastrado com sucesso!";
    setTimeout(() => {
        message = "";
      }, 1000);
    res.redirect("/")

});

// app.get("/update/:id", (req, res) => {
//     const id = +req.params.id;
//     const pokemon = pokedex.find(pokemon => pokemon.id === id);
//     res.render("update",{pokemon, pokedex})

// });





app.get("/detalhes/:id", (req, res) => {
    id = +req.params.id;
    pokemon = pokedex.find(pokemon => pokemon.id === id);
    res.render("detalhes", {pokedex, pokemon});

});


app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
