import { useGetTodosQuery } from '../rtk/services/Api';
import { TodoCard } from './index';

const TodosList = () => {
  const { data: todos = [], isLoading, isError, error } = useGetTodosQuery();

  return (
    <>
      {isLoading && <h2>Loading...⌛</h2>}
      {isError && <h2>{error.status} 👎</h2>}
      {!isLoading && todos?.data?.length > 0 ? (
        <TodoCard todos={todos} />
      ) : (
        !isLoading && <h2>List is Empty 📄</h2>
      )}
    </>
  );
};

export default TodosList;
