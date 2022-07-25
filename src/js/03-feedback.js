import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

initForm();


function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    formData.forEach((name, value) => console.log(name, value));
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
function onFormInput(event) {
    let persistedInputs = localStorage.getItem(STORAGE_KEY);
    persistedInputs = persistedInputs ? JSON.parse(persistedInputs) : {};
    persistedInputs[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedInputs));
}


function initForm() {
    let savedComment = localStorage.getItem(STORAGE_KEY);
    
    if (savedComment) {
        savedComment = JSON.parse(savedComment);
        Object.entries(savedComment).forEach(([name, value]) => {
            form.elements[name].value = value;
        });
        
    }
}