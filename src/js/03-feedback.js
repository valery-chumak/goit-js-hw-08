// import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

// form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);
email.addEventListener('input', onEmailInput);
textarea.addEventListener('input', OnTextareaInput);
let comment = {};
populateComment();
// function onFormInput(event) {
//     const email = event.currentTarget.value;
//     comment.email = email;
//     const message = event.currentTarget.value;
//     comment.message = message;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(comment));
//     console.log(comment);
// }
function onEmailInput(event) {
    const email = event.currentTarget.value;
    comment.email = email;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comment));
    
}
function OnTextareaInput(event){
    const message = event.currentTarget.value;
   
    comment.message = message;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comment));
   
}

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
    comment.email = "";
    comment.message = "";
}
function populateComment() {
    const savedComment = localStorage.getItem(STORAGE_KEY);
    const savedCommentParsed = JSON.parse(savedComment);
    // const savedEmail = savedCommentParsed.email;
    // const savedMessage = savedCommentParsed.message;
    
    if (savedComment) {
        console.log(savedComment);
        email.value = savedCommentParsed.email;
        textarea.value = savedCommentParsed.message;
    }
    // else if (savedEmail && !savedMessage) {
    //     email.value = savedEmail;
    //     textarea.value = "";
    // }else if(!savedEmail && savedMessage){
    //     email.value = "";
    //     textarea.value = savedMessage;
    // }
    // else {
    //     email.value = "";
    //     textarea.value = "";
    // }
}