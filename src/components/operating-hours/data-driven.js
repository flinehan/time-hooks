import React from "react";
import { OperatingHours } from "./index";

export const DataDrivenOperatingHours = (props) => {
  const { hours } = props

  if (!hours.length) {
    return (<div>No hours Listed</div>)
  }

  return (
    <OperatingHours.List hours={hours}>
      {(item, index) => {

        if (item.closed) {
          return (
            <OperatingHours.Item>
              Closed
            </OperatingHours.Item>
          )
        }

        if (item.twentyFourHours) {
          return (
            <OperatingHours.Item>
              <OperatingHours.TwentyFourHours start={item.start} end={item.end} />
            </OperatingHours.Item>
          )
        }

        if (item.specialHour) {
          return (
            <OperatingHours.Item>
              <OperatingHours.SpecialHour>
                <OperatingHours.Format hours={item} />
              </OperatingHours.SpecialHour>
            </OperatingHours.Item>

          )
        }

        return (
          <OperatingHours.Item>
            <OperatingHours.Format hours={item} />
          </OperatingHours.Item>
        )
      }}
    </OperatingHours.List>
  );
}
