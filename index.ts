import * as fs from "fs"
import path from "path"

const appDir = path.join(__dirname, "app");



function compileTargets(){

    const appfiles = fs.readdirSync(appDir).map(dir => fs.readFileSync(dir))



    console.log(appfiles)
}



compileTargets();
