import React from "react";
import { OperatingHours } from "./index";

export const DataDrivenOperatingHours = (props) => {
  const { hours } = props

  if (!hours.length) {
    return (
      <div>
        No hours Listed, if you are the admin please configure your hours
      </div>
    )
  }

  return (
    <OperatingHours.List hours={hours}>
      {(item, index) => {

        if (item.isClosed) {
          return (
            <OperatingHours.Item>
              {item.day} Closed
            </OperatingHours.Item>
          )
        }

        debugger

        if (item.twentyFourHours) {
          return (
            <OperatingHours.Item>
              <OperatingHours.TwentyFourHours start={item.day} end={item.closeTime} />
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
