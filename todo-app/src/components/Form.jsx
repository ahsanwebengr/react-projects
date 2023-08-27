import { HiPlusSm } from 'react-icons/hi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useAuth } from '../context/Context';

const Form = () => {
  const { handleSubmit, handleChange, isLoading, value } = useAuth();
  return (
    <>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          placeholder="Add an Item"
          onChange={handleChange}
          value={value}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? (
            <AiOutlineLoading3Quarters
              className={`${isLoading && 'rotate-animation '}`}
            />
          ) : (
            <HiPlusSm />
          )}
        </button>
      </form>
    </>
  );
};

export default Form;
