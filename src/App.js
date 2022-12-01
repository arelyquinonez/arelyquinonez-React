import './App.css';
import React from 'react';

import Busqueda from './Busqueda/Busqueda';
import Lista from './Lista/Lista';
import Contacto from './Contacto/Contacto';
import AgregarAmigo from './AgregarAmigo';
import ModalAmigo from './ModalAmigo';
import {ContactoProvider, ContactoContext} from './Context/ContactoProvider'


function App() {
  
  return(
      <ContactoProvider>
        <ContactoContext.Consumer>
          {({cantidadAmigos,
          contactosFiltro,
          borrarAmigo,
          modal})=>(
            <React.Fragment>
              <h1 className="titulo">Lista de contactos</h1>
              <h3 className="cantidad">Tengo {cantidadAmigos} amigos</h3>
              <Busqueda/>
              <AgregarAmigo />
              <Lista>
                {
                  contactosFiltro.map((contacto)=>{
                    return(<Contacto 
                        nombre={contacto.nombre}
                        telefono={contacto.telefono}
                        correo={contacto.correo} 
                        borrarAmigo={()=>borrarAmigo(contacto.telefono)}/>)
                })
                }
              </Lista>
              {contactosFiltro.length===0 && <h1>No tienes amigos</h1>}
              {modal &&  <ModalAmigo/>}
            </React.Fragment>
          )}
        </ContactoContext.Consumer>
      </ContactoProvider>
      
  )

}


// nunca borrar
export default App;