const form = document.getElementById('form');
const cardholderName = document.getElementById('cardholder');
const cardnumber = document.getElementById('cardnumber');
const exp1 = document.getElementById('exp1');
const cvc = document.getElementById('cvc');
const exp2 = document.getElementById('exp2');
const completeComponent = document.querySelector('.complete-component');
const continueBtn = document.querySelector('.complete-component button');

form.addEventListener('submit', (ev) => {
    ev.preventDefault(); 
    console.log('form submitted')
    displayComponent(); 
    form.reset()
} )

continueBtn.addEventListener('click',() =>{
    hideComponent();
})
    

let setCorrect = (input) =>{
    const formOrder = input.parentElement;
    const inputField = formOrder.querySelector('input');
    inputField.style.borderColor = '#dedddf';
    const error = formOrder.querySelector('small');
    error.style.visibility = 'hidden'
}

let setIncorrect = (input, message) =>{
    const formOrder = input.parentElement;
    const inputField = formOrder.querySelector('input');
    inputField.style.borderColor = '#ff0000';
    const error = formOrder.querySelector('small');
    error.innerHTML = message;
    error.style.visibility = 'visible'
    error.style.color = '#ff0000';
}

let displayComponent = () =>{
    form.style.visibility = 'hidden';
    completeComponent.style.visibility = 'visible';
}

let hideComponent = () =>{
    form.style.visibility = 'visible';
    completeComponent.style.visibility = 'hidden';
}

  let enableSubmit = ()=>{
    let inputs = document.getElementsByClassName('required ');
    let btn = document.querySelector('form button');
    let isValid = true;
    for (let index = 0; index <inputs.length; index++) {
        let element = inputs[index];
        if (element.value.length  === 0 ) {
            setIncorrect(element, "can't be blank")
            isValid = false;
        }   
        
        else {
            setCorrect(element);
        }
        
        document.getElementById('cardName').innerHTML = inputs[0].value;
        document.querySelector('.d p').innerHTML = inputs[1].value;
        document.getElementById('cardDate1').innerHTML = inputs[2].value;
        document.getElementById('cardDate2').innerHTML = inputs[3].value;
        document.querySelector('.three p').innerHTML = inputs[4].value;
        
    }
    btn.disabled = !isValid;
}  