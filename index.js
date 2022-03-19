const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");


app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("index", { BlueEdtech: "BlueEdtech" });
});

app.post("/", function(req, res){
    res.send("Post");
});

app.get("/Pagina", function(req, res){
    res.send("Pagina 2");
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
