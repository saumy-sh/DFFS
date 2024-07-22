// PoliceStations.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const PoliceStations = () => {
    const [stations, setStations] = useState([]);

    useEffect(() => {
        const fetchStations = async () => {
            try {
                const response = await axios.get('http://localhost:5000/station');
                setStations(response.data);
                console.log(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchStations();
    }, []);

    return (
        <div>
            <label for="policeStations">Police Station</label>
            <select className="stations" id="policeStations">
                {stations.map((station, index) => (
                    <option key={index} value={station.stationAccount}>
                        {station.stationName}
                    </option>
                ))}
            </select>
        </div>
    );
};


