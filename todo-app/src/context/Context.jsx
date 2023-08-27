// AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const initailValue = localStorage.getItem('tasks')
    ? JSON.parse(localStorage.getItem('tasks'))
    : [];
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initailValue);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(data));
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading((prev) => !prev);

    // Create a new object with the 'value' property
    const newValues = {
      value: value,
    };

    // Update the 'data' array with the new object
    setData([...data, newValues]);
    // Clear the input field after submission
    setValue('');

    // Stops the Loading when data in added
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  // Delete the Selected Value
  const handleDelete = (id) => {
    const filterArr = data.filter((item, index) => {
      return index !== id;
    });

    setData(filterArr);
  };

  return (
    <AppContext.Provider
      value={{
        value,
        data,
        isLoading,
        handleChange,
        handleSubmit,
        handleDelete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAuth() {
  return useContext(AppContext);
}
