//import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/container/ItemListContainer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {  // se llama componente
  return (
    <div className="App">
      <header className="">
        <NavBar />
      </header>
      <ItemListContainer texto="Bienvenidos, los productos estarán disponibles a la brevedad" />


    </div>
  );
}

export default App;
