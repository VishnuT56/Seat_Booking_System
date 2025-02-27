import { useState, useEffect } from "react";
import SeatGrid from "./SeatGrid";
import BookingSummary from "./BookingSummary";
import "./style.css";

const ROWS = 6;
const COLS = 10;
const PRICING = { silver: 100, gold: 150, platinum: 200 };
const MAX_SELECTION = 8;

const getSeatType = (row) => (row < 2 ? "silver" : row < 4 ? "gold" : "platinum");

const generateSeats = () =>
  Array.from({ length: ROWS }, (_, rowIndex) =>
    Array.from({ length: COLS }, (_, colIndex) => ({
      id: `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`,
      type: getSeatType(rowIndex),
      price: PRICING[getSeatType(rowIndex)],
    }))
);

export default function SeatBooking() {
    const [seats] = useState(generateSeats());
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        setTotalCost(
            selectedSeats.reduce((acc, id) => acc + seats.flat().find((seat) => seat.id === id).price, 0)
        );
    }, [selectedSeats, seats]);

    const handleSelect = (seat) => {
        setSelectedSeats((prev) =>
            prev.includes(seat.id)
        ? prev.filter((s) => s !== seat.id)
        : prev.length < MAX_SELECTION
        ? [...prev, seat.id]
        : (alert("You can only select up to 8 seats"), prev)
        );
    };

    return (
        <div className="container">
            <h1 className="title">Interactive Seat Booking</h1>
            <SeatGrid seats={seats} selectedSeats={selectedSeats} handleSelect={handleSelect} />
            <BookingSummary selectedSeats={selectedSeats} totalCost={totalCost} handleBooking={() => alert("Booking Confirmed!")} />
        </div>
    );
}
