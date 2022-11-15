// NUMBER   1-.RESLT
// SEC       -ץ
// NUBER
let num1 = '';
let op = undefined;
let num2 = '';
let result = '';

const ops = Array.from(document.getElementsByClassName("operators"))


ops.map( x => {
    x.addEventListener('click',(event)=>{
        if(num1 && num2){
            num1 = eval(num1 + op + num2);
            op = event.target.innerText;
        }
        if (event.target.innerText=== '='){
            result = eval(num1 + op + num2);
            
        }else{
            op = event.target.innerText;
        }
        
    }) 
})

const Numbers = Array.from(document.getElementsByClassName("number-buttons"))

Numbers.map( (y) => {
    y.addEventListener('click',(event)=>{
        if(op=== undefined){
            num1 += event.target.innerText;
            
        }else{
            num2 += event.target.innerText;
            
        }
    }) 
})


//function displayButtonInfo(value){
    //alert(`${value}`);
    
//}
  