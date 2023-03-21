const init = () => { 



            typeof initialize === "undefined" ? "" : initialize();




            const reg = /\{(.*?)\}/g

            const template = document.getElementsByTagName("main")[0].innerHTML;

            


            
            const rev = [...template].reverse().join("") 


            const interpolated = template.match(reg)



            console.log(template, rev, interpolated)

            interpolated.forEach(match => {

                reverseMatch = [...match].reverse().join("")
                

                let gt = template.substring(template.indexOf(match), template.length -1)

                gt = gt.substring(0, gt.indexOf(">") + 1)
                console.log(match,gt)
            })
            
        }

document.addEventListener("DOMContentLoaded", init);

beforeInit()
