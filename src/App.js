import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Addfounded from './components/Addfounded';
import Searchitem from './components/Searchitem';
import Homepage from './components/Homepage';
import Contactdetail from './components/Contactdetail';
import Viewall from './components/Viewall';
import Deletefound from './components/Deletefound';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/home" element={<Homepage/>}/>
<Route path="/add" element={<Addfounded/>}/>
<Route path="/search" element={<Searchitem/>}/>
<Route path="/contact" element={<Contactdetail/>}/>
<Route path="/view" element={<Viewall/>}/>
<Route path="/delete" element={<Deletefound/>}/>
  
</Routes>


</BrowserRouter>

    </div>
  );
}

export default App;
