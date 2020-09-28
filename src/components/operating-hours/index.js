import React from "react";
import {OperatingHoursList} from './list'
import {TwentyFourHours} from './twenty-four-hours'
import {OperatingHoursItem} from './item'
import {SpecialHour} from './special-hour'
import {Format} from './format'

export const DataDrivenOperatingHours = (props) => {

  return (
    <div>
      {props.children([])}
    </div>
  )
}

export const OperatingHours = {
  List: OperatingHoursList,
  TwentyFourHours,
  Item: OperatingHoursItem,
  SpecialHour,
  Format
}