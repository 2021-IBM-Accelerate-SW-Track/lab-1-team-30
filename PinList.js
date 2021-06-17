import React from 'react'

import Pin from './Pin'

export default function PinList({pins, togglePinned}) {
  return (
    pins.map(pins => {
      return <Pin key={pins.id} togglePinned={togglePinned} pins={pins} />
    })
  )
}
