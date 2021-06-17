import './task.css';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Pin from '@material-ui/icons/PinDrop';


export default function Task(props){
    const statusColorList = ["green", "yellow", "red"]
    let currentColor = 0;

    function changeColor() {
        if (currentColor === 2){
            currentColor = 0;
        } else {
            currentColor ++;
        }
        document.querySelector('#status').lastElementChild.style.backgroundColor = statusColorList[currentColor]
    }

    return (
        <div class={`outer-task-div ${props.isPinned ? "pinned" : ""}`}>
            <div class="info-div">
                <p class="task-name"> {props.name} </p>
                <p class="task-date"> {props.date} </p>
                <p id="status" class="task-status"> Status <button onClick={changeColor} class="status-bar"></button></p>
                
            </div>
            <div class="buttons-div">
                <IconButton aria-label="delete">
                    <Edit />
                </IconButton>
                <IconButton aria-label="delete">
                    <Pin />
                </IconButton>
                <IconButton aria-label="delete">
                    <Delete />
                </IconButton>
            </div>
        </div>
    );
}