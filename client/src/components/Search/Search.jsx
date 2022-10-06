import React,{useState} from 'react'
import './Search.css';
import Lupa from './../../assets/Lupa.png';
import Gris from './../../assets/gris.jpg';
import Filter from './../../assets/filter.png';

export default function Search() {

  const [deploySearch, setDeploySearch] = useState(false);

  const inputDeploy = () => {
    setDeploySearch(!deploySearch)
  }

  return (
    <div className="search-total">
      {
      deploySearch ? 
      (
      <div className="search-container-input">
        <div className="search-general-back">
          <input onClick={inputDeploy} type="text" className="search-input" />
          <img src={Lupa} className="search-icon" />
          <button className="search-button">Buscar</button>
          <div className="search-container-p">
              <p className="search-p">Descarga gratis, compra, vende, emprende </p>
          </div>
          <div className="search-div">
              <div className="search-div-filter">
                  <button className="search-div-button"><img src={Filter} />&nbsp;Filtro</button>
                  <div className="search-div-category">
                    <p className="search-div-category-p">Categorias</p>
                  </div>
                    <hr className="search-hr"/>
                  <div className="search-card">
                    <div className="search-card-total">
                      <img alt="image" src={Gris} className="search-card-total-img" />
                      <p className="search-card-total-p">&nbsp;Colores</p>
                    </div>
                    <div className="search-card-total">
                      <img alt="image" src={Gris} className="search-card-total-img" />
                      <p className="search-card-total-p">&nbsp;Colores</p>
                    </div>
                    <div className="search-card-total">
                      <img alt="image" src={Gris} className="search-card-total-img" />
                      <p className="search-card-total-p">&nbsp;Colores</p>
                    </div>
                    <div className="search-card-total">
                      <img alt="image" src={Gris} className="search-card-total-img" />
                      <p className="search-card-total-p">&nbsp;Colores</p>
                    </div>
                  </div>
                  <div className="search-card">
                    <div className="search-card-total">
                      <img alt="image" src={Gris} className="search-card-total-img" />
                      <p className="search-card-total-p">&nbsp;Colores</p>
                    </div>
                    <div className="search-card-total">
                      <img alt="image" src={Gris} className="search-card-total-img" />
                      <p className="search-card-total-p">&nbsp;Colores</p>
                    </div>
                    <div className="search-card-total">
                      <img alt="image" src={Gris} className="search-card-total-img" />
                      <p className="search-card-total-p">&nbsp;Colores</p>
                    </div>
                    <div className="search-card-total">
                      <img alt="image" src={Gris} className="search-card-total-img" />
                      <p className="search-card-total-p">&nbsp;Colores</p>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      )
      :
        (
        <div className="search-container-input">
          <div className="search-general-back">
              <input onClick={inputDeploy} type="text" className="search-input"></input>
              <img src={Lupa} className="search-icon" />
              <button className="search-button">Buscar</button>
              <div className="search-container-p">
                  <p className="search-p">Descarga gratis, compra, vende, emprende </p>
              </div>
          </div>
        </div>
        )
      }
    </div>
  )
}
