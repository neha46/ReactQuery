import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Home from './pages/Home/index'
import Login from './pages/Login/index'
import ProtectedPage from './components/ProtectedPage';
import Register from './pages/Register/index'
import Product from './pages/Product/index'
import Products from './pages/Products/index'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<ProtectedPage>
        <Home/> </ProtectedPage>}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/register' element={<Register/>}/>
  
         <Route path='/products' element={<ProtectedPage><Products/></ProtectedPage>}/>
         <Route path='/products/:productId' element={<ProtectedPage><Product/></ProtectedPage>}/>
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
