import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
        <div className='container max-w-screen-xl mx-auto px-2'>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
