import './App.css';
import Auth from './Components/Auth/Auth';
import Confirm from './Components/PasswordReset/ConfirmCode/Confirm';
import FinalScreen from './Components/PasswordReset/FinalScreen/FinalScreen';
import Reset from './Components/PasswordReset/Reset/Reset';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';

function App() {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Auth/>
    },
    {
      path:'/password-reset',
      element:<Reset/>
    },
    {
      path:'/verification',
      element:<Confirm/>
    },
    {
      path:'/confirmation',
      element:<FinalScreen/>
    }
  ])
  return (
    <div className="App">
      {/* <Auth/> */}
      {/* <Confirm/> */}
      {/* <FinalScreen/> */}
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
