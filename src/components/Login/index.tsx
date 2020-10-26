import React from 'react'
import Login from './Login'
import { useSelector, RootStateOrAny } from 'react-redux'
import { gql, useQuery } from '@apollo/client'

/* Types needed for Apollo query */
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


function Index() {
   
    /*--- get Redux data using hook from store. reducer current User is called ---*/ 
    const currentUser = useSelector((state: RootStateOrAny) => state.currentUser)
    console.log(currentUser.root)
    /*--- for set data we need another hook from react-redux ---*/

    const { loading, error, data } = useQuery<UsuarioData>(USERS_FROM_SUCURSAL)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    
    var usersList: string[] = []
    
    data && data.usuarios.map(Usuario =>{
        return usersList.push(Usuario.nombre)
    })
    
    return (
        <div className="Index-login">
            <Login users={usersList} />
        </div>
    )
}

export default Index;