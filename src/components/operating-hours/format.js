import React from "react";

export const Format = (props) => {
  const {start, open, close} = props.hours

  return (
    <div>
      {start} {open} - {close}
    </div>
  )
}