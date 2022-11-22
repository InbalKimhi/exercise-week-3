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
            document.body.classList.toggle('dark');
            if (lightState.on) {
                el.style.backgroundColor = 'rgb(253, 231, 203)';
                lightState.on = false;
            }
            else {
                el.style.backgroundColor = 'revert-layer';
                lightState.on = true;
            }
        }
        if (el.id === 'history-mode') {
            if (!historyState.on) {
                el.style.backgroundColor = 'rgb(253, 231, 203)';
                historyState.on = true;
                document.getElementById('history').style.display = 'flex';
            }
            else {
                el.style.backgroundColor = 'revert-layer';
                historyState.on = false;
                document.getElementById('history').style.display = 'none';
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
                document.getElementById('screen').innerText = '';
            }
            else {
                el.style.backgroundColor = 'revert-layer';
                scientificState.on = false;
                document.getElementById('scientific').style.display = 'none';
                // resetting values
                num1 = '';
                op = undefined;
                num2 = '';
                op2 = undefined;
                num3 = '';
                document.getElementById('screen').innerText = '';
            }
        }
        if (el.id === 'gear') {
            console.log('in gear');
            window.location.href = '../html/config.html';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var url = window.location.search;
    var config = new URLSearchParams(url);
    if (url) {
        document.body.style.backgroundColor = config.get('color');
        document.body.style.fontFamily = config.get('font');
        if (config.get('daylight') === 'dark') {
            console.log('after');
            document.body.classList.toggle('darker');
        }
    }
});
