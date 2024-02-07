import './App.css';
import Auth from './Components/Auth/Auth';
import Confirm from './Components/PasswordReset/ConfirmCode/Confirm';
import FinalScreen from './Components/PasswordReset/FinalScreen/FinalScreen';

function App() {
  return (
    <div className="App">
      {/* <Auth/> */}
      {/* <Confirm/> */}
      <FinalScreen/>
    </div>
  );
}

export default App;
