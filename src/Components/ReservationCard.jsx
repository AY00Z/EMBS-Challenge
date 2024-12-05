import React from 'react';
import './ReservationCard.css';

const ReservationCard = () => {
    return (
        <div>
            {/* Reservation Card */}
            <div className="reservation-card">
                {/* Reservation Info */}
                <div className="reservation-info">
                    <div className="reservation-details">
                        <h2 className="reservation-section-title">Patient Information</h2>
                        <p>Name: John Doe</p>
                        <p>Mobile Phone: +123 456 7890</p>
                        <p>Email Address: john.doe@example.com</p>
                        <p>Appointment Date: 30/09/2023</p>
                    </div>
                </div>
                {/* Accept Button */}
                <div className="reservation-button-container">
                    <button className="reservation-accept-button">Accept Invitation</button>
                </div>
            </div>
        </div>
    );
};

export default ReservationCard;
