import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { deleteUser, getAllUsers } from "../redux/features/user.slice";

const Users = () => {
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();

    const moveRouter = (response) => {
        const getUsers = response?.data;
        setUsers(getUsers);
    };

    const successCallBack = () => {
        dispatch(getAllUsers({ successCallBack: moveRouter }));
    };

    useEffect(() => {
        dispatch(getAllUsers({ successCallBack: moveRouter }));
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteUser({ id, successCallBack }));
    };

    return (
        <div className="vh-100 d-flex align-items-center justify-content-center bg-primary">
            <div className="row w-100 justify-content-center">
                <div className="col-md-8 rounded shadow p-3 bg-white">
                    <Link to={'/create'} className="btn btn-success">Add + </Link>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length > 0 ? (
                                    users?.map((user) => {
                                        const { name, email, age, _id } = user;
                                        return (
                                            <tr key={_id}>
                                                <td>{name}</td>
                                                <td>{email}</td>
                                                <td>{age}</td>
                                                <td>
                                                    <Link to={`update/${_id}`} className="btn btn-warning me-2">Edit</Link>
                                                    <button className="btn btn-danger" onClick={() => handleDelete(_id)}>Delete</button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center">
                                            No Record found...
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
