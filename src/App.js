import './App.css';
import CompA from './components/CompA.js';
import B from './components/B.js';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';


function App() {

  const details= [
 {
  name:"bhupathi Tanala",
  rollno:"12345"
 },

 {
  name:"Narasimha Kn",
rollno:"1188"
 }
  ]

  return (
    <>
    <BrowserRouter>
    <ul>
      <li>
          <Link to="/compA">Click to compA</Link>
       </li>
       <li>
        <Link to="/compB">Click to compB</Link>
        </li>
    </ul>
     <Routes>
      <Route  path='/compA' element={<CompA data={details} />}></Route>
      <Route  path='/compB' element={<B data={details} />}></Route>  
      </Routes>
    </BrowserRouter>
      
  
    
    </>
  );
}

export default App;
