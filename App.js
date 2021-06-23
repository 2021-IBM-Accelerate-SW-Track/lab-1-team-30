import Header from "./component/header"
//No idea why the above line was imported. It does not seem to be accomplishing
//a whole lot.
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList'
import PinList from './PinList'
import uuidv4 from 'uuid/dist/v4'
function App() {
  const [events, setEvents] = useState([])
  const [pins, setPins] = useState([])
  const eventName = useRef()
  const pinName = useRef()
  const LOCAL_STORAGE_KEY = 'todoApp.events'
{/*Beginning of code needed in order to save the events.*/}
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (savedEvents) setEvents(savedEvents)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(events))
  }, [events])

{/*End of code needed for saving events*/}


  function toggleCompletion(id) {
    const newEvents = [...events]
    const item = newEvents.find(item => item.id === id)
    item.finished = !item.finished
    setEvents(newEvents)
  }

  function togglePin(id) {
    const newPins = [...events]
    const item = newPins.find(item => item.id === id)
    item.pinned = !item.pinned
    const nowPinned = events.filter(events => events.pinned)
    setPins(formerPin => {
      return [...formerPin, {id: uuidv4(), name: item.name, finished: false, pinned: true}]
    })
    setEvents(nowPinned)
  }

  function togglePinned(id) {
    const nowPinned = [...pins]
    const item = nowPinned.find(item => item.id === id)
    item.pinned = !item.pinned
    console.log(pins)
  }

  {/*<div>
  {people.filter(person =>
    person.age < 60).map(filteredPerson => (
    <li>
      {filteredPerson.name}
    </li>
  ))}
</div>*/}

  function eventGenerator(e) {
    const name = eventName.current.value
    if (name === '') return {/*Stops the user from just adding empty events.*/}
    setEvents(formerEvent => {
      return [...formerEvent, {id: uuidv4(), name: name, finished: false, pinned: false}]
      {/*I tried to give the 'name' property a different identifier called 'title'
      to try and make the code less error prone, but this did not work. All it
      did was cause the to do list items to disappear once they were entered.*/}
    })
    eventName.current.value = null
    {/*Erases the input field after you add an
      event.*/}
  }



  function eventDestructor(e) {
    const newEvents = events.filter(events => !events.finished)
    setEvents(newEvents)
  }


  //Change add task to a form

  return (
    <div>
      <PinList pins={pins} togglePinned={togglePinned} />
      <TodoList events={events} toggleCompletion={toggleCompletion} togglePin={togglePin} />
      {/*What's happening on this line is that a
      property called 'events' is being passed to the TodoList. The name 'events'
      on the left side of the '=' operand can be renamed to anything.*/}
      <form class="addTask">
        <input class = "inputField" ref={eventName} type="text" />
        <button class = "addButton" onClick={eventGenerator}>Add Event</button>
      </form>
      <button class = "removeButton" onClick={eventDestructor}>Remove Completed Events</button>
      <div class = "remainingItems" >{events.filter(events => !events.finished).length} items left.</div>
    </div>
  );
}

export default App;
