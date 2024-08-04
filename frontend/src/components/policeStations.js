// PoliceStations.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Register } from './Register';

export const PoliceStations = ({setstationAddress}) => {
    const [stations, setStations] = useState([]);
    // const [select,setSelect] = useState(null);

    useEffect(() => {
        const fetchStations = async () => {
            try {
                const response = await axios.get('http://localhost:5000/station');
                setStations(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchStations();
    }, []);

    const handleStationChange = (e) => {
        console.log(stations)
        const stationAdd = stations.filter((station,index) => station.stationName === e.target.value)[0].stationAccount;
        setstationAddress(stationAdd);
    }

    
    

    return (
        <div>
            {/* <Register stations={select.target.value}/> */}
            <label for="policeStations">Police Station</label>
            <select onChange={handleStationChange} 
                className="stations" 
                id="policeStations">
                {stations.map((station, index) => (
                    <option key={index} 
                        value={station.stationName}>
                        {station.stationName}
                    </option>
                ))}
            </select>
        </div>
    );
};


