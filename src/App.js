import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import Main from './Layouts/Main';

function App() {
  const router = createBrowserRouter([{ path: '/', element: <Main />, children: [{ path: '/', element: <Home /> }] }]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
