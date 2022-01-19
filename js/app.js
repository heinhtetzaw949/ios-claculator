let filter = x => {

    let current = displayBox.innerText;
    let lastchar = current[current.length-1];
   
    if(current.length >= 10){
        return false;
    }

    if(current == "0" && x != "."){
        clearLast()
    }

    if(operators.includes(x) && operators.includes(lastchar)){
        
        return false;
        
    }
    return true;
}




let showInDisplay = (x) => {
    if(filter(x)){
        displayBox.innerText += x

    }

}


let operators = ["+","-","*","/","="];
let keypad = document.querySelector(".keypad");
let displayBox = document.querySelector(".display")

let clearAll = _ => displayBox.innerText = "";

let calc = _ =>    displayBox.innerText = eval(displayBox.innerText);


let clearLast = _ => displayBox.innerText = displayBox.innerText.substring(0,displayBox.innerText.length-1)

