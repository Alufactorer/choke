import React from "react"
import ReactDomServer from "react-dom/server"

function signal<T>(init:T){
    const identifier = `$${init}$`
}





const a = (
<>
    <div>
        <h1>
hello there        </h1>
    </div>
</>

)

console.log(ReactDomServer.renderToString(a))
