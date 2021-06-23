import React from 'react'

export default function Event({events, pins, toggleCompletion, togglePin}) {

  function handlePin() {
    togglePin(events.id)
  }

  function handleEventClick() {
    toggleCompletion(events.id)
  }

  //Where is the checkbox
  return(
    <div>
      <label class = "eventBox">
        <input type="checkbox" checked={events.finished} onChange={handleEventClick}/>
        <input type="checkbox" checked={events.pinned} onChange={handlePin}/>
        {events.name}
      </label>
    </div>
  )
}


{/*NOTE TO SELF: Double tripe quadruple quintuple sextuple septuple check for
  spelling errors. Tattoo it to your forehead or legally change your name to
  'Check F. SpellingErrors', something! Stop making silly mistakes that set
  you back three hours!*/}
