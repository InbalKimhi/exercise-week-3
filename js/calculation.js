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
        if (event.target.innerText === '='){
            result = eval(num1 + op + num2);
            num1= ''
            op = undefined
            num2 = ''
            alert(result)
            

        }else if(num1 && num2 && op !== '='){
            num1 = eval(num1 + op + num2);
            op = event.target.innerText;
            num2 = '';
            

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

document.getElementById('C-button').addEventListener('click',(event) =>{
    num1 = '';
    op = undefined;
    num2 = '';
    
}

)

document.getElementById('erase').addEventListener('click',(event) =>{
    if(num2){
        num2 = num2.replace( num2[num2.length - 1],'')
    }
    else if (op !== undefined ){
        op = undefined
    }else{
       num1 = num1.replace( num1[num1.length - 1],'')
    }
}

)

//function displayButtonInfo(value){
    //alert(`${value}`);
    
//}
  