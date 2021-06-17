import React from 'react'
import Event from './Event';{/*Making sure to import the 'event' function.*/}


{/*I am not exactly sure what some of these keywords mean yet, so I will have
to study them later.*/}
export default function TodoList({events, pins, toggleCompletion, togglePin}) {
  return (
    events.map(events => {
      return <Event key={events.id} toggleCompletion={toggleCompletion} togglePin={togglePin} events={events} />
    })
  )
}
{/*The purpose of having the key inside of the events.map() function is
  because, according to the compiler, every element in the array needs
  to have a key property. The code still runs if it is not there, but the
  bug will also exist. The bug in question causes React to not know how to
  update the array properly.*/}
