import React, { useState } from 'react'

const TeamForm = ({ addNewTeamMember }) => {

	const [member, setMember] = useState({ name: "", role: "", email: ""})

	const handleChanges = event => {
		setMember({...member, [event.target.name]:event.target.value})
	}

	const submitForm = event => {
		event.preventDefault()
		const newMember = {...member, id: Date.now()}
		addNewTeamMember(newMember)
		setMember({ name: "", role: "", email: ""})
	}
	return(
		<form onSubmit={submitForm} className="card">
			<label htmlFor="name">Name</label>
			<input
				id="name"
				type="text"
				placeholder="Name"
				value={member.name}
				name="name"
				onChange={handleChanges}
				/>

			<label htmlFor="role">Role</label>
			<input
				id="role"
				placeholder="Add role"
				value={member.role}
				name="role"
				onChange={handleChanges}
				/>

			<label htmlFor="email">Email</label>
			<input
				id="email"
				placeholder="Add your email"
				value={member.email}
				name="email"
				onChange={handleChanges}
			/>

			<button type="submit">Add Team Member</button>
		</form>
	)
}

export default TeamForm