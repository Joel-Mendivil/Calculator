// Global Variables

var num1 = ""; //stores the first number in our math
var num2 = ""; //stores the second number in our math
var operator; //store the value of our operator
var flag = false; //false if we haven't use an operator yet
var display = document.getElementById("display");
var equalTo = false; //false if we haven't pressed the equals button

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
    var opString = "";
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