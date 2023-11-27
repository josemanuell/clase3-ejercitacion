import React from 'react'
import './Contenido.css'
import zapatilla from '../../assets/nike.jpg'

const contenido = () => {
  return (
    <div className='contenedor_contenido'>
      <h1>Nike</h1>
      <div className='contenido_flex'>
        <div>
          <img src={zapatilla} alt="Zapatilla Nike" />
          <h4>Único disponible</h4>
        </div>
        
        <div className="contenido_descripcion">
          <h2>Oferta del día</h2>
          <p>
            Zapatillas Nike Air Max
            <span>125000 pesos</span> Ver los medios de pago. 
            Llega el miércoles Solo en CABA y zonas de GBA 
            Comprando dentro de las próximas 14 h 22 
            min Beneficio Mercado Puntos 
            Más formas de entrega 
            Devolución gratis. Tenés 30 días desde que lo recibís. <br />
            Conoce los medios de pago
          </p><br />
          
          <div className="descripcio_pago">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-visa" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M21 15l-1 -6l-2.5 6" />
              <path d="M9 15l1 -6" />
              <path d="M3 9h1v6h.5l2.5 -6" />
              <path d="M16 9.5a.5 .5 0 0 0 -.5 -.5h-.75c-.721 0 -1.337 .521 -1.455 1.233l-.09 .534a1.059 1.059 0 0 0 1.045 1.233a1.059 1.059 0 0 1 1.045 1.233l-.09 .534a1.476 1.476 0 0 1 -1.455 1.233h-.75a.5 .5 0 0 1 -.5 -.5" />
              <path d="M18 14h2.7" />
              </svg> <br /><br />

              <a href="#">Conocer más</a> 
          </div>

        </div>
      </div>
    </div>
  )
}

export default contenido