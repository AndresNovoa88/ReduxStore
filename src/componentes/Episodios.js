import { useSelector } from "react-redux";

function Episodios() {
  const lst = useSelector(state => state.holaAPP.episodios);
  
  return (
    <div>
      <h1>Estoy en episodios</h1>
      <ul>
        {lst.map((d, index) => (
          <li key={index}>
            <span className="tamlet">{d}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Episodios;
