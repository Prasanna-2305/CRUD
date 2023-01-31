import React from 'react'

function UserTable(props) {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((user,index) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    data-testid={`editRow-btn-${index}`}
                    onClick={() => {
                      props.editRow(user)
                    }}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>&nbsp;
                  <button 
                    data-testid={`delete-btn-${index}`}
                    onClick={() => props.deleteUser(user.id)}
                    className='btn btn-primary'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
export default UserTable