import React from "react";

export const OperatingHoursList = (props) => {
  return (
    <div>
      Clinic Hours:
      <ul>
        {
          props.hours.map((hour, index) => {
            return props.children(hour, index)
          })
        }
      </ul>
    </div>
  )
}
