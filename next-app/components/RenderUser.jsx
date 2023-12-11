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
                                <button onClick={() => dispatch(removeUser(user?.id))} className='bg-red-500 text-white px-3 py-1 rounded-md'>Delete</button>
                            </div>
                        ))
                    }
                </> : <p>No User Found Yet..!</p>}
            </div>
        </>
    );
};

export default RenderUser;