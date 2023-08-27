import { AiFillDelete } from 'react-icons/ai';
import { useAuth } from '../context/Context';

const Card = ({ value, id }) => {
  const { handleDelete } = useAuth();
  return (
    <>
      <div className="task">
        <p>{value}</p>
        <div className="actions">
          <button className="delete-btn" onClick={() => handleDelete(id)}>
            <AiFillDelete />
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
