import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Spinner from '../Components/Spinner';

const EditData = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setAge(localStorage.getItem('age'));
    setDesignation(localStorage.getItem('designation'));
  }, []);

  const handleUpdate = (e) => {
    setIsLoading(true);
    e.preventDefault();
    // Mockup Api URL
    const url = 'https://63f3206cfe3b595e2edb09c0.mockapi.io/crud-app';
    axios
      .put(`${url}/${id}`, {
        name,
        age,
        designation,
      })
      .then((resp) => {
        navigate('/read');
        if (resp.status === 200) {
          Swal.fire({
            title: 'Successfully Update!',
            text: 'Your request is updated successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div
      className="container"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 className="text-center">Update Data</h1>
      <form className="row w-100" onSubmit={handleUpdate}>
        <div className="col-md-6 shadow mx-auto p-4 rounded-2">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              placeholder="Enter Age"
              value={age}
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="designation" className="form-label">
              Designation
            </label>
            <input
              type="text"
              placeholder="Enter Designation"
              value={designation}
              className="form-control"
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {isLoading ? <Spinner /> : 'Update'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditData;
