const answersButtons = document.querySelectorAll('.answer');
const correctAnswersButtons = document.querySelectorAll('.correct-answer');
const checkingButton = document.querySelector('.checking');
const showingPoints = document.querySelector('.points');
const showingButton = document.querySelector('.showing');
const retakingButton = document.querySelector('.retaking');

const array = [checkingButton, showingButton, retakingButton];

function press(e) {
    console.log ("Button " +e.target.name +" is pressed");
}

for (let i = 0; i < array.length; i++) {
    const element = array[i]; 
    element.addEventListener("click", press, false);
}