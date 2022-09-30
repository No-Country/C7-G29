import React from 'react'
import './User.css'
import Phone from './../../assets/cell.png'
import Netbook from './../../assets/noot.png'

export default function Users() {
  return (
    <div className='users-general'>
        <div className="users-general-text">
            <h1 className="users-h1">¿Qué quieres hacer hoy?</h1>
        </div>
        <div className="users-background">
                <h2 className="users-h2">Ayudanos a mejorar tu experiencia en la plataforma</h2>
            <div className='users-div'>
                <div className='users-card-1'>
                    <img src={Phone} className="users-img"/>
                    <p className="users-p">Descargar fotos <br />(premium o gratuitas)</p>
                    <div className="users-div-button">
                        <button className="users-button">Descargar contenido</button>
                    </div>
                </div>
                <div className='users-card-2'>
                    <img src={Netbook} className="users-img"/>
                    <p className="users-p">Compartir tus fotos <br />(como vendedor o de forma gratuita)</p>
                    <div className="users-div-button">
                        <button className="users-button">Subir contenido</button>
                    </div>
                </div>
            </div>
                <p className="users-description-p">Al elegir un camino ambos roles se podrán realizar, solo nos enfocaremos a mejorar <br /> tu experiencia con base en tu decisión.</p>
        </div>
    </div>
  )
}
