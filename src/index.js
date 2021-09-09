// User should be able to type a task into the input field
// User should be able to click somme form of a submit button
// User's task string should appear on the DOM after the submit button has been activated
// Listen for a submit event on the <form> element
// const main = document.querySelector("#main-content")
// console.log(main)
document.addEventListener("DOMContentLoaded", () => {
// your code here

//want to wait until user submits the form to get what i need
//so first i want the form - how do i get the form?

const form = document.querySelector("#create-task-form");
const myTodos = document.querySelector("#tasks");

//now i want to listen to see when that form is submitted
//and once it submits, we need to tell it what to do
//needs a callback function - written in line here

form.addEventListener("submit", function(e) {
// forms by default will send a post - post goes nowhere
//so we want to prevent the default behavior so now we can handle it w/js and not html
  e.preventDefault();

    //so now i want to add whatever user types in
    const newTask = document.querySelector("#new-task-description").value;
    // put it on the DOM 
    // where do i want to put it? put it on tasks
    //so grab tasks
    const todoItem = document.createElement("li");
    todoItem.innerText = newTask;

    myTodos.appendChild(todoItem);
    form.reset();
  });
});
