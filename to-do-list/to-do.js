
const toDoList = [];
renderOnpage();

//adding eventlistners
document.querySelector('.js-add')
.addEventListener('click',()=>{
  addTodoName()
});


function renderOnpage() {
  let todoListHtml = '';

  toDoList.forEach((todoObject,index)=>{
    const { name, dueDate } = todoObject;
    const html = `<div> ${name}</div>
    <div> ${dueDate}</div>
    <button class="delete js-delete">
    delete </button>`;
    todoListHtml += html;
  })
  
  /*  used foreach instead of for easy to read
  
  for (let i = 0; i < toDoList.length; i++) {
    const todoObject = toDoList[i];
    const { name, dueDate } = todoObject;

    const html = `<div> ${name}</div>
    <div> ${dueDate}</div>
    <button class="delete" onclick="toDoList.splice(${i}, 1); renderOnpage();">
    delete </button>`;
    todoListHtml += html;
  }*/

  document.querySelector('.js-div').innerHTML = todoListHtml;

  //.querySelectorAll() is to select all the elements on the page with class .js-delete
  document.querySelectorAll('.js-delete')
   .forEach((deleteButton,index)=>{
    deleteButton.addEventListener('click',()=>{
      toDoList.splice(index, 1);
      renderOnpage();
    });
   })

}

function addTodoName() {
  const inputElement = document.querySelector('.js-todo');
  const name = inputElement.value;

  const dateElement = document.querySelector('.js-dueDate');
  const dueDate = dateElement.value;

  toDoList.push({ name, dueDate });

  inputElement.value = '';
  dateElement.value = '';
  renderOnpage();
}
