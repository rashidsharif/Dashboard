import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <div className="AppGlass">
      <div><Sidebar/></div>
      <div><MainDash/></div>
      <div><RightSide/></div>
      </div>
     
    </div>
  );
}

export default App;
