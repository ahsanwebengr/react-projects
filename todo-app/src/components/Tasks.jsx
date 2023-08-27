import Card from './Card';
import { useAuth } from '../context/Context';

const Tasks = () => {
  const { data } = useAuth();

  return (
    <div className="task-container">
      {data.length > 0 ? (
        data.map((item, index) => (
          <Card key={index} id={index} value={item.value} />
        ))
      ) : (
        <p className='no-data'>No data available</p>
      )}
    </div>
  );
};

export default Tasks;
