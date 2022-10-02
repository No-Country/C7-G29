import React from 'react'
import './Search.css';
import Lupa from './../../assets/Lupa.png';

export default function Search() {
  return (
    <div className="search-total">
      <div className="search-container-input">
        <div className="search-general-back">
            <input type="text" className="search-input"></input>
            <img src={Lupa} className="search-icon" />
            <button className="search-button">Buscar</button>
            <div className="search-container-p">
                <p className="search-p">Descarga gratis, compra, vende, emprende </p>
            </div>
        </div>
      </div>
    </div>
  )
}
