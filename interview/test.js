//Input:
const obj = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4]
  }
}
/* Output:
{
  "a": 1,
  "b.c": 2,
  "b.d.0": 3,
  "b.d.1": 4
} */


function flatten(obj){
const op = {} 
for(let [key,value] of Object.entries(obj)){
  if(typeof value ==="object" && value!== null){ 
       
          if(!Array.isArray(value)){
                //console.log(value)
             const temp =  flatten(value)
                const temp2 = Object.keys(temp)[0]
                console.log(temp2)
                op[`${key}.${temp2}`] = flatten(value)
          }
          else{
            const temp =  flatten(value)
                const temp2 = Object.keys(temp)[0]
                  value.forEach((el,i)=>{
                     op[`${key}.${temp2}.${i}`] = el
                  })  
          }
  }
  else{
        op[key]=value
  }
}
console.log(op)
return op
}
flatten(obj)
