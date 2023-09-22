const submitEl = document.querySelector(".submit-button");
const formWrapper = document.querySelector(".formWrapper");
const messageEl = document.querySelector('.message');
const alert = document.createElement("div");
const dateInput = document.querySelector(".date");
const weightInput = document.querySelector(".weight");
const measurmentInput = document.querySelector(".measurement");

let errorMessageShown = false;

submitEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (!errorMessageShown && (!dateInput.value || !weightInput.value || !measurmentInput.value)) {
    alert.classList.add("alert");
    alert.textContent = "Please enter data in all fields!";
    messageEl.appendChild(alert)
    errorMessageShown =  true;
  } else {
    submitEntry();
  }
});

function submitEntry () {
  if (errorMessageShown && dateInput.value && weightInput.value && measurmentInput.value) {
     messageEl.removeChild(alert);
     document.querySelector('.formEl').reset();
  } 
  errorMessageShown =  false;
  
}

