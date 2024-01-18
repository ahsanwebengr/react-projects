import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);
    const baseURL = import.meta.env.VITE_BASE_URL;

    const getUsers = async () => {
        await axios.get(`${baseURL}`)
            .then((response) => setUsers(response.data.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getUsers();
    }, []);

    const handleDelete = (id) => {
        axios.delete(`${baseURL}/deleteUser/${id}`)
            .then((response) => {
                console.log(response.data);
                getUsers();
                alert('User deleted successfully');
            })
            .catch((error) => console.log(error));
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
                                {users?.map((user) => {
                                    const { name, email, age, _id } = user;
                                    return <tr key={_id}>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{age}</td>
                                        <td>
                                            <Link to={`update/${_id}`} className="btn btn-warning me-2">Edit</Link>
                                            <button className="btn btn-danger" onClick={() => handleDelete(_id)}>Delete</button>
                                        </td>
                                    </tr>;
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Users;
