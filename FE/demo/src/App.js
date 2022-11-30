import './App.css';
import { BrowserRouter as Link, Router,Route,Routes } from 'react-router-dom';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <>
        <Link to="/Home" />
      <Routes> 
      <Route exact pathname="/Home" element={<Home />}/>
      </Routes>
      </>
      </Router>
    </div>
  );
  }


export default App;
