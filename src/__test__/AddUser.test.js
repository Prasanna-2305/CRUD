import { fireEvent, render, screen } from "@testing-library/react";
import AddUser from "../AddUser";
import EditUserForm from "../EditUserForm";
import UserTable from "../UserTable";

describe('render the Adduser', () => {
    test('render the component ', () => {
        render(<AddUser />)
    });

    test('onSubmiting form with value', () => {
        render(<AddUser />);
        fireEvent.change(screen.queryByTestId('name'), { target: { value: 'name' } })
        fireEvent.change(screen.queryByTestId('email'), { target: { value: 'email' } })
        fireEvent.click(screen.queryByTestId('click'))
    });

    test('onSubmiting fowm without value', () => {
        render(<AddUser />);
        fireEvent.click(screen.queryByTestId('click'))
    });

    test('on delete data', () => {
        render(<AddUser />)
        fireEvent.click(screen.queryByTestId('delete-btn-1'))
    });

    test('update user', () => {
        const editing = false
        const setEditing = jest.fn();

        const mockData = [{
            name: "name",
            email: "email"
        }]
        const id = 1

        const userData = {
            id : null,
            name: "name",
            email : "email"
        }
        render(<EditUserForm editing={editing} currentUser={mockData} updateUser={jest.fn()} setEditing={setEditing} />)
        fireEvent.change(screen.queryByTestId('updateName'), { target: { value: 'name' } })
        fireEvent.change(screen.queryByTestId('updateEmail'), { target: { value: 'name' } })
        fireEvent.click(screen.queryByTestId('update'))
        fireEvent.click(screen.queryByTestId('cancel'))
    });

    test('edit user', () => {
        render(<AddUser />)
        const users = {
            id: 1,
            name: "name",
            email: "email"
        }
        const editUser = jest.fn();
        render(<UserTable users={users} editUser={editUser}/>)
        fireEvent.click(screen.queryByTestId('edit-btn-1'))
    })
})
