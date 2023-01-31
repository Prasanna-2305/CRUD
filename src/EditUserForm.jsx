import React, { useState, useEffect } from 'react'

function EditUserForm(props) {
    const [user, setUser] = useState(props.currentUser)

    useEffect(
        () => {
            setUser(props.currentUser)
        },
        [props]
    )
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                props.updateUser(user.id, user)
            }}
        > 
            <input data-testid="update-Name" type="text" name="name" value={user.name} onChange={handleInputChange} />&nbsp;    
            <input data-testid="update-Email" type="text" name="email" value={user.email} onChange={handleInputChange} />&nbsp;
            <button className='btn btn-info'  data-testid="update-User" >Update</button>&nbsp;
            <button data-testid="update-button" onClick={() => props.setEditing(false)} className="btn btn-info">
                Cancel
            </button>
        </form>
    )
}

export default EditUserForm