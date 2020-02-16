import React, { useState, useEffect } from "react"
import "../styles/room-finder.scss"

import DateRangeInput from "./date-range-input"

const RoomFinder = ({
  booking,
  setBooking,
  onSubmitFind,
  setOnSubmitFind,
  setFilteredRooms,
  findRoom,
}) => {
  const [toggleRoomFinder, setToggleRoomFinder] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setOnSubmitFind("FINDING")
    console.log("==== SUBMITTED TRUE =====")
  }

  return (
    <>
      {toggleRoomFinder ? (
        <section className="form-container">
          <div className="col close-form-finder">
            <button onClick={() => setToggleRoomFinder(!toggleRoomFinder)}>
              Close
            </button>
          </div>
          <form className="form-room-finder" action="" onSubmit={handleSubmit}>
            <div className="col date">
              <h5>Date</h5>
              <DateRangeInput
                booking={booking}
                setBooking={setBooking}
                onSubmitFind={onSubmitFind}
              />
            </div>
            <div className="col adults">
              <h5>Adults</h5>
              <div className="inc-dec-container">
                <button
                  onClick={e => {
                    e.preventDefault()
                    setBooking({ ...booking, adults: booking.adults - 1 })
                  }}
                >
                  -
                </button>
                <input type="number" value={booking.adults} readOnly />
                <button
                  onClick={e => {
                    e.preventDefault()
                    setBooking({ ...booking, adults: booking.adults + 1 })
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="col children">
              <h5>Children</h5>
              <div className="inc-dec-container">
                <button
                  onClick={e => {
                    e.preventDefault()
                    setBooking({ ...booking, children: booking.children - 1 })
                  }}
                >
                  -
                </button>
                <input type="number" value={booking.children} readOnly />
                <button
                  onClick={e => {
                    e.preventDefault()
                    setBooking({ ...booking, children: booking.children + 1 })
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <button className="find-room-btn" type="submit">
              Find Room
            </button>
          </form>
        </section>
      ) : (
        <section
          className="room-finder-btn"
          onClick={() => setToggleRoomFinder(!toggleRoomFinder)}
        >
          {/*  <img src={ArrowIcon} alt="" /> */}
          <button>Find a Room</button>
        </section>
      )}
      <form
        className="form-room-finder-desktop"
        onSubmit={handleSubmit}
        action=""
      >
        <div className="col date">
          <h5>Date</h5>
          <DateRangeInput booking={booking} setBooking={setBooking} />
        </div>
        <div className="col adults">
          <h5>Adults</h5>
          <div className="inc-dec-container">
            <button
              onClick={e => {
                e.preventDefault()
                setBooking({ ...booking, adults: booking.adults - 1 })
              }}
            >
              -
            </button>
            <input type="number" value={booking.adults} readOnly></input>
            <button
              onClick={e => {
                e.preventDefault()
                setBooking({ ...booking, adults: booking.adults + 1 })
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="col children">
          <h5>Children</h5>
          <div className="inc-dec-container">
            <button
              onClick={e => {
                e.preventDefault()
                setBooking({ ...booking, children: booking.children - 1 })
              }}
            >
              -
            </button>
            <input type="number" value={booking.children} readOnly></input>
            <button
              onClick={e => {
                e.preventDefault()
                setBooking({ ...booking, children: booking.children + 1 })
              }}
            >
              +
            </button>
          </div>
        </div>
        <button className="find-room-btn" type="submit">
          Find Room
        </button>
      </form>
    </>
  )
}

export default RoomFinder
