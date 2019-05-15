import React from "react"
import AddToCalendar from "react-add-to-calendar"
import "./index.scss"

let event = {
  title: "Sample Event",
  description: "This is the sample event provided as an example only",
  location: "Casablanca",
  startTime: "2016-09-16T20:15:00-04:00",
  endTime: "2016-09-16T21:45:00-04:00",
}

export default () => {
  return <AddToCalendar event={event} />
}

/* <a  target="_blank" className="button outline">
      Add to Calendar
</a> */
