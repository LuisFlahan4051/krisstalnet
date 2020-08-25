import React from 'react'
import Login from './Login'
import { useSelector, RootStateOrAny } from 'react-redux'
import { gql, useQuery } from '@apollo/client'

/* simple Apollo query */
interface Usuario {
    nombre: string
}

interface UsuarioData {
    usuarios: Usuario[]
}

const USERS_FROM_SUCURSAL = gql`query usuarios{
  usuarios{
    id
    nombre
  }
}`

function PaintUsers() {
    const { loading, error, data } = useQuery<UsuarioData>(USERS_FROM_SUCURSAL)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return(
        <div>
            {data && data.usuarios.map(Usuario => 
            <div key={Usuario.nombre}>{Usuario.nombre}</div>
            )}
        </div>
    )
}


function Index() {

    /*--- get Redux data using hook from store. reducer current User is called ---*/ 
    const currentUser = useSelector((state: RootStateOrAny) => state.currentUser)
    console.log(currentUser)
    /*--- for set data we need another hook from react-redux ---*/
    
    
    const usersList = ["marchos", "kikis", "mama", "Luis", "dany"]
    return (
        <div>
            <Login users={usersList} />
            <PaintUsers />
        </div>
    )
}

export default Index;