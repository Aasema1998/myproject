

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {button.addEventListener('click', () => handleClick(button));})
 

function clearDisplay(){
 document.getElementById("display").value="";
}

function inputValue(){

    const display = document.getElementsByClassName("display")[0];
}

function backSpace(){

}
function handleClick(button) {
     const buttonValue = button.textContent;
    
     if(buttonValue === 'C'){
        display.value = "";
    }
        else if(buttonValue === '='){
            calculate();
        }
        else{
            display.value += buttonValue;
        }
}


function calculate(){
     try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error'; 
    }
    }

