import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { LuEdit } from 'react-icons/lu';

const GetData = () => {
  const [users, setUsers] = useState([]);
  const backNavigate = useNavigate();
  const editNavigate = useNavigate();

  const fetchData = async () => {
    try {
      const url = 'https://63f3206cfe3b595e2edb09c0.mockapi.io/crud-app';
      const response = await axios.get(url);
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // Delete Request
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const url = 'https://63f3206cfe3b595e2edb09c0.mockapi.io/crud-app';
        axios
          .delete(`${url}/${id}`)
          .then((resp) => {
            fetchData();
            if (resp.status === 200) {
              Swal.fire('Deleted!', 'The item has been deleted.', 'success');
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire(
              'Error',
              'An error occurred while deleting the item.',
              'error'
            );
          });
      }
    });
  };

  const handleUpdate = (id, name, age, designation) => {
    editNavigate('/edit');
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('designation', designation);
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between my-5">
        <button className="btn btn-primary" onClick={() => backNavigate('/')}>
          Back
        </button>
        <h4>Data Getting from Axios</h4>
      </div>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr className="text-center">
                  <th scope="col">Sr.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Designation</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                  const { name, age, designation, id } = user;
                  return (
                    <tr key={id} className="text-center">
                      <td>{index + 1}</td>
                      <td>{name}</td>
                      <td>{age}</td>
                      <td>{designation}</td>
                      <td className="d-flex gap-1">
                        <button
                          onClick={() =>
                            handleUpdate(id, name, age, designation)
                          }
                          className="btn btn-secondary"
                        >
                          <LuEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(id)}
                          className="btn btn-danger"
                        >
                          <AiFillDelete />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetData;
