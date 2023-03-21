function $tore(init){
            this.value = init;
            this.subs = [];

            this.change = mut => {

                
                this.subs.forEach(s => s(mut(this.value)))
                this.value = mut(this.value);
            }

            this.subscribe = sub => {
                this.subs.push(sub)

                return () => {

                   this.subs = this.subs.filter(s => s !== sub) 
                }
            }

            return this
                
        }

        var componentStore = new $tore({})




        function signal(init){
            this.value = init;
            this.ref = "";
        
            this.change  = (mutation) => {

                
                const tochange = [...document.getElementsByClassName(`value_$${this.ref}`)];
                
                tochange.forEach(el => {

                    el.innerHTML = el.innerHTML.replace(`${this.value}`, mutation(this.value)) 
                    this.value = mutation(this.value)
                });
            }

            return this

        }

       function fromHtml(text) {
  var textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}  


        function beforeInit(){
            for(var x in window){
                if(window[x] instanceof signal){

                    const newsignal = window[x]

                    newsignal.ref = x;


                    
                    componentStore.change(value => {
                        return {...value, [x]:newsignal} 
                    })

                }
            }
            
        }
