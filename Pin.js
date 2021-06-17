import React from 'react'

export default function Pin({pins, togglePinned}) {

  function handlePinned() {
    togglePinned(pins.id)
  }

  return(
    <div>
      <label class = "pinBox">
        <input type="checkbox" checked={pins.pinned} onChange={handlePinned} />
        {pins.name}
      </label>
    </div>
  )
}
