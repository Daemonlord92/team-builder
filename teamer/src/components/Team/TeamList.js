import React from 'react'

const TeamList = prop => {
	return (
			<Col>
        <div className="card">
          <h2>{member.name}</h2>
          <h4>{member.role}</h4>
          <p>{member.email}</p>
        </div>          
      </Col>
		)
}