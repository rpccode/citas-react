import{useState,useEffect } from 'react'
import Error from './Error';
const Formulario = ({Pacientes,setPacientes,paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [nombrePropietario, setNombrePropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error,setError] = useState(false);

   useEffect(() => {
      if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre);
        setNombrePropietario(paciente.nombrePropietario);
        setEmail(paciente.email);
        setAlta(paciente.alta);
        setSintomas(paciente.sintomas );
      }
    
  
  },[paciente])
    
 
  const generarId = () =>{
    const random= Math.random().toString(36).substring(2);
    const fecha= Date.now().toString(36);
    const id = fecha + random;

    return id;
  }

const handleSubmit = (e) => {
  e.preventDefault()
    //validar formulariio
    if([nombre,nombrePropietario,email,alta,sintomas].includes('')){
      setError(true);
      return;
    }
    setError(false);

    //Construir un Objecto
    const Paciente = {
      nombre,
      nombrePropietario,
      email,
      alta,
      sintomas,
      
    }
    if(paciente.id){
      //editando Paciente

      Paciente.id=paciente.id;

      const pacienteActualizados = Pacientes.map(
        pacienteState => pacienteState.id === paciente.id ? Paciente : pacienteState);

        setPacientes(pacienteActualizados);
        setPaciente({})

    }else{
      //Nuevo Registro
      Paciente.id = generarId();
      setPacientes([...Pacientes,Paciente]);

    }
    
   
    //reiniciar el formulario
    setNombre('');
    setNombrePropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
}


  return (
   <div className="md:w-1/2 lg:2/5" >
    <h2 className="font-black text-3xl text-center mt-5
    ">Seguimientos Pacientes</h2>  

    <p className="text-xl mt-5 text-center mb-10">Añade Pacientes y {''}
      <span className="text-indigo-600 font-bold ">Administralos</span>
    </p>
    <form 
    onSubmit={handleSubmit}
    className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 m-3">
      {error && <Error><p>Todos los Campos son Obligatorios!</p></Error> }
        <div className="mb-5">
            <label htmlFor="mascota" className="block uppercase font-bold text-gray-700" >Nombre Mascota</label>
            <input className="border-2 w-full
             p-2 mt-2 placeholder-gray-400 rounded-md" 
             type="text" name="nombre" id="mascota" placeholder="Nombre de la mascota" 
             value={nombre}
             onChange={(e) => setNombre(e.target.value)} 
             
             />
        </div>
        <div className="mb-5">
            <label htmlFor="propietario" className="block uppercase font-bold text-gray-700" >
              Nombre Propitario
              </label>
            <input className="border-2 w-full
             p-2 mt-2 placeholder-gray-400 rounded-md" 
             type="text"  id="propietario" 
             placeholder="Nombre de Propitario"
             value={nombrePropietario}
             onChange={(e) => setNombrePropietario(e.target.value)}  />
        </div>
        <div className="mb-5">
            <label htmlFor="email" className="block uppercase font-bold text-gray-700" >
             E-Mail
              </label>
            <input className="border-2 w-full
             p-2 mt-2 placeholder-gray-400 rounded-md" 
             type="email"  id="email" 
             placeholder="Tu Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)} 
             
             />
        </div>
        <div className="mb-5">
            <label htmlFor="alta" className="block uppercase font-bold text-gray-700" >
              Alta
              </label>
            <input className="border-2 w-full
             p-2 mt-2 placeholder-gray-400 rounded-md" 
             type="date"  id="alta" 
             value={alta}
             onChange={(e) => setAlta(e.target.value)} 

              />
        </div>
        <div className="mb-5">
            <label htmlFor="sintomas" className="block uppercase font-bold text-gray-700" >
             Sintomas
              </label>
            <textarea className="border-2 w-full
             p-2 mt-2 placeholder-gray-400 rounded-md"
              name="" id="sintomas" placeholder="Describe los Sintomas"
              value={sintomas}
             onChange={(e) => setSintomas(e.target.value)} 
              
              />
        </div>

        <input type="submit" className="bg-indigo-700 w-full 
        text-white font-black p-3 rounded-md 
        hover:bg-indigo-800 uppercase cursor-pointer transition-all " value={paciente.id ?'Editar Paciente' : 'Agregar Pacientes'} />
    </form>
   </div>
  )
}

export default Formulario