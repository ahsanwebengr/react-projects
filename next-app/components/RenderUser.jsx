'use client';
import { useSelector } from 'react-redux';
const RenderUser = () => {
    const userData = useSelector((data) => data.users);
    return (
        <div className='container max-w-6xl mx-auto my-6'>
            <h3 className='text-2xl font-semibold mb-3'>User List </h3>

            <div className="w-1/2">
                {userData.length > 0 ? <>
                    {
                        userData?.map((user) => (
                            <h4 className='border-b p-2 ' key={user.id}>Username: <b>{user.name}</b></h4>
                        ))
                    }
                </> : <p>No User Found Yet..!</p>}
            </div>
        </div>
    );
};

export default RenderUser;