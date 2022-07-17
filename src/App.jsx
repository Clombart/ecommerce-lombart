//import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/container/ItemListContainer';
import Cart from './components/container/Cart/Cart';
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer';
import CarritoContext from './context/CarritoContext';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {  // se llama componente
  return (
    <CarritoContext>
      <BrowserRouter>
        <div className="App">
          <header className="">
            <NavBar />
          </header>
          <Routes>
            <Route index path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Navigate to='/' />} /> //podria ser to='/404' siempre que antes tengamos el componente 404notfound.jsx y la route preestablecida.
          </Routes>
        </div>
      </BrowserRouter>
    </CarritoContext>
  );
}

export default App;
