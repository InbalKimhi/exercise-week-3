// theres a lot of bugs in my code and theres a lot i could have done better, due to the time difficulty and the learning obstacles I have 
// faced, I think I've gave the best I could under the circumstances. I finished until part 4, 1 and half of the layout of 2 (couldnt find the rest of the icons).
// I would appreciate taking all of that into consideration when checking this assignment.
// also when pressing on the diffrent states buttons press on the sides and not middle.

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
                document.getElementById('history').style.display = 'flex'; 


            }else{
                el.style.backgroundColor = 'revert-layer';
                historyState.on = false;
                document.getElementById('history').style.display = 'none';
                
        }
        }

        if(el.id === 'scientific-mode'){
            if(!scientificState.on){
                el.style.backgroundColor = 'rgb(253, 231, 203)';
                document.getElementById('scientific').style.display = 'grid';
                scientificState.on = true;
                // resetting values
                startVar()
                deleteHistory()
                document.getElementById('screen').innerText = '';
                

            }else{
                el.style.backgroundColor = 'revert-layer';
                scientificState.on = false;
                document.getElementById('scientific').style.display = 'none';
                // resetting values
                startVar()
                deleteHistory()
                document.getElementById('screen').innerText = '';
        }
        }

        if(el.id === 'gear'){
            console.log('in gear')
            window.location.href = '../html/config.html'
            
        }
        
    })
});

document.addEventListener('DOMContentLoaded', () =>{
const url = window.location.search;
let config = new URLSearchParams(url);

if(url){
    
    document.body.style.backgroundColor = config.get('color');
    document.body.style.fontFamily = config.get('font');

    if(config.get('daylight')  === 'dark'){
        console.log('after');
        document.body.classList.toggle('darker');
    }

}
});

