var prevNum = "";
var currNum = "";
var setNumber;
var resultNum;
var operator;
var evaluation;


 function clearAll() {
    var screen = document.getElementById("display");
    prevNum = "";
    currNum = "";
    screen.value = "0";
    screen.setAttribute("value", resultNum);
  };




function display(x){
        var screen = document.getElementById("display");
        currNum += x;
        screen.value = currNum;  
}



function mathCalculation(){
    var screen = document.getElementById("display");
   
    //converts string to numbr
    prevNum = parseFloat(prevNum);
    currNum = parseFloat(currNum);
    
    if(operator === "^") {
        resultNum = Math.pow(prevNum,currNum);
        screen.value = resultNum;
    }
    else {
    evaluation = prevNum + operator + currNum;
    resultNum = eval(evaluation);
    currNum = resultNum;
    screen.value = resultNum;
    }
    
}


//store number
function storeNum(x) {
    
  
    operator = x;
    prevNum = currNum;
    currNum = "";
    
    
}




