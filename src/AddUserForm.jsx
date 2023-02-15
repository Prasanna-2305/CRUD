import React, { useState } from 'react'

function AddUserForm(props) {
  const initialFormState = { id: null, name: '', email: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.email) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <input data-testid="name" type="text" name="name" placeholder='Name' value={user.name}  onChange={handleInputChange} /> &nbsp;
      <input data-testid='email' type="text" name="email" placeholder='Email' value={user.email} onChange={handleInputChange} /> &nbsp;
      <button data-testid='click' className='btn btn-primary'>Add user</button>
    </form>
  )
}

export default AddUserForm