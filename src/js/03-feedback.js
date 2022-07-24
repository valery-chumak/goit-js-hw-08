import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

// form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);
email.addEventListener('input', throttle(onEmailInput, 500));
textarea.addEventListener('input', throttle(OnTextareaInput, 500));
let comment = {};
populateComment();

function onEmailInput(event) {
    const email = event.target.value;
    comment.email = email;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comment));
    
}
function OnTextareaInput(event){
    const message = event.target.value;
    comment.message = message;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comment));
}

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
function populateComment() {
    const savedComment = localStorage.getItem(STORAGE_KEY);
    const savedCommentParsed = JSON.parse(savedComment);

    
    if (savedComment) {
        console.log(savedComment);
        email.value = savedCommentParsed.email;
        textarea.value = savedCommentParsed.message;
    }
}