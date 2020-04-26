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
      Hello
    </Container>
  );
}

export default App;
