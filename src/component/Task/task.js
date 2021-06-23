import './task.css';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Pin from '@material-ui/icons/PinDrop';


export default function Task(props){
    const statusMessageList = ["Not Started", "In Progress", "Complete"];
    const statusColorList = ["green", "yellow", "red"];
    let index = 0;

    function changeColor() {
        if (index === 2){
            index = 0;
        } else {
            index ++;
        }

        //Should select based on list element/index. Not Last Element
        //Instead of bar, make it a border color. And you can tap the div element

        //Shouldn't be based on ID (only one element). Need to make it for each index element
        document.getElementById("status").innerHTML = "Status: " + statusMessageList[index];
        //document.getElementById("info").style.borderColor = statusColorList[index];
        //change border of pressed area
    }

    //Status bar is not clear that it's a button. Also, only updates top one because it's base on lastChild and not element in list
    return (
        <div class={`outer-task-div ${props.isPinned ? "pinned" : ""}`}>
            <div class="info-div" id="info" onClick={changeColor}>
                <p class="task-name"> {props.name} </p>
                <p class="task-date"> {props.date} </p>
                <p class="task-status" id="status">Status: </p>
                
            </div>
            <div class="buttons-div">
                <IconButton aria-label="edit">
                    <Edit/>
                </IconButton>
                <IconButton aria-label="pin">
                    <Pin/>
                </IconButton>
                <IconButton aria-label="delete">
                    <Delete/>
                </IconButton>
            </div>
        </div>
    );
}