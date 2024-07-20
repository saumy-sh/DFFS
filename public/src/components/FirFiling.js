export const FirFiling = () => {
    return(
        <>
            <body>
            <h1>FIR Registration</h1>
            <form>
                <div>
                <label for="name">Your Name:</label>
                <input type="text" id="name" name="name" required/>
                </div>
                <div>
                <label for="contact">Contact Number:</label>
                <input type="tel" id="contact" name="contact" required/>
                </div>
                <div>
                <label for="incident_type">Incident Type:</label>
                <select id="incident_type" name="incident_type" required>
                    <option value="">Select</option>
                    <option value="theft">Theft</option>
                    <option value="assault">Physical Assault</option>
                    <option value="assault">Sexual Assault</option>
                    <option value="property_damage">Property Damage</option>
                    <option value="other">Other</option>
                </select>
                </div>
                <div>
                <label for="incident_details">Incident Details:</label>
                <textarea id="incident_details" name="incident_details" rows="5" required></textarea>
                </div>
                <div>
                <label for="location">Location of Incident:</label>
                <input type="text" id="location" name="location" required/>
                </div>
                <button type="submit">Register FIR</button>
            </form>
            </body>
        </>

    )
}