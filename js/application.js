function infoButton() {
    alert('Inbal Kimhi\n stage one\n this app is a calculator app. A calculator is a device that performs arithmetic operations on numbers.\n enjoy your calculations :)');
}
;
var lightState = {
    on: true
};
var historyState = {
    on: false
};
var scientificState = {
    on: false
};
var modes = Array.from(document.getElementsByClassName("mode"));
modes.map(function (button) {
    button.addEventListener('click', function (event) {
        var el = event.target;
        if (el.id === 'light-mode') {
            console.log('light');
            document.body.classList.toggle('dark');
            if (lightState.on) {
                el.style.backgroundColor = 'rgb(253, 231, 203)';
                lightState.on = false;
            }
            else {
                el.style.backgroundColor = 'rgb(206, 228, 248)';
                lightState.on = true;
            }
        }
        if (el.id === 'history-mode') {
            if (!historyState.on) {
                el.style.backgroundColor = 'rgb(253, 231, 203)';
                console.log(historyState.on);
                historyState.on = true;
                document.getElementById('history').style.display = 'block';
                console.log(historyState.on);
            }
            else {
                el.style.backgroundColor = 'rgb(206, 228, 248)';
                console.log(historyState.on);
                historyState.on = false;
                document.getElementById('history').style.display = 'none';
                console.log(historyState.on);
            }
        }
        if (el.id === 'scientific-mode') {
            if (!scientificState.on) {
                el.style.backgroundColor = 'rgb(253, 231, 203)';
                document.getElementById('scientific').style.display = 'block';
                scientificState.on = true;
                // resetting values
                num1 = '';
                op = undefined;
                num2 = '';
                op2 = undefined;
                num3 = '';
            }
            else {
                el.style.backgroundColor = 'rgb(206, 228, 248)';
                scientificState.on = false;
                document.getElementById('scientific').style.display = 'none';
                // resetting values
                num1 = '';
                op = undefined;
                num2 = '';
                op2 = undefined;
                num3 = '';
            }
        }
    });
});
