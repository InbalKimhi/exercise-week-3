// NUMBER   1-.RESLT
// SEC       -ץ
// NUBER
let num1 = '';
let op = undefined;
let num2 = '';
let result = '';
let op2 = undefined;
let num3 = '';

const ops = Array.from(document.getElementsByClassName("operators"));

ops.map( x => {
    x.addEventListener('click',(event) =>{ 
        let element = event.target as HTMLElement;
        if(!scientificState.on){
            if(!num1) return;
        if (element.innerText === '='){
            result = eval(num1 + op + num2);
            num1= ''
            op = undefined
            num2 = ''
            document.getElementById('screen').innerText = `${result}`
            

        }else if(num1 && num2 && op !== '='){
            num1 = eval(num1 + op + num2);
            op = element.id;
            num2 = '';
            document.getElementById('screen').innerText = `${num1} ${op}`
            

        }else{
            op = element.id;
            document.getElementById('screen').innerText = `${num1} ${op}`
            
        }
        }else{ // if scientific mode on 
            if(!num1) return;

            if (element.innerText === '='){
                if(num3){
                result = eval(num1 + op + num2 + op2 + num3);
                num1= '';
                op = undefined;
                num2 = '';
                op2 = undefined;
                num3 = '';
                document.getElementById('screen').innerText = `${result}`;
                }else{
                    result = eval(num1 + op + num2);
                    num1= ''
                    op = undefined
                    num2 = ''
                    op2 = undefined
                    num3 = ''
                    document.getElementById('screen').innerText = `${result}`
    
                }

            }else if(num1 && num2 && num3 && op2 !== '='){
                num1 = eval(num1 + op + num2 + op2 + num3);
                op = element.id;
                num2 = '';
                op2 = undefined
                num3 = ''
                document.getElementById('screen').innerText = `${num1} ${op}`
                
    
            }else if(op){
                op2 = element.id;
                document.getElementById('screen').innerText = `${num1} ${op} ${num2} ${op2}`

            }else{
                op = element.id;
                document.getElementById('screen').innerText = `${num1} ${op}`
            }
        }
        
       
    })
})


const Numbers = Array.from(document.getElementsByClassName("number-buttons"))


Numbers.map( (y) => {
    y.addEventListener('click',(event)=>{
        let element: HTMLElement = event.target as HTMLElement;
        if(!scientificState.on){

            if(element.innerText === '.'){
                if(!num1) return;
                
            }
            
            if(op === undefined){
                num1 += element.innerText;
                document.getElementById('screen').innerText = `${num1}`
                
            }else{
                num2 += element.innerText;
                document.getElementById('screen').innerText = `${num1} ${op} ${num2}`
            }
    
        }else{

            if(element.innerText === '.'){
                if(!num1) return;
                
            }
            if(op === undefined){
                num1 += element.innerText;
                document.getElementById('screen').innerText = `${num1}`
                
            }else if(op2 === undefined){
                num2 += element.innerText;
                document.getElementById('screen').innerText = `${num1} ${op} ${num2}`
            }else{
                num3 += element.innerText
                document.getElementById('screen').innerText = `${num1} ${op} ${num2} ${op2} ${num3}`
            }
        }
        
    }) 
})


document.getElementById('C-button').addEventListener('click',(event) =>{
    num1 = '';
    op = undefined;
    num2 = '';
    document.getElementById('screen').innerText = ''
    
}

)

document.getElementById('erase').addEventListener('click',(event) =>{
    if(num2){
        num2 = num2.replace( num2[num2.length - 1],'')
        document.getElementById('screen').innerText = `${num1} ${op} ${num2}`
    }
    else if (op !== undefined ){
        op = undefined
        document.getElementById('screen').innerText = `${num1}`
    }else{
       num1 = num1.replace( num1[num1.length - 1],'')
       document.getElementById('screen').innerText = `${num1}`
    }
}

)

