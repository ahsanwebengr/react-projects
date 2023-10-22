import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserUpdate = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, age })
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

    useEffect(() => {
        axios.get(`http://localhost:3001/getUser/${id}`)
            .then((response) => {
                setName(response?.data?.name);
                setEmail(response?.data?.email);
                setAge(response?.data?.age);
            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <div className="vh-100 d-flex align-items-center justify-content-center bg-primary">
            <div className="row w-100 align-items-center justify-content-center">
                <div className="col-md-5 bg-white shadow rounded p-3">
                    <h2 className="mb-2">Update User</h2>
                    <form onSubmit={handleUpdate}>
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

                        <button type="submit" className="btn btn-success">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserUpdate;
