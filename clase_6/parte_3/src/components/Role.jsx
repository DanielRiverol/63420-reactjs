import {useState} from 'react'

function Role() {
const [userRole,setUserRole]=useState('visitante')


const renderContent=()=>{
    if(userRole ===  'admin'){
        return <h2>Bienvenido Administrador</h2>
    }
    if(userRole ===  'alumno'){
        return <h2>Bienvenido Alumno</h2>
    }
    return <h3>Por favor, inicia sesión</h3>
}

  return (
    <div>
        {renderContent()}
        <button onClick={()=>setUserRole("visitante")}>Cambiar a Visitante</button>
        <button onClick={()=>setUserRole("alumno")}>Cambiar a Alumno</button>
        <button onClick={()=>setUserRole("admin")}>Cambiar a Administrador</button>
    </div>
  )
}

export default Role