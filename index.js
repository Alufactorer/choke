const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();



app.use(express.static("lib"))

app.get("/", (req, res) => {
    
    let homehtml = fs.readFileSync(path.join(__dirname, "app", "home.html"))





    res.sendFile(path.join((__dirname), "app", "home.html"))
    
    

})

app.listen(3000, () => {console.log("runs")})
