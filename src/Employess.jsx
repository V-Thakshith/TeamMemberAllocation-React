
import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'


const Employee=({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChanges})=>{
    
    return(
        <main className="container">
            <div class="row justify-content-center mt-3 mb-3">
                <div class="col-6">
                    <select class="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChanges}>
                        <option value="TeamA">Team A</option>
                        <option value="TeamB">Team B</option>
                        <option value="TeamC">Team C</option>
                        <option value="TeamD">Team D</option>
                    </select>
                </div>
            </div>
            <div class="row d-flex justify-content-center mt-3 mb-3">
                <div class="col-8">
                    <div class="card-collection">
                        {
                            employees.map((employee) => (
                                
                                <div id={employee.id} className={(employee.teamName ===selectedTeam?'card m-2 standout':'card m-2')} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
                                    {(employee.gender==='male')?<img src={maleProfile} className="card-img-top"></img>:<img src={femaleProfile} className="card-img-top"></img>}
                                    <div className="card-body">
                                        <h3 className="card-title">Full name: {employee.fullName}</h3>
                                        <p className="card-text"><b>Designation:</b> {employee.desgination}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Employee