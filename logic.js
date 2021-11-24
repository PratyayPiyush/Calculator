let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

function goDark(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('Button Text is', buttonText);
        if(buttonText=='X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=='C'){
            screenValue = "";
            screen.value = screenValue;  
        }
        else if (buttonText == 'Erase') {
            screenValue = screenValue.slice(0,-1);
            screen.value = screenValue;
    }
    else if (buttonText == 'sin') {
        screenValue =  Math.sin(screenValue);
        screen.value = screenValue;
    }
    else if (buttonText == 'cos') {
        screenValue =  Math.cos(screenValue);
        screen.value = screenValue;
    }
    else if (buttonText == 'sqrt') {
        screenValue =  Math.sqrt(screenValue);
        screen.value = screenValue;
    }
    else if(buttonText=='='){
        screen.value = eval(screenValue);
    }
    else if(buttonText=='Dark Mode'){
        screenValue = "";
        screen.value = screenValue;
    }
    else{
        screenValue += buttonText;
        screen.value = screenValue;  
    }
})
}

