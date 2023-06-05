import 'bootstrap/dist/css/bootstrap.css';
import Body from './Components/body/Body.jsx';
import HeadBar from './Components/headBar/HeadBar.jsx'
import Lista from './Components/lista/Lista.jsx';
import { listaTrabajadores } from './listaTrabajadores.js';
import { useState } from 'react';

function App() {
  const [listaColab, setListaColab] = useState(listaTrabajadores);

  const handlerClickAdd = (e) =>{
    setListaColab([...listaColab,{id: listaColab.length +1, ...e}]);
  };

  const handlerSearchNav = (listaFiltrada) =>{
    const nuevalista = listaFiltrada.length === 0 ? listaTrabajadores : listaFiltrada;
    setListaColab([...nuevalista]);
  };

  return (
    <div className="App">
      <HeadBar onChangeNav={(e) => handlerSearchNav(e)} lista={listaColab} />
      <Body onClickAddWorker={(e) => handlerClickAdd(e)} />
      <Lista lista={listaColab} />
    </div>
  );
}

export default App;


