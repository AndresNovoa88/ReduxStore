import './App.css';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setEpisodios, setInfper, setIncremental, setImagen, setNombre } from "./reducers";
import { Button, ButtonGroup, Card, Carousel, Col, Container, Row, Table } from 'react-bootstrap';
import iAx from "../src/configAXIOS";

function App() {
  const dispatch = useDispatch();
  const [ver, setVer] = useState(false);

  useEffect(() => {
    if (ver)
      setTimeout(getData, 500);
  }, [ver]);

  const cargaRickMorty = () => setVer(true);

  const [fInfo, setfInfo] = useState([]);

  async function getData() {
    try {
      const response = await iAx.get("/api/character/");
      const data = response.data;


      setVer(false);
      const first = [];
      for (let x = 0; x < data.results.length; x += 2) {
        first.push(data.results.slice(x, x + 2));
      }
      setfInfo(first);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  }
  const verInfo = (a) => {
    const originName = a.origin.name !== "unknown" ? a.origin.name : "Desconocido";
    const originUrl = a.origin.url !== "" ? a.origin.url : "URL no disponible";
    dispatch(setInfper(`Su origen es en: ${originName}  ==>  su ubicación es: ${originUrl}`));
  }

  //   <img src={a.image} className="personaje-imagenp" alt={`Imagen ${i}`}/> sirve para llamar la imagen

  return (
    <div className="App">
      <div className="tituloPrincipal">
        <h1 className="titulo">Rick y Morty</h1>
      </div>
      <div className="container">
        <Button
          className="custom-violent-button"
          variant="outline-success"
          disabled={ver}
          onClick={!ver ? cargaRickMorty : null}
        >
          {ver ? 'Loading...' : 'Call Data'}
        </Button>
      </div>
      <Container>
        <Row>
          {fInfo.map((ab, ib) => (
            ab.map((a, i) => (
              <Col key={a.id} md={4} className="mb-4">
                <Card style={{ width: '18rem' }} className="custom-violent-button" border="white">
                  <Card.Img variant="top" src={a.image} />
                  <Card.Body>
                    <Card.Title>Información de los personajes</Card.Title>
                    <Card.Text>
                    Episodios y status

                      <ButtonGroup vertical>
                        <Button variant="primary" className="tamlet" onClick={() => {
                          dispatch(setEpisodios(a.episode));
                          dispatch(setImagen(a.image));
                          dispatch(setNombre(a.name));
                        }}>
                          {a.name}
                        </Button>
                        <Button className="tamlet" variant="info" onClick={() => verInfo(a)}>{a.status}</Button>
                        <Button className="tamlet" variant="light" onClick={() => dispatch(setIncremental(2))}>IncrementalNumero</Button>
                      </ButtonGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ))}
        </Row>

        <Row>
          <Col>
            <ImageCarousel images={fInfo.flat().map(a => a.image)} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const ImageCarousel = ({ images }) => {
  return (
    <Carousel controls={false} interval={400} indicators={false}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="personaje-imagen" src={image} alt={`Imagen ${index}`} />
          <Carousel.Caption>
            <h3></h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default App;
