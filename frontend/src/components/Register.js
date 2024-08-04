import { useEffect, useState } from "react";
import { PoliceStations } from "./policeStations";
import axios from 'axios';

export const Register = ({stations}) => {
    const [formData, setFormData] = useState({
        stationName:'',
        stationAddress:'',
        complainantAddress:'',
        suspectName:'',
        suspectContact:'',
        suspectAddress:'',
        incidentType:'',
        incidentDetail:'',
        incidentLocation:''
    });
    const [status,setStatus] = useState("")
    const [stationAddress,setstationAddress] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const response = await axios.post('http://localhost:5000/user', formData)
            
            console.log(response.data);
            setStatus("Fir registered successfully")
            // Handle success (e.g., redirect to login page)
        } catch (err) {
            console.error(err);
            setStatus("An error occurred!")
        }
    };
    // const [register,setRegister] = useState(false);
    // useEffect((e) => {
    //     handleRegister(e)
    // },[register])
    return(
        <>
            <form onSubmit={handleRegister}>
                <div class="form-group">
                    <label for="suspectName">Suspect Name</label>
                    <input value={formData.suspectName}
                        onChange={handleChange} 
                        type="text" class="form-control" 
                        name="suspectName" required 
                    />
                    <label for="suspectContact">Suspect Contact(if known)</label>
                    <input value={formData.suspectContact}
                        onChange={handleChange} 
                        type="text" 
                        class="form-control" 
                        name="suspectContact" required
                    />
                    <label for="suspectAddress">Suspect Address(if known)</label>
                    <input value={formData.suspectAddress}
                        onChange={handleChange} 
                        type="text" 
                        class="form-control" 
                        name="suspectAddress" 
                    />
                </div>
                
                <PoliceStations setstationAddress={setstationAddress}/>

                <div class="form-group">
                    <label for="stationAddress">Station Address</label>
                    <input value={stationAddress}
                        onChange={handleChange} 
                        type="text" 
                        class="form-control"
                        // placeholder={stations[1]} 
                        name="stationAddress" required disabled
                    />
                </div>
                
                <div class="form-group">
                    <label for="incidentType">Incident Type</label>
                    <select value={formData.incidentType}
                        onChange={handleChange} 
                        class="form-control" 
                        name="incidentType">
                        <option value="theft">Theft</option>
                        <option value="physicalAssault">Physical Assault</option>
                        <option value="sexualAssault">Sexual Assault</option>
                        <option value="propertyDamage">Property Damage</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="incidentDetail">Incident Details</label>
                    <textarea value={formData.incidentDetail}
                        onChange={handleChange} 
                        class="form-control" 
                        name="incidentDetail" 
                        rows="3" required
                    />

    
                </div>
                <div class="form-group">
                    <label for="incidentLocation">Incident Location</label>
                    <input value={formData.incidentLocation}
                        onChange={handleChange} 
                        type="text" 
                        class="form-control" 
                        name="incidentLocation" required
                    />
                </div>
                {/* <div class="form-group">
                    <label for="userContact">Complainant Contact</label>
                    <input value={formData.u}
                        onChange={handleChange} 
                        type="text" 
                        class="form-control" 
                        id="userContact" required
                    />
                </div> */}
                <div class="form-group">
                    <label for="complainantAddress">Complainant Address</label>
                    <input value={formData.complainantAddress}
                        onChange={handleChange} 
                        type="text" 
                        class="form-control" 
                        id="complainantAddress" required
                    />
                </div>
                {status && <p style={{ color: 'red' }}>{status}</p>}

                <button type="submit" class="btn btn-primary">Register FIR</button>

            </form>

        </>

    )
}
