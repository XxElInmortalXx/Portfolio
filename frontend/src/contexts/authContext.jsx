'use client'

import { createContext } from 'react'
import Cookie from 'js-cookie'

export const AuthContext = createContext()

export function AuthProvider({ children }) {

    const getJWT = () => {
        return Cookie.get('JWT')
    }
    const setJWT = (JWT) => {
        Cookie.set('JWT', JWT)
    }
    const removeJWT = () => {
        Cookie.remove('JWT')
    }
    
    return (
        <AuthContext.Provider value={{
            getJWT,
            setJWT,
            removeJWT
        }}>
            {children}
        </AuthContext.Provider>
    )
}