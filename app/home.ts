var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;
function params(func) {
  var fnStr = func.toString().replace(STRIP_COMMENTS, '');
  var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
  if(result === null)
     result = [];
  return result;
}


class Store{
    value : Map<string, any>;
    listeners : Function[] = [];
    constructor(){
        this.value = new Map()

        return this
    }
    

    useStore(v : object){
       Object.keys(v).forEach(key => {
            this.value.set(key, v[key])

       }) 
        
        return this.value
       
    }


    mutate(func: Function){
        params(func).forEach(param => {

            let val = this.value.get(param);

            let newval = func(this.value.get(param))

            this.value.set(param, newval)


            console.log(this.value)
        })
    }

}


const globalStore = new Store()

const useStore = v => globalStore.useStore(v)


const p =  useStore({name:"hello there"})

globalStore.mutate(name => "new name")

console.log(globalStore)

