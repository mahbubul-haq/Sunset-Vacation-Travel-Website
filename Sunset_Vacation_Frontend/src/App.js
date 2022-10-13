import Main from './Components/MainComponent'

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div >
          <Main/> 
        </div>
    </BrowserRouter>
    
  );
}

export default App;
