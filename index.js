const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();


let choke = fs.readFileSync(path.join(__dirname, "choke.js"))
let end = fs.readFileSync(path.join(__dirname, "end.js"))

choke = `<script>${choke}</script>`
end = `<script>${end}</script>`




app.get("/", (req, res) => {
    
    let homehtml = fs.readFileSync(path.join(__dirname, "app", "home.html"))




    homehtml = [choke, homehtml, end].join("\n")

    res.send(homehtml)
    
    

})

app.listen(3000, () => {console.log("runs")})
