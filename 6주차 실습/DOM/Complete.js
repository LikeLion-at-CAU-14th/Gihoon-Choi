import Button from "./Button.js";
import Div from "./Div.js";

class Complete {
    constructor(todo) {
        this.row = new Div('', 'row').node;

        this.textBox = new Div(todo, 'text-box');
        this.textBox.node.classList.add('done-text');

        this.undoBtn = new Button('', 'done-btn');
        this.delBtn = new Button('', 'del-btn');

        const undoImg = new Image();
        undoImg.src = './images/undo.png';
        undoImg.width = 20;

        this.undoBtn.node.appendChild(undoImg);

        const delImg = new Image();
        delImg.src = './images/delete.png';
        delImg.width = 20;

        this.delBtn.node.appendChild(delImg);
    }

    addRow() {
        [this.textBox, this.undoBtn, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node);
        });

        return this.row;
    }

    getRow() {
        return this.row;
    }

    getUndoBtn() {
        return this.undoBtn.node;
    }

    getDelBtn() {
        return this.delBtn.node;
    }
}

export default Complete;