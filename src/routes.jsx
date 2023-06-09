import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import ShowMovies from './components/ShowMovies';

const router = createBrowserRouter([

    {
        path:"/",
        element:<App/>
    },

    {
        path:"/showmovie",
        element:<ShowMovies/>
    },

    

])

export default router;