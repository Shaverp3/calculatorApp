function sumOfInputs(){
    let num1Txt = document.querySelector("#firstNumber").value
    const num1= parseInt(num1Txt,10)
    let num2Txt = document.querySelector("#secondNumber").value
    const num2=parseInt(num2Txt,10)
    const result = num1+num2
    document.querySelector("#result").innerHTML=result
};

function subtractInputs(){
let num1Txt = document.querySelector("#firstNumber").value
const num1= parseInt(num1Txt,10)
let num2Txt = document.querySelector("#secondNumber").value
const num2=parseInt(num2Txt,10)
const result = num1-num2
document.querySelector("#result").innerHTML=result
};

function multiplyInputs(){
    let num1Txt = document.querySelector("#firstNumber").value
    const num1= parseInt(num1Txt,10)
    let num2Txt = document.querySelector("#secondNumber").value
    const num2=parseInt(num2Txt,10)
    const result = num1*num2
    document.querySelector("#result").innerHTML=result
};

function divideInputs(){
    let num1Txt = document.querySelector("#firstNumber").value
    const num1= parseInt(num1Txt,10)
    let num2Txt = document.querySelector("#secondNumber").value
    const num2=parseInt(num2Txt,10)
    const result = num1/num2
    document.querySelector("#result").innerHTML=result
};

document.querySelector("#equalsBtn").addEventListener("click", function(){
    sumOfInputs()
    document.querySelector("#firstNumber").value=""
    document.querySelector("#secondNumber").value=""});

document.querySelector("#subtractionBtn").addEventListener("click", function(){
    subtractInputs()
    document.querySelector("#firstNumber").value=""
    document.querySelector("#secondNumber").value=""});

document.querySelector("#multiplyBtn").addEventListener("click", function(){
    multiplyInputs()
    document.querySelector("#firstNumber").value=""
    document.querySelector("#secondNumber").value=""});

document.querySelector("#divideBtn").addEventListener("click", function(){
    divideInputs()
    document.querySelector("#firstNumber").value=""
    document.querySelector("#secondNumber").value=""});
