import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Recipe from './components/Recipe';
import NotFound from './pages/NotFound';
import RecipeDetails from './pages/RecipeDetails';

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Recipe />
        },
        {
            path: 'recipes/:id',
            element: <RecipeDetails />
        },
        {
            path: '*',
            element: <NotFound />
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
