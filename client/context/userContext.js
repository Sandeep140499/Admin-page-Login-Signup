import axios from 'axios';
import { createContext, useEffect, useState } from 'react';


export const UserContext = createContext({}) 

export function UserContextProvider({childern}){
    const [user, setUser] = useState(null);                                           
    useEffect(()=>{

        if(!user){
            axios.get('/profile').then(({data})=>{
                setUser(data)
            })
        }
    }, [])
    
    return (
        <UserContext.Provider value= {{user, setUser}}>
            {childern}
        </UserContext.Provider>
    )
}