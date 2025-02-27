import React from "react";

export default function SeatGrid({ seats, selectedSeats, handleSelect }) {
    return (
        <div className="seat-grid">
            {seats.map((row, rowIndex) => (
                <div key={rowIndex} className="seat-row">
                    {row.map((seat) => (
                        <button
                        key={seat.id}
                        className={`seat ${seat.type} ${selectedSeats.includes(seat.id) ? "selected" : ""}`}
                        onClick={() => handleSelect(seat)}
                        >
                            {seat.id}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}
