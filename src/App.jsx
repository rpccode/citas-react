import { useState,useEffect } from "react";
import Swal from "sweetalert2";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";


function App() {

  const [Pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? [])
  const [paciente, setPaciente] = useState({});
  
  useEffect(() =>{
    localStorage.setItem("pacientes",JSON.stringify(Pacientes));
  },[Pacientes])

  const eliminarPaciente = id => {
    const pacienteActualizados = Pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacienteActualizados)
  }


  return (
   <div  className="container mx-auto mt-20">
    <Header />
    <div className=" md:flex">
        <Formulario
        Pacientes={Pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente = {setPaciente}
          
        />
        <ListadoPacientes
          Pacientes={Pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente} 
        
        />
    </div>
   </div>
  );
}

export default App;
