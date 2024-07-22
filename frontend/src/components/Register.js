import { PoliceStations } from "./policeStations";

export const Register = () => {
    
    return(
        <>
            <form>
                <div class="form-group">
                    <label for="suspectName">Suspect Name</label>
                    <input type="text" class="form-control" id="suspectName" required />
                    <label for="suspectContact">Suspect Contact(if known)</label>
                    <input type="text" class="form-control" id="suspectContact" required/>
                    <label for="suspectAddress">Suspect Address(if known)</label>
                    <input type="text" class="form-control" id="suspectAddress" />
                </div>
                
                <PoliceStations/>
                <div class="form-group">
                    <label for="incidentType">Incident Type</label>
                    <select class="form-control" id="incidentType">
                    <option value="theft">Theft</option>
                    <option value="physicalAssault">Physical Assault</option>
                    <option value="sexualAssault">Sexual Assault</option>
                    <option value="propertyDamage">Property Damage</option>
                    <option value="other">Other</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="incidentDetails">Incident Details</label>
                    <textarea class="form-control" id="incidentDetails" rows="3" required></textarea>
                </div>
                <div class="form-group">
                    <label for="suspectName">Incident Location</label>
                    <input type="text" class="form-control" id="incidentLocation" required/>
                </div>
                <div class="form-group">
                    <label for="userContact">Complainant Contact</label>
                    <input type="text" class="form-control" id="userContact" required/>
                </div>
                <button type="submit" class="btn btn-primary">Register FIR</button>
            </form>
        </>

    )
}
