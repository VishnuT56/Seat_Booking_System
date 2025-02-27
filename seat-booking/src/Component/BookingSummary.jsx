import React from "react";

export default function BookingSummary({ selectedSeats, totalCost, handleBooking }) {
    return (
        <div className="summary">
            <h2>Booking Summary</h2>
            <p>Selected Seats: {selectedSeats.join(", ") || "None"}</p>
            <p className="total">Total: ₹{totalCost}</p>
            <button className="book-btn" onClick={handleBooking} disabled={selectedSeats.length === 0}>
                Book Now
            </button>
        </div>
    );
}
