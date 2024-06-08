import logo from './logo.svg';
import './App.css';
import AddEmployees from './Components/AddEmployees';
import SearchEmployees from './Components/SearchEmployees';
import DeleteEmployee from './Components/DeleteEmployee';
import Viewall from './Components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddEmployees/>}/>
    <Route path='/search' element={<SearchEmployees/>}/>
    <Route path='/delete' element={<DeleteEmployee/>}/>
    <Route path='/viewall' element={<Viewall/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
