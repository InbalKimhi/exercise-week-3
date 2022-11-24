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

function createHistory(cal: string){
 let div: Element= document.createElement('div');
    document.getElementById('history').appendChild(div);
    div.innerHTML = cal;
}
function startVar(){
    num1= '';
    op = undefined;
    num2 = '';
    op2 = undefined;
    num3 = '';
}

function addOp(element){
    if(!num1) return;
    op = element.id;
    let s = `${num1} ${op}`
    return  s;
    
};

function addOpSci(element){
    if(!num1) return;
    
    if(op){
        op2 = element.id;

    }else{
        op = element.id;
    }
};

function calc(n1,o,n2){
    return eval(n1 + o + n2);
};

function calcSci(n1, o, n2, o2, n3){
    return  eval(n1 + o + n2 + o2 + n3);
};

function opHandler(element){
    if(!scientificState.on){ // sci off
        if (element.innerText === '='){
            result = calc(num1,op,num2)
            createHistory(`${num1} ${op} ${num2} = ${result}`)
            startVar()

            document.getElementById('screen').innerText = `${result}`
            
        }else if(num1 && num2 && op !== '='){
            createHistory(`${num1} ${op} ${num2} = ${calc(num1, op, num2)}`);
            num1 = calc(num1, op, num2);
            addOp(element);
            num2 = '';

            document.getElementById('screen').innerText = `${num1} ${op}`
            

        }else{ 
            addOp(element)
            document.getElementById('screen').innerText =  `${num1} ${op}`
        }


    }else{ // sci on 
        if (element.innerText === '='){
            if(num3){
            result = calcSci(num1,op ,num2, op2, num3);
            createHistory(`${num1} ${op} ${num2} ${op2} ${num3} = ${result}`)
            startVar()
            document.getElementById('screen').innerText = `${result}`;

            }else{
                createHistory(`${num1} ${op} ${num2} = ${calc(num1, op, num2)}`)
                result = calc(num1, op, num2);
                startVar()
                document.getElementById('screen').innerText = `${result}`

            }

        }else if(num1 && num2 && num3 && op2 !== '='){

            createHistory(`${num1} ${op} ${num2} ${op2} ${num3}= ${calcSci(num1,op,num2,op2,num3)}`)
            startVar()
            num1 = calcSci(num1,op,num2,op2,num3);
            addOpSci(element) 

            document.getElementById('screen').innerText = `${num1} ${op}`
            

        }else if(op){
            addOpSci(element)
            document.getElementById('screen').innerText = `${num1} ${op} ${num2} ${op2}`

        }else{
            addOpSci(element)
            document.getElementById('screen').innerText = `${num1} ${op}`
        }
    }}


function addNumber(element: HTMLElement){
    if(element.innerText === '.'){
        if(!num1) return;
    }

    if(!scientificState.on){

        if(op === undefined){
            num1 += element.innerText;
            document.getElementById('screen').innerText = `${num1}`
            
        }else{
            num2 += element.innerText;
            document.getElementById('screen').innerText = `${num1} ${op} ${num2}`
        }


    }else{

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
        
}
    
ops.map( x => {
    x.addEventListener('click',(event) =>{ 
        let element = event.target as HTMLElement;     
        opHandler(element) 
    })
})


const Numbers = Array.from(document.getElementsByClassName("number-buttons"))


Numbers.map( (y) => {
    y.addEventListener('click',(event)=>{
        let element: HTMLElement = event.target as HTMLElement;
        addNumber(element);
        
    }) 
})


document.getElementById('C-button').addEventListener('click',(event) =>{
    startVar();
    document.getElementById('screen').innerText = '';
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

