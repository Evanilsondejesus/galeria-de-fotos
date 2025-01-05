import React, { useEffect, useState } from "react";
import axios from "axios";
import '../assets/components/Card.css';

const Card = ({nome_pesquisa}) => {
  const [photos, setPhotos] = useState([]);


  const apiKey = "48105420-b687347e0d83eafd95dc0c716"; // key da API
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(nome_pesquisa)}&image_type=photo&pretty=true&per_page=10&lang=pt`;



  // Usando a API com useEffect
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // Passa todas as fotos para o estado sem fazer nenhum 
        console.log(response.data);
        setPhotos(response.data.hits); // Resposta já contém as fotos que você quer
      })
      .catch((error) => {
        console.error("Erro ao buscar fotos:", error);
      });
  }, [nome_pesquisa]);

  return (





    <div className="container">
    <div className="row"> 
      {photos.length > 0 ? (

        photos.map((photo, index) => (
          <div key={index} className="col-md-4 mb-4 ">
            <div className="card" style={{ width: '100%' }}>
              <img
                src={photo.webformatURL}
                className="card-img-top"
              
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                }}
              />
              <div className="card-body text-black bg-light">
                <h5 className="card-title" title="titulo da tag">{photo.tags}</h5>
                <p className="card-text" title="user">{photo.user || "Sem descrição"}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>{photos.length === 0 ? "Nenhuma foto encontrada" : "Carregando fotos..."}</p>
      )}
    </div>
  </div>





  );
};

export default Card;
