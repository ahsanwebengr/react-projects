import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserCreate = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/createUser', { name, email, age })
            .then((response) => {
                if (response.status === 200) {
                    alert('Success');
                    navigate('/');
                    console.log(response.data);
                } else {
                    alert('Error');
                }
            }).catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="vh-100 d-flex align-items-center justify-content-center bg-primary">
            <div className="row w-100 align-items-center justify-content-center">
                <div className="col-md-5 bg-white shadow rounded p-3">
                    <h2 className="mb-2">Add User</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} id="name" placeholder="Enter Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} id="email" placeholder="Enter Email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input type="number" className="form-control" value={age} onChange={e => setAge(e.target.value)} id="age" placeholder="Enter Age" />
                        </div>

                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserCreate;
