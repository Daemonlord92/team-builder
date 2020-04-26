import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'reactstrap';
import axios from 'axios';

import './App.css';

function App() {
  const [teamList, setTeamList] = useState([])

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
      <Row>
        {teamList.map(member => (
          <Col>
            <div className="card">
              <h2>{member.name}</h2>
              <h4>{member.role}</h4>
              <p>{member.email}</p>
            </div>          
          </Col>
          ))}
      </Row>
    </Container>
  );
}

export default App;
