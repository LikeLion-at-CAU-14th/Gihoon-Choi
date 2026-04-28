import Todo from "../DOM/Todo.js";
import CompleteController from "./CompleteController.js";

class TodoController {
    constructor(todo) {
        this.newTodo=new Todo(todo);
        this.delBtnNode=this.newTodo.getDelBtn();
        this.comBtnNode=this.newTodo.getCompleteBtn();
        this.innerNode=this.newTodo.getInnerText();

        this.delBtnNode.addEventListener('click', () => {
            this.delTodo();
        });

        this.comBtnNode.addEventListener('click', () => {
            this.doneTodo();
        });
    }
        addTodo(){
            const todoList=document.getElementById('to-do-list');
            const input=document.querySelector('input');
            todoList.appendChild(this.newTodo.addRow());
            input.value='';
        }
    
        delTodo(){
            //<div id="to-do-list"></div>
            const todoList=document.getElementById('to-do-list');
            todoList.removeChild(this.newTodo.getRow());
        }
        doneTodo(){

            const completeController =
            new CompleteController(this.innerNode.innerText);

            completeController.addComplete();

            this.newTodo.getRow().remove();
        }
        
}

export default TodoController;