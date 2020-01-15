// Global Variables

var num1 = ""; //stores the first number in our math
var num2 = ""; //stores the second number in our math
var operator; //store the value of our operator
var flag = false; //false if we haven't use an operator yet
var display = document.getElementById("display");
var equalTo = false; //false if we haven't pressed the equals button
var opString = "";

//calculator

//function to set numbers into the num1 and num2 variables

function setValue(number){
    //clears the display if we already solved a problem
    if(equalTo === true){
        clearButton();
    }

    //if we haven't used an operator we add the number to the end of num1
    if(flag === false){
        num1 += number;
        display.innerHTML = num1;
    }

    else{//if(flag === true)
        num2 += number;
        display.innerHTML += number;
    }

    //this stops overflow of numbers onto the screen
    if(num1.length >10 || num2.length >10){
        display.innerHTML="Max limit of digits reached";
    }
}

//function to add operators

function setOperator(number){
    operator = number;
    flag = true;

    //a bunch of ifs and if elses to place the correct operator
    if(operator === 4){
        display.innerHTML += " / ";
        opString = "/";
    }
    else if(operator === 3){
        display.innerHTML += " * ";
        opString = "*";
    }
    else if(operator === 2){
        display.innerHTML += " - ";
        opString = "-";
    }
    else if(operator === 1){
        display.innerHTML += " + ";
        opString = "+";
    }

    //only allows for 1 operator at a time
    if(flag === true){
        num2 = "";
        display.innerHTML = num1 + opString;
    }

    //if we pressed an operator and there is no num1, clear everything
    if(flag === true && num1 === ""){
        clearButton();
    }

    //if we have already solved the math problem, clear everything
    if(equalTo === true){
        clearButton();
    }
}

//function to clear the calculator

function clearButton(){
    display.innerHTML = "";
    num1 = "";
    num2 = "";
    flag = false;
    equalTo = false;
}

//function to solve the math equation
function equalClick(){
    equalTo = true;
    num1 = parseFloat(num1); //turns num1 from a string to a number
    num2 = parseFloat(num2); //turns num2 from a string to a number
    var result = "";
    var roundedResult = "";

    if(operator === 1){
        result = num1 + num2;
    }
    else if(operator === 2){
        result = num1 - num2;
    }
    else if(operator === 3){
        result = num1 * num2;
    }
    else{
        result = num1 / num2;
    }

    roundedResult = result.toFixed(4);
    display.innerHTML = roundedResult;

    if(roundedResult === "Infinity"){
        display.innerHTML = "Cannot divide by zero";
    }
    if(roundedResult === "NaN"){
        display.innerHTML = "Invalid calculation";
    }
}

//function to remove a number or operator
function backspace(){
    var temp1 = "";
    var temp2 = "";

    if(equalTo === true){
        clearButton();
    }

    if(flag === false){
        temp1 = num1.substring(0, num1.length - 1);
        num1 = temp1;
        display.innerHTML = num1;
    }

    else if(flag === true){
        display.innerHTML = num1;
        flag = false;
    }

    if(num2 !== ""){
        temp2 = num2.substring(0, num2.length - 1);
        num2 = temp2;
        flag = true;
        display.innerHTML = num1 + opString + num2;
    }
}

function setDecimal(){
    if(flag === false){
        if(num1 === ""){
            num1 = "0.";
            display.innerHTML = num1;
        }
        if(num1.indexOf(".") === -1){
            num1 += ".";
            display.innerHTML = num1;
        }
    }

    if(flag === true){
        if(num2 === ""){
            num2 = "0.";
            display.innerHTML += num2;
        }
        if(num2.indexOf(".") === -1){
            num2 += ".";
            display.innerHTML = num1 + opString + num2;
        }
    }
}

//function to set the inverse of x
function setInverse(){
    if(equalTo === true){
        clearButton();
    }
    if(flag === false){
        num1 = 1/num1;
        display.innerHTML = num1;
        equalTo = true;
    }
    if(flag === true){
        display.innerHTML = "Can't do two variables";
    }
    if(num1 === 1/0){
        display.innerHTML = "Can't divide by zero";
    }
}

//function to set CE
function setCe(){
    if(flag === false){
        clearButton();
    }
    if(flag === true){
        num2 = "";
        display.innerHTML = num1 + opString;
    }
}

//function to set x squared
function setX2(){
    if(equalTo === true){
        clearButton();
    }
    if(flag === false){
        num1 = Math.pow(num1,2);
        display.innerHTML = num1;
        equalTo = true;
    }
    if(flag === true){
        num2 = Math.pow(num2,2);
        display.innerHTML = num2; 
    }
}

//function to set the square root of x
function setSquare2(){
    if(equalTo === true){
        clearButton();
    }
    if(flag === false){
        num1 = Math.sqrt(num1,2);
        display.innerHTML = num1;
        equalTo = true;
    }
}