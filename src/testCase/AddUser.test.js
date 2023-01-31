import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AddUser from '../AddUser';
import EditUserForm from '../EditUserForm'
import UserTable from '../UserTable';

describe('render of AddUser', () => {
    test('renders for addUser', () => {
        render(<AddUser />);
    });
    test('form submit with data', () => {
        render(<AddUser />);
        fireEvent.change(screen.queryByTestId("OnchangeName"), { target: { value: "name" } })
        fireEvent.change(screen.queryByTestId("OnchangeEmail"), { target: { value: "Email" } })
        fireEvent.click(screen.queryByTestId("add-user"))
    });
    test('form submit without data', () => {
        render(<AddUser />);
        fireEvent.click(screen.queryByTestId("add-user"))
    });

    test('when delete User', () => {
        render(<AddUser />);
        fireEvent.click(screen.queryByTestId("delete-btn-0"))
    });
    test('when update User', () => {
        const editing = true
        const setEditing = jest.fn()
        const mockData = [{
            name: "name",
            email: 'email'
        }]
        const id = 1
        const userData = {
            id: null,
            name: "name",
            email: 'email'
        }
        render(<EditUserForm editing={editing} currentUser={mockData} updateUser={jest.fn()} setEditing={setEditing} />);
        fireEvent.change(screen.queryByTestId("update-Name"), { target: { value: "name" } })
        fireEvent.change(screen.queryByTestId("update-Email"), { target: { value: "Email" } })
        fireEvent.click(screen.queryByTestId("update-User"))
        fireEvent.click(screen.queryByTestId("update-button"))
    });
    // test('when edit User', () => {
    //     const users = {
    //         id: 1,
    //         name: "name",
    //         email: "email"
    //     }
    //     const editRow = jest.fn()
    //     // const deleteUser = jest.fn()
    //     render(<UserTable users={users} editRow={editRow} />);
    //     fireEvent.click(screen.queryByTestId("update-button"))

    // });
    test('when editRow User', () => {
        render(<AddUser />);
        const users = {
            id: 1,
            name: "name",
            email: "email"
        }
        const editRow = jest.fn()
        render(<UserTable users={users} editRow={editRow} />);
        fireEvent.click(screen.queryByTestId("editRow-btn-0"))
    });

})


