import React from "react";

import { OperatingHours } from "../../components/operating-hours";

export default function Time() {

  const fakeTheHours = [
    {
      "start": "monday",
      "end": "thursday",
      "open": "7:00:00 EST",
      "close": "20:00:00 EST",
      "twentyFourHours": false,
      "specialHour": false
    },
    {
      "start": "friday",
      "end": "saturday",
      "open": null,
      "close": null,
      "twentyFourHours": true,
      "specialHour": false
    },
    {
      "start": "sunday",
      "end": null,
      "open": "6:00:00 EST",
      "close": "17:00:00 EST",
      "twentyFourHours": false,
      "specialHour": false
    }
  ]

  return (
    <OperatingHours.List hours={fakeTheHours}>
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