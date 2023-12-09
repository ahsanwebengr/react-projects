'use client';
import { removeUser } from '@/redux/slice';
import { useDispatch, useSelector } from 'react-redux';
const RenderUser = () => {
    const userData = useSelector((data) => data.users);
    const dispatch = useDispatch();

    const handleDeleteUser = () => {
        dispatch(removeUser(user?.id));
    };

    return (
        <div className='container max-w-6xl mx-auto my-6'>
            <h3 className='text-2xl font-semibold mb-3'>User List </h3>

            <div className="w-1/2">
                {userData.length > 0 ? <>
                    {
                        userData?.map((user) => (
                            <div key={user?.id} className="flex border justify-between items-center p-3 rounded-md mb-2">
                                <h4>Username: <b>{user?.name}</b></h4>
                                <button onClick={handleDeleteUser} className='bg-red-500 text-white px-3 py-1 rounded-md'>Delete</button>
                            </div>
                        ))
                    }
                </> : <p>No User Found Yet..!</p>}
            </div>
        </div>
    );
};

export default RenderUser;