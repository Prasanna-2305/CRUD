import React, { useState, useEffect } from 'react'

function EditUserForm(props) {
    const [user, setUser] = useState(props?.currentUser)

    useEffect(
        () => {
            setUser(props?.currentUser)
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
        
            <input data-testid='updateName' type="text" name="name" value={user.name} onChange={handleInputChange} />&nbsp;    
            <input data-testid='updateEmail' type="text" name="email" value={user.email} onChange={handleInputChange} />&nbsp;
            <button data-testid='update' className='btn btn-info'>Update</button>&nbsp;
            <button data-testid="cancel" onClick={() => props.setEditing(false)} className="btn btn-info">
                Cancel
            </button>
        </form>
    )
}

export default EditUserForm