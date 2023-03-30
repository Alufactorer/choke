import React from "react"
import {renderToString} from "react-dom/server"


function signal<T>(init:T){
    const identifier = `$${init}$`
}


const [h, setH] = signal("string")



const a = (
<>
    <div>
        <h1>
            {h}
        </h1>
    </div>
</>

)

console.log(renderToString(a))
