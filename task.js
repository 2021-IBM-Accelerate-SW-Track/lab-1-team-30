
export default function Task(){
    return (
        <div class="info-div">
            <div className="header">
                <p class="task-name"></p>
                    <form name="form">
                        <h2> Task Name</h2>
                        <input type="text" id = "name" name="name" placeholder="Task Name...">
                        </input>
                        <h2> Date</h2>
                        <input type="datetime-local" id="datetime" name="datetime"></input>
                        <h3> Add</h3>
                        <button onClick="newElement(this.form)">Add Task</button>
                    </form>
            <div class="tasksBoard">
                    <ul id="list">
                    <li>Task: <label>Clean Room</label> <br></br>Date Entered: <label>05/01/2014</label><br></br>Completed: <input type= "button"></input></li>
                    <li>Task: <label>Brush Teeth</label> <br></br>Date Entered: <label>06/02/2015</label><br></br>Completed: <input type= "button"></input></li>
                    <li>Task: <label>Do Homework</label> <br></br>Date Entered: <label>07/03/2016</label><br></br>Completed: <input type= "button"></input></li>
                    </ul>
                </div>
            </div>     
        </div>
    );
}
function showInput() {
    const task = document.getElementById('name');
    let firstvalue = `<li> ${task.value} </li>`;
    task.value = '';
    task.insertAdjacentHTML('beforeend', firstvalue);
}
function newElement(form) {

    var li = document.createElement("li");
    var task_name = document.getElementById("name").value;
    var t = document.createTextNode(task_name);
    li.appendChild(t);
    document.getElementById("list").appendChild(li); 
    //document.querySelector('ul').appendChild(li);
    document.form.name.value = "";
    showInput();
}