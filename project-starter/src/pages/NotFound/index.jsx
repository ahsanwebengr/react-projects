import PATHS from '../../routes/path';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section>
      <h2 className='text-4xl font-bold font-poppins'>Page Not Found</h2>
      <Link to={PATHS.home} className='underline text-blue-500'>
        {' '}
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
