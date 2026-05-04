import Complete from "../DOM/Complete.js";

class CompleteController {
    constructor(todoText) {
        this.complete = new Complete(todoText);

        this.delBtnNode = this.complete.getDelBtn();
        this.undoBtnNode = this.complete.getUndoBtn();

        this.delBtnNode.addEventListener('click', () => {
            this.delComplete();
        });

        this.undoBtnNode.addEventListener('click', () => {
            this.undoTodo();
        });
    }

    addComplete() {
        const completeList = document.getElementById('complete-list');

        completeList.appendChild(this.complete.addRow());
    }

    delComplete() {
        this.complete.getRow().remove();
    }

    undoTodo() {
        this.complete.getRow().remove();
    }
}

export default CompleteController;