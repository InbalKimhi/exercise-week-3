function infoButton(){
    alert('Inbal Kimhi\n stage one\n this app is a calculator app. A calculator is a device that performs arithmetic operations on numbers.\n enjoy your calculations :)');
};

let lightState ={
    on: true
}
let historyState ={
    on: false
}
let scientificState ={
    on: false
}

const modes = Array.from(document.getElementsByClassName("mode"));

modes.map( (button) => {
    button.addEventListener('click',(event) => {
        let el = event.target as HTMLElement;
        if(el.id === 'light-mode'){
            document.body.classList.toggle('dark');

            if(lightState.on){
                el.style.backgroundColor = 'rgb(253, 231, 203)';
                lightState.on = false;
                
            }else{
                el.style.backgroundColor = 'revert-layer';
                lightState.on = true;
        }
        }  
        
        if(el.id === 'history-mode'){
            if(!historyState.on){
                el.style.backgroundColor = 'rgb(253, 231, 203)';               
                historyState.on = true;
                document.getElementById('history').style.display = 'block'; 


            }else{
                el.style.backgroundColor = 'revert-layer';
                historyState.on = false;
                document.getElementById('history').style.display = 'none';
                
        }
        }

        if(el.id === 'scientific-mode'){
            if(!scientificState.on){
                el.style.backgroundColor = 'rgb(253, 231, 203)';
                document.getElementById('scientific').style.display = 'block';
                scientificState.on = true;
                // resetting values
                num1= ''
                op = undefined
                num2 = ''
                op2 = undefined
                num3 = ''
                

            }else{
                el.style.backgroundColor = 'revert-layer';
                scientificState.on = false;
                document.getElementById('scientific').style.display = 'none';
                // resetting values
                num1= ''
                op = undefined
                num2 = ''
                op2 = undefined
                num3 = ''
        }
        }
        
    })
});


