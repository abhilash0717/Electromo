import './App.css';
import { BrowserRouter as  Router,Link,Route,Routes } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <>
        <Link to="/home" />
        <Link to="/login"/>
      <Routes> 
      <Route path="/home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
      </>
      </Router>
    </div>
  );
  }


export default App;
