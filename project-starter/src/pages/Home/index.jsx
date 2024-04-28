import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/features/users/user.service';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user?.data?.users);
  const isLoading = useSelector(state => state.user?.isLoading);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <section>
      {isLoading && (
        <h3 className=' text-center text-4xl font-bold'>Users Loading ...</h3>
      )}
      <h1 className='my-5 text-3xl font-bold tracking-wide font-poppins'>All User List</h1>
      {users && users.length > 0 ? (
        <div className='grid grid-cols-3 gap-4 mb-3'>
          {users.map(user => (
            <div
              className='border-gray-200 border-2 py-6 text-center rounded-md'
              key={user?.id}
            >
              <h2 className='font-medium font-poppins'>{user?.firstName}</h2>
              <h3>{user?.email}</h3>
              <p>{user?.birthDate}</p>
            </div>
          ))}
        </div>
      ) : (
        <h3>No Users Founds</h3>
      )}
    </section>
  );
};

export default Home;
