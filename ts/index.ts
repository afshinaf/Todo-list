const form = document.querySelector('form');

const createList = () => {
    const list = document.querySelector('ol')
    const li = document.createElement('li');

    const createDeleteButton = () => {
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('btn')
        deleteButton.classList.add('btn-danger')
        deleteButton.innerHTML = 'Delete'
        li.appendChild(deleteButton)
    }

    const createEditButton = () => {
        const editButton = document.createElement('button')
        editButton.classList.add('btn')
        editButton.classList.add('btn-primary')
        editButton.innerHTML = 'Edit'
        li.appendChild(editButton)
    }

    const createTodoTitle = () => {
        const value: string = document.getElementById('input').value;
        const todo = document.createElement('h3')
        todo.innerHTML = value
        li.appendChild(todo)
    }

    createTodoTitle()
    createEditButton()
    createDeleteButton()
    list.appendChild(li);
    document.getElementById('input').value = ''
}

form.addEventListener('submit' ,(e) => {
    e.preventDefault();
    createList();
})

