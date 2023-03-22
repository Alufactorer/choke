function htmlDecode(input) {
        const textArea = document.createElement("textarea");
        textArea.innerHTML = input;
        return textArea.value;
      }



function encodeHTMLEntities(text) {
  var textArea = document.createElement('textarea');
  textArea.innerText = text;
  return textArea.innerHTML;
}

const reg = /\{(.*?)\}/g

function useStore(init){

    this.value = init;

    this.set = (mutation) => {

        if(typeof mutation === "function"){
            
        }else{
            
        }
    }

    [this.value, this.set]
}

function store(value){

    this.value = value;


    this.subscribe = (sub) => {
        this.subs.push(sub)


        return () => {
            this.subs.filter(s => s !== sub)
        }
    }

    this.update = (u) => {

        this.value = u(this.value)

        this.subs.forEach(sub => {

            sub(this.value)
        })

    }

    return this;

}






function init(){
        console.time("Init");

        (typeof initialize === "undefined") ? null : initialize()
       
        
    const inner = document.getElementsByTagName("main")[0]

    let newInner = inner.innerHTML

    const interpolated = newInner.match(reg).map(res => htmlDecode(res)).map(res => {
        match = res.replace("{", "").replace("}", "")
        const fn = new Function(`return ${match}`)

        let [divBefore, divAfter] = newInner.split(encodeHTMLEntities(res))


        let newDivBefore = divBefore.substring(divBefore.lastIndexOf("<"), divBefore.length)

        let s = newDivBefore;
        
         newDivBefore = newDivBefore.includes("class") ? newDivBefore.replace(`"`, `"$value `) : newDivBefore.replace(">", ` class="$value" >`)


       // divAfter = divAfter.substring(0, divAfter.indexOf(">") + 1)

        divBefore = (divBefore.slice(0, divBefore.lastIndexOf(s) - divBefore.length) + newDivBefore)


        newInner = [divBefore, divAfter].join(res)
       console.log(encodeHTMLEntities(res)) 
        newInner = newInner.replace(res, fn())

        

    })

    inner.innerHTML = newInner

    console.timeEnd("Init")
    }
    document.addEventListener("DOMContentLoaded", init)


