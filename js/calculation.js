// NUMBER   1-.RESLT
// SEC       -ץ
// NUBER
var num1 = '';
var op = undefined;
var num2 = '';
var result = '';
var op2 = undefined;
var num3 = '';
var ops = Array.from(document.getElementsByClassName("operators"));
function createHistory(cal) {
    var div = document.createElement('div');
    document.getElementById('history').appendChild(div);
    div.innerHTML = cal;
}
ops.map(function (x) {
    x.addEventListener('click', function (event) {
        var element = event.target;
        if (!scientificState.on) {
            if (!num1)
                return;
            if (element.innerText === '=') {
                result = eval(num1 + op + num2);
                var s = "".concat(num1, " ").concat(op, " ").concat(num2, " = ").concat(result);
                createHistory(s);
                num1 = '';
                op = undefined;
                num2 = '';
                document.getElementById('screen').innerText = "".concat(result);
            }
            else if (num1 && num2 && op !== '=') {
                var s = "".concat(num1, " ").concat(op, " ").concat(num2, " = ").concat(eval(num1 + op + num2));
                createHistory(s);
                num1 = eval(num1 + op + num2);
                op = element.id;
                num2 = '';
                document.getElementById('screen').innerText = "".concat(num1, " ").concat(op);
            }
            else {
                op = element.id;
                document.getElementById('screen').innerText = "".concat(num1, " ").concat(op);
            }
        }
        else { // if scientific mode on 
            if (!num1)
                return;
            if (element.innerText === '=') {
                if (num3) {
                    result = eval(num1 + op + num2 + op2 + num3);
                    var s = "".concat(num1, " ").concat(op, " ").concat(num2, " ").concat(op, " ").concat(num3, "= ").concat(result);
                    createHistory(s);
                    num1 = '';
                    op = undefined;
                    num2 = '';
                    op2 = undefined;
                    num3 = '';
                    document.getElementById('screen').innerText = "".concat(result);
                }
                else {
                    var s = "".concat(num1, " ").concat(op, " ").concat(num2, " = ").concat(eval(num1 + op + num2));
                    createHistory(s);
                    result = eval(num1 + op + num2);
                    num1 = '';
                    op = undefined;
                    num2 = '';
                    op2 = undefined;
                    num3 = '';
                    document.getElementById('screen').innerText = "".concat(result);
                }
            }
            else if (num1 && num2 && num3 && op2 !== '=') {
                var s = "".concat(num1, " ").concat(op, " ").concat(num2, " ").concat(op, " ").concat(num3, "= ").concat(eval(num1 + op + num2 + op2 + num3));
                createHistory(s);
                num1 = eval(num1 + op + num2 + op2 + num3);
                op = element.id;
                num2 = '';
                op2 = undefined;
                num3 = '';
                document.getElementById('screen').innerText = "".concat(num1, " ").concat(op);
            }
            else if (op) {
                op2 = element.id;
                document.getElementById('screen').innerText = "".concat(num1, " ").concat(op, " ").concat(num2, " ").concat(op2);
            }
            else {
                op = element.id;
                document.getElementById('screen').innerText = "".concat(num1, " ").concat(op);
            }
        }
    });
});
var Numbers = Array.from(document.getElementsByClassName("number-buttons"));
Numbers.map(function (y) {
    y.addEventListener('click', function (event) {
        var element = event.target;
        if (!scientificState.on) {
            if (element.innerText === '.') {
                if (!num1)
                    return;
            }
            if (op === undefined) {
                num1 += element.innerText;
                document.getElementById('screen').innerText = "".concat(num1);
            }
            else {
                num2 += element.innerText;
                document.getElementById('screen').innerText = "".concat(num1, " ").concat(op, " ").concat(num2);
            }
        }
        else {
            if (element.innerText === '.') {
                if (!num1)
                    return;
            }
            if (op === undefined) {
                num1 += element.innerText;
                document.getElementById('screen').innerText = "".concat(num1);
            }
            else if (op2 === undefined) {
                num2 += element.innerText;
                document.getElementById('screen').innerText = "".concat(num1, " ").concat(op, " ").concat(num2);
            }
            else {
                num3 += element.innerText;
                document.getElementById('screen').innerText = "".concat(num1, " ").concat(op, " ").concat(num2, " ").concat(op2, " ").concat(num3);
            }
        }
    });
});
document.getElementById('C-button').addEventListener('click', function (event) {
    num1 = '';
    op = undefined;
    num2 = '';
    document.getElementById('screen').innerText = '';
});
document.getElementById('erase').addEventListener('click', function (event) {
    if (num2) {
        num2 = num2.replace(num2[num2.length - 1], '');
        document.getElementById('screen').innerText = "".concat(num1, " ").concat(op, " ").concat(num2);
    }
    else if (op !== undefined) {
        op = undefined;
        document.getElementById('screen').innerText = "".concat(num1);
    }
    else {
        num1 = num1.replace(num1[num1.length - 1], '');
        document.getElementById('screen').innerText = "".concat(num1);
    }
});
