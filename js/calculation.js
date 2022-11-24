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
function startVar() {
    num1 = '';
    op = undefined;
    num2 = '';
    op2 = undefined;
    num3 = '';
}
function addOp(element) {
    if (!num1)
        return;
    op = element.id;
    var s = "".concat(num1, " ").concat(op);
    return s;
}
;
function addOpSci(element) {
    if (!num1)
        return;
    if (op) {
        op2 = element.id;
    }
    else {
        op = element.id;
    }
}
;
function calc(n1, o, n2) {
    return eval(n1 + o + n2);
}
;
function calcSci(n1, o, n2, o2, n3) {
    return eval(n1 + o + n2 + o2 + n3);
}
;
function opHandler(element) {
    if (!scientificState.on) { // sci off
        if (element.innerText === '=') {
            result = calc(num1, op, num2);
            createHistory("".concat(num1, " ").concat(op, " ").concat(num2, " = ").concat(result));
            startVar();
            document.getElementById('screen').innerText = "".concat(result);
        }
        else if (num1 && num2 && op !== '=') {
            createHistory("".concat(num1, " ").concat(op, " ").concat(num2, " = ").concat(calc(num1, op, num2)));
            num1 = calc(num1, op, num2);
            addOp(element);
            num2 = '';
            document.getElementById('screen').innerText = "".concat(num1, " ").concat(op);
        }
        else {
            addOp(element);
            document.getElementById('screen').innerText = "".concat(num1, " ").concat(op);
        }
    }
    else { // sci on 
        if (element.innerText === '=') {
            if (num3) {
                result = calcSci(num1, op, num2, op2, num3);
                createHistory("".concat(num1, " ").concat(op, " ").concat(num2, " ").concat(op, " ").concat(num3, " = ").concat(result));
                startVar();
                document.getElementById('screen').innerText = "".concat(result);
            }
            else {
                createHistory("".concat(num1, " ").concat(op, " ").concat(num2, " = ").concat(calc(num1, op, num2)));
                result = calc(num1, op, num2);
                startVar();
                document.getElementById('screen').innerText = "".concat(result);
            }
        }
        else if (num1 && num2 && num3 && op2 !== '=') {
            createHistory("".concat(num1, " ").concat(op, " ").concat(num2, " ").concat(op, " ").concat(num3, "= ").concat(calcSci(num1, op, num2, op2, num3)));
            startVar();
            num1 = calcSci(num1, op, num2, op2, num3);
            addOpSci(element);
            document.getElementById('screen').innerText = "".concat(num1, " ").concat(op);
        }
        else if (op) {
            addOpSci(element);
            document.getElementById('screen').innerText = "".concat(num1, " ").concat(op, " ").concat(num2, " ").concat(op2);
        }
        else {
            addOpSci(element);
            document.getElementById('screen').innerText = "".concat(num1, " ").concat(op);
        }
    }
}
function addNumber(element) {
    if (element.innerText === '.') {
        if (!num1)
            return;
    }
    if (!scientificState.on) {
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
}
ops.map(function (x) {
    x.addEventListener('click', function (event) {
        var element = event.target;
        opHandler(element);
    });
});
var Numbers = Array.from(document.getElementsByClassName("number-buttons"));
Numbers.map(function (y) {
    y.addEventListener('click', function (event) {
        var element = event.target;
        addNumber(element);
    });
});
document.getElementById('C-button').addEventListener('click', function (event) {
    startVar();
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
