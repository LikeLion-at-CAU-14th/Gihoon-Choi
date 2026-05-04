import Button from "./Button.js";
import Div from "./Div.js";

class Todo{
    constructor(todo) {
        this.row=new Div('','row').node;//<div class="row"></div>
        this.textBox=new Div(todo, 'text-box');//<div class="text-box">todo</div>
        this.completeBtn=new Button('','complete-btn');
        this.delBtn=new Button('','del-btn');

        const completeImg = new Image();
        completeImg.src = './images/check.png';
        completeImg.width = 20;

        this.completeBtn.node.appendChild(completeImg);

        const delImg = new Image();
        delImg.src = './images/delete.png';
        delImg.width = 20;

        this.delBtn.node.appendChild(delImg);
    }
    addRow() {
        [this.textBox, this.completeBtn, this.delBtn].forEach((dom)=>{
            this.row.appendChild(dom.node);
        })
        return this.row;
    }
    getRow() {
        return this.row;
    }
    getCompleteBtn() {
        return this.completeBtn.node;
    }
    getDelBtn() {
        return this.delBtn.node;
    }
    getInnerText() {
        return this.textBox.node;
    }
}

export default Todo;