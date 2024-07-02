function clearScreen(){
    document.getElementById('result').value = "";
}

function display(value){
    document.getElementById('result').value += value;
}

function calculate(){
    var operationOfValue = document.getElementById('result').value;
    var actualResult = eval(operationOfValue);
    document.getElementById('result').value = actualResult;
}
