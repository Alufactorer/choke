const fs = require("fs");
const path = require("path");


const files = fs.readdirSync(__dirname);

const routes = files.filter(val => val.includes(".html"))



//extract all the information about the code, server and clientside
console.log(routes)

const fullHTML = routes.map(route => {
    
    const html = fs.readFileSync(path.join(__dirname, route), "utf-8")


    return html

})


const code = "console.log('hello world')"


const f = new Function(code)

f()


console.log(fullHTML)
