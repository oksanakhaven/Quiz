const answersButtons = document.querySelectorAll(".answer");
const correctAnswersButtons = document.querySelectorAll(".correct-answer");
const checkingButton = document.querySelector(".checking");
const showingPoints = document.querySelector(".points");
const retakingButton = document.querySelector(".retaking");

let points = 0;

//add style to CorrectAnswerButtons
function showCorrect() {
  for (let i = 0; i < correctAnswersButtons.length; i++) {
    correctAnswersButtons[i].classList.add("show-correct");
  }
}

//add yellow colour, when answers are selected
for (let i = 0; i < answersButtons.length; i++) {
  const el = answersButtons[i];
  el.addEventListener("click", select, false);
}
function select() {
  if (this.classList.contains("selected")) {
    this.classList.remove("selected");
  } else {
    // unselect other selected buttons if they exsist
    let children = this.parentElement.children; //get children elements from parent of pressed button(other buttons)
    for (let i = 0; i < children.length; i++) { 
      children[i].classList.remove("selected");
    }
    this.classList.add("selected");
  }
}

//add fuctionality to button Cheking and calculate points
checkingButton.addEventListener("click", () => {
  for (let i = 0; i < answersButtons.length; i++) {
    if (
      answersButtons[i].classList.contains("selected") &&
      answersButtons[i].classList.contains("correct-answer")
    ) {
      points++;
    }
  }
  showCorrect();
  showingPoints.innerHTML = "Points: " + points;
  //make the button Cheking inactive, after showing the result
  checkingButton.disabled = true;
});

//add fuctionality to button Retake
retakingButton.addEventListener("click", () => {
  for (let i = 0; i < answersButtons.length; i++) {
    answersButtons[i].classList.remove("selected");
    answersButtons[i].classList.remove("show-correct");
  }

  points = 0;

  showingPoints.innerHTML = "Points: " + points;
  checkingButton.disabled = false;
});
