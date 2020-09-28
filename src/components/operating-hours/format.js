import React from "react";

export const Format = (props) => {
  const {day, openTime, closeTime} = props.hours

  return (
    <div>
      {day} {openTime} - {closeTime}
    </div>
  )
}