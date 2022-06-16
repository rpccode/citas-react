import { useEffect } from "react";
import Paciente from "./Paciente"


const ListadoPacientes = ({Pacientes, setPaciente,eliminarPaciente}) => { 
  useEffect(() => {
      
    if(Pacientes.length > 0) { console.log('Nuevo Paciente');}
    
  }, [Pacientes])
  return (
    <div className="md:w-1/2 lg:3/5 mt-5 md:h-screen overflow-y-scroll">
      {Pacientes && Pacientes.length ? (

        <>
          <h2 className=" font-black text-center text-3xl">Listado Pacientes</h2>
              <p className="text-center mt-5  mb-10 before:font-normal text-xl">Administra tus {''}
              <span className="text-indigo-600 font-bold ">Pacientes y Citas</span></p>
              
              { Pacientes.map( paciente => {
                  return <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente = {eliminarPaciente} 
                        
                    />
              })}
        
        </>
      ) : (
        <>
        
             <h2 className=" font-black text-center text-3xl">No Hay Pacientes</h2>
              <p className="text-center mt-5  mb-10 before:font-normal text-xl">Comienza Agregando Pacientes {''}
              <span className="text-indigo-600 font-bold ">Y Apareceran en este Lugar</span></p>
              
        </>
      )}
        
    </div>
  )
}

export default ListadoPacientes
