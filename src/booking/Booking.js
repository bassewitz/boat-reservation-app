import React, { useState } from 'react'

export default function Booking(props) {
  const [bookingDate, setBookingDate] = useState('')
  const [boats, setBoats] = useState([
    {
      name: 'Max',
      bookedDates: ['2019-03-02', '2019-03-03', '2019-03-04', '2019-03-05'],
    },
    { name: 'Moritz', bookedDates: '2019-03-02' },
    { name: 'Mosquito', bookedDates: '2019-03-02' },
  ])

  const changeDate = e => {
    setBookingDate(e.target.value)
  }

  return (
    <React.Fragment>
      <h1>Waehle ein Datum</h1>
      <input type="date" value={bookingDate} onChange={changeDate} />
      {bookingDate ? (
        <div>
          <h1>Freie Boote am: {bookingDate}</h1>
          <ul>
            {boats
              .filter(boat => !boat.bookedDates.includes(bookingDate))
              .map(boat => {
                return <li key={boat.name}>{boat.name}</li>
              })}
          </ul>
        </div>
      ) : null}
    </React.Fragment>
  )
}
