import Header from "./component/header"
import Task from "./component/Task"
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Add';
import './App.css';

function App() {

  var obj1 = {name: "task 1 qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm", date:"05/04/20", status:"complete", isPinned:true}
  var obj2 = {name: "task 2", date:"01/01/01", status:"complete", isPinned:false}
  var obj3 = {name: "task 3", date:"99/99/99", status:"incomplete", isPinned:false}

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
