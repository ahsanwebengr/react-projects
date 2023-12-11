'use client';
import { removeUser } from '@/redux/slice';
import { useDispatch, useSelector } from 'react-redux';
const RenderUser = () => {
    const userData = useSelector((data) => data.users);
    const dispatch = useDispatch();


    return (
        <>
            <h3 className='text-2xl font-semibold mt-6 mb-3'>User List </h3>
            <div className="w-full md:w-1/2">
                {userData?.length > 0 ? <>
                    {
                        userData?.map((user) => (
                            <div key={user?.id} className="flex border justify-between items-center p-3 rounded-md mb-2">
                                <h4>Username: <b>{user?.name}</b></h4>
                                <button
                                    onClick={() => {
                                        const userConfirmed = window.confirm("Are you sure you want to delete?");
                                        if (userConfirmed) {
                                            dispatch(removeUser(user?.id));
                                        } else {
                                            alert("Deletion canceled by the user.");
                                        }
                                    }}
                                    className='btn btn-error text-white'
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    }
                </> : <p>No User Found Yet..!</p>}
            </div>
        </>
    );
};

export default RenderUser;