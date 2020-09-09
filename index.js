const dragAndDrop = () => {
    const fields = document.querySelectorAll('.field');
    const form = document.querySelector('#formId');
    const draggable = document.querySelector('#draggableId');

    const dragStart = function(e) {
        const parrent = e.currentTarget.closest('#formId');

        this.classList.add('drag-state');
    
        setTimeout(() => {
            parrent.classList.add('hide');
        }, 0);
    };

    const dragEnd = function(e) {
        const parrent = e.currentTarget.closest('#formId');
        parrent.classList.remove('hide');
        this.classList.remove('drag-state');
    };

    const dragOver = function (e) {
        e.preventDefault();
    };

    const dragEnter = function (e) {
        e.preventDefault();
        this.classList.add('hovered');
    };

    const dragLeave = function () {
        this.classList.remove('hovered');
    };

    const dragDrop = function() {
        this.append(form);
        this.classList.remove('hovered');
    };

    fields.forEach((field) => {
        field.addEventListener('dragover', dragOver);
        field.addEventListener('dragenter', dragEnter);
        field.addEventListener('dragleave', dragLeave);
        field.addEventListener('drop', dragDrop);
    });

    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('dragend', dragEnd);
};

dragAndDrop();