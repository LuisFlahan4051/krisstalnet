import React, {useState} from 'react';
import Login from './Login'

function Index() {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    
    const usersList = ["Usuario 1", "Usuario 2", "Usuario 3"]
    return (
        <div>
            <Login users={usersList} />
        </div>
    );
}

export default Index;