import './App.css';
import { useEffect, useState } from 'react';
import Episodios from './componentes/Episodios';
import Infoper from './componentes/Infoper';
import { useDispatch } from 'react-redux';
import { setEpisodios, setInfper } from './reducers';

function App() {
  const disp = useDispatch();

  const [jInfo, setInfo] = useState([]);

  async function getData() {
    try {
      const rta = await fetch('https://rickandmortyapi.com/api/character');
      
      if (!rta.ok) {
        throw new Error("Er:" + rta.error);
      }
      
      let datos = await rta.json();
      console.log("===>" + JSON.stringify(datos.results));
      
      let lst = [];
      for (let x = 0; x < datos.results.length; x += 2) {
        lst.push(datos.results.slice(x, x + 2));
      }
      console.log(":::>" + JSON.stringify(lst));
      setInfo(lst);
    } catch (error) {
      console.log("ERROR:" + error);
    }
  }

  useEffect(() => { getData(); }, []);

  let verEpisodios = (d) => {
    console.log("episodios:" + JSON.stringify(d.episode));
    disp(setEpisodios(d.episode));
  }

  let verInfo = (d) => {
    console.log("origen:" + d.origin.name + "---url:" + d.origin.url);
    disp(setInfper("origen:" + d.origin.name + "---url:" + d.origin.url));
  }
  

  return (
    <div className="App">
      <h1>Personajes Rick and Morty</h1>
      <div className='container'>
        <div className='left'>
          <div className='image-container'>
            {jInfo.map((da, ia) => (
              <div key={ia} className='image-row'>
                {
                  da.map((d, i) => (
                    <div key={d.id} className='image-item-container'>
                      <img src={d.image} className="image-item" alt={`Imagen ${i}`} />
                      <div className='details-container'>
                        <span className='tamlet' onClick={() => verEpisodios(d)}>{d.name}</span>
                        <span className='tamlet' onClick={() => { verInfo(d) }}>{d.status}</span>
                      </div>
                    </div>
                  ))
                }
              </div>
            ))}
          </div>
        </div>
        <div className='right'>
          <div className='arriba'>
            <Episodios />
          </div>
          <div className='abajo'>
            <Infoper />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
