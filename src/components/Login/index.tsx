import React from 'react';
import Login from './Login'
import { useSelector, RootStateOrAny } from 'react-redux';

function Index() {
    const currentUser = useSelector((state: RootStateOrAny) => state.currentUser)

    console.log(currentUser)
    
    const usersList = ["marchos", "kikis", "mama", "Luis", "dany"]
    return (
        <div>
            <Login users={usersList} />
        </div>
    );
}

export default Index;