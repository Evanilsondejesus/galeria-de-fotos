 
import React, { useState } from 'react';
import Card from './Card';


export default function Pesquisa() {

const [searchTerm, setSearchTerm] = useState(''); // Inicializa com 'VACA' ou qualquer valor desejado

  // Função que é chamada a cada digitação no input
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);  // Atualiza o estado com o valor digitado
  };


   // Função para limpar o campo de pesquisa
   const clearInput = () => {
    setSearchTerm('');  // Limpa o valor do input
  };



  
    return (
   
  <>
<div className="container-fluid mt-4 mb-4 borde-1 p-1 rounded-3 ">

<div className="col-12 col-md-6 col-lg-4 col-xl-6 mx-auto rounded-4 p-1 bg-light border-1 col-sm-12 ">
    
  

        <div className="input-group">
          <span className="input-group-text bg-transparent border-1" id="search-icon"  style={{cursor: 'pointer'}}>
         
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Pesquisar fotos"
            aria-label="Pesquisar"
            aria-describedby="search-icon"
            value={searchTerm}  // Controla o valor do input
            onInput={handleInputChange}  // Chama a função no momento que o usuário digita
          />
           {searchTerm && (
             <span
               className="input-group-text bg-transparent border-1 cursor-pointer "
               style={{cursor: 'pointer'}}
               id="clear-icon"
               onClick={clearInput}
             >
               <i className="bi bi-x-circle"></i>
             </span>
           )}

        </div>
        



        </div>






</div>
<Card nome_pesquisa={searchTerm} />  
      
   
  

  
   </>



  
    );
  }
  