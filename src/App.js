import Header from "./component/header"
import Task from "./component/Task"
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Add';
import './App.css';

function App() {

  var obj1 = {name: "Finish Lab 1", date:"06/21/21", status:"complete", isPinned:true}
  var obj2 = {name: "Go on a run", date:"06/25/21", status:"complete", isPinned:false}
  var obj3 = {name: "Apply for a scholaraship", date:"09/01/21", status:"incomplete", isPinned:false}

  const listItems = [obj1, obj2, obj3];

  return (
    <div className="App">
      {listItems.map((item, index) =>
              <Task number={index} isPinned={item.isPinned} name={item.name} date={item.date} status={item.status}/>
      )}
      <div class = "add-bar">
          <button aria-label="delete">
            <Delete/>
            <p> Add a new task</p>
          </button>
      </div>
    </div>
  );
}

export default App;
