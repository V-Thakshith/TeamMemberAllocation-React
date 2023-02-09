import './App.css';
import Header from './Header'
import Footer from './Footer';
import Employee from './Employess';
import GroupedTeamMembers from './GroupedTeamMembers';
import { useState,useEffect } from "react"
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Nav from './Nav';
import NotFound from './NotFound';

function App() {
  const [selectedTeam,setTeam]=useState(JSON.parse(localStorage.getItem('selectedTeam')) ||"TeamB")

    const [employees,setEmployees]=useState(JSON.parse(localStorage.getItem('employeeList')) || [{
        id:1,
        fullName:"Bob Jones",
        desgination:"Javascript developer",
        gender:"male",
        teamName:"TeamA"
    },{
        id:2,
        fullName:"Kim Wexler",
        desgination:"Java",
        gander:"female",
        teamName:"TeamB"
    },{
        id:3,
        fullName:"Saul Goodman",
        desgination:"React",
        gender:"male",
        teamName:"TeamB"
    },{
        id:4,
        fullName:"John Jones",
        desgination:"Javascript developer",
        gender:"male",
        teamName:"TeamA"
    },{
        id:5,
        fullName:"Tina Wexler",
        desgination:"Java",
        gander:"female",
        teamName:"TeamC"
    },{
        id:6,
        fullName:"Jessy K",
        desgination:"React",
        gender:"male",
        teamName:"TeamD"
    }])

    useEffect(()=>{
      localStorage.setItem('employeeList',JSON.stringify(employees));
    },[employees])

    useEffect(()=>
      {localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam));}
    ,[selectedTeam])

    function handleTeamSelectionChanges(event){
        console.log(event.target.value);
        setTeam(event.target.value);
    }

    function handleEmployeeCardClick(event){
        const transformedEmployees=employees.map((employee)=>employee.id===parseInt(event.currentTarget.id)?(employee.teamName===selectedTeam)?{...employee,teamName:''}:{...employee,teamName:selectedTeam}:employee);
        setEmployees(transformedEmployees)
    }

  return (
    <main>
      <Router>
        <Nav/>
      <Header selectedTeam={selectedTeam}
        teamMemberCount={employees.filter((employee)=>employee.teamName===selectedTeam).length}
      />
      <Routes>
        <Route path='/'
        element={<Employee employees={employees}
        selectedTeam={selectedTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
        handleTeamSelectionChanges={handleTeamSelectionChanges}
        />}>
        </Route>
        <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employees={employees}
          selectedTeam={selectedTeam} setTeam={setTeam}
        />}></Route>  
        <Route path='*' element={<NotFound/>}></Route>    
      </Routes>
      <Footer/>
      </Router>
    </main>
  );
}

export default App;
