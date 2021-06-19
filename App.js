import Task from "./component/Task"


import './App.css';
function App() {
  return (
    <div className="App">
    <Task/>
    </div>
  );
}
function newElement() {
  var tname = document.getElementById('tname').value;
  document.getElementById('tasklist').innerHTML = tname;
  var node=document.createElement("LI");
  var textnode=document.createTextNode(tname);
  node.appendChild(textnode);
  document.getElementById("demo").appendChild(node);
}
export default App 
