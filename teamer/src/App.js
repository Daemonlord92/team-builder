import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Route } from 'react-router-dom'
import axios from 'axios';

import './App.css';

import TeamList from './components/Team/TeamList.js'
import TeamForm from './components/Team/TeamForm.js'

function App() {
  const [teamList, setTeamList] = useState([])

  const addNewTeamMember = member => {
    const newMember = {
      name: teamList.name,
      role: teamList.role,
      email: teamList.email
    }
    setTeamList([...teamList, newMember])
  }

  useEffect(() => {
      const getTeam = () => {
        axios
          .get('http://localhost:3000/team')
          .then(response => {
            console.log(response.data)
            setTeamList(response.data)
          })
          .catch(error => {
            console.log('Server Error', error)
          })
      }
      getTeam()
    }, [])

  return (
    <Container>
      <div style={{margin: "30px"}}>
        <Row>
          <TeamForm addNewTeamMember={addNewTeamMember} />
        </Row>

        <Row>
           
          <Route path="/">
            <TeamList members={teamList} />
          </Route>
        
        </Row>
      </div>
    </Container>
  );
}

export default App;
