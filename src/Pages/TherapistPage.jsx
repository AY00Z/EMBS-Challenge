import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import './TherapistPage.css';
import Therapist from './therapist1.jpg';
import ReservationCard from '../Components/ReservationCard';

const TherapistPage = () => {
    const location = useLocation(); // Get the current route

    const patientData = {
        name: 'John Doe',
        phone: '+123 456 7890',
        email: 'john.doe@example.com',
        appointmentDate: '30/09/2023',
        scheduledDate: '25/09/2023',
    };

    return (
        <div className="therapist-container">
            {/* Sidebar */}
            <div className="therapist-sidebar">
                <div className="therapist-logo-container">
                    <img src={Therapist} className="therapist-logo-circle" alt="Therapist" />
                    <div className="therapist-info">
                        <h2 className="therapist-title">Therapist Name</h2>
                        <p className="therapist-id">ID: 123456</p>
                    </div>
                </div>
                <hr className="therapist-divider" />
                <ul className="therapist-menu">
                    {/* Highlight Reservations if current path is /ReservationPage */}
                    <li
                        className={`therapist-menu-item ${
                            location.pathname === '/ReservationPage' ? 'therapist-active' : ''
                        }`}
                    >
                        Reservations
                    </li>

                    {/* Highlight Dashboard if current path is /Dashboard */}
                    <li
                        className={`therapist-menu-item ${
                            location.pathname === '/Dashboard' ? 'therapist-active' : ''
                        }`}
                    >
                        Dashboard
                    </li>
                </ul>
            </div>

            {/* Main */}
            <div className="therapist-main">
                <h2 className="therapist-main-title">Reservation List:</h2>

                <ReservationCard
                    name={patientData.name}
                    phone={patientData.phone}
                    email={patientData.email}
                    appointmentDate={patientData.appointmentDate}
                    scheduledDate={patientData.scheduledDate}
                />
                <ReservationCard
                    name={patientData.name}
                    phone={patientData.phone}
                    email={patientData.email}
                    appointmentDate={patientData.appointmentDate}
                    scheduledDate={patientData.scheduledDate}
                />
                <ReservationCard
                    name={patientData.name}
                    phone={patientData.phone}
                    email={patientData.email}
                    appointmentDate={patientData.appointmentDate}
                    scheduledDate={patientData.scheduledDate}
                />
            </div>
        </div>
    );
};

export default TherapistPage;
