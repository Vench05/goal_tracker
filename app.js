document.getElementById("submit-btn").addEventListener("click", addTask)
let myTasksUl = document.getElementById("my-tasks-ul")

function addTask() {
    const task = document.getElementById("task")
    const due = document.getElementById("due")
    const id = (new Date()).getTime()
    myTasksUl.innerHTML += `
    <li id=${id}>
        <div>
            <i class="fa fa-trash" onclick="deleteTask(${id})" ></i>
            <p> <strong>Task</strong> ${task.value} </p>
            <p> <strong>Due</strong> ${due.value} </p>
            <label for="done"> Done: </label>
            <input type="checkbox" onchange="completeTask(${id})" name="done">
        </div>
    </li>
    `

    due.value = ''
    task.value = ''

}


function completeTask(taskId) {
    const task = document.getElementById(taskId)
    if (!task.classList.contains('done')) { task.classList.add('done') }
    else { task.classList.remove('done') }
}


function deleteTask(taskId) {
    const task = document.getElementById(taskId)
    task.remove()
}
