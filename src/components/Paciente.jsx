

const Paciente = ({paciente, setPaciente,eliminarPaciente}) => {
   const {id,nombre,nombrePropietario,email,alta,sintomas} = paciente
   
   const handleEliminar = () => {
        const respuesta = confirm('Desea eliminar este Paciente');
        if (respuesta) {eliminarPaciente(id)}
   }
  return (
   <>
     <div className="mt-5 bg-white px-5 py-10 m-3 shadow-md rounded-xl " >
        <p className="font-bold text-gray-700 uppercase">Nombre: {""}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">Propietario: {""}
            <span className="font-normal normal-case">{nombrePropietario}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">E-Mail: {""}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">Fecha de Alta: {""}
            <span className="font-normal normal-case">{alta}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">Sintomas: {""}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="mt-3 flex justify-between flex-col lg:flex-row">
            <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 
            text-white rounded-xl font-bold uppercase"
             onClick={() =>{setPaciente(paciente)}}
            >Editar</button>
            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 
            text-white rounded-xl font-bold uppercase mt-4 lg:mt-0"
            onClick={handleEliminar}
            
            >Eliminar</button>
        </div>
      </div>
   
   
   </>
  )
}

export default Paciente