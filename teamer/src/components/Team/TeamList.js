import React from 'react'
import { Col } from 'reactstrap'

const TeamList = props => {
	return (
		<>
		{props.members.map(member => (
	    <Col>
	      <div className="card" style={{margin: "10px"}}>
	        <h2>{member.name}</h2>
	        <h4>{member.role}</h4>
	        <p>{member.email}</p>
	      </div>          
	    </Col>
	    ))}
	    </>
	)
}

export default TeamList