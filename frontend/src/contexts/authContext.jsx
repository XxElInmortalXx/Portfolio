'use client'

import { createContext, useState, useEffect } from 'react';
import { authFunctions } from '../ulits/auth'; // Importar funciones de autenticación

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({ isLoggedIn: false, isAdmin: false });

  useEffect(() => {
    const { isLoggedIn, isAdmin } = authFunctions.checkUser();
    setUser({ isLoggedIn, isAdmin });
  }, []);

  const handleLogin = (JWT) => {
    authFunctions.login(JWT);
    const { isLoggedIn, isAdmin } = authFunctions.checkUser();
    setUser({ isLoggedIn, isAdmin });
  };

  const handleLogout = () => {
    authFunctions.logout();
    setUser({ isLoggedIn: false, isAdmin: false });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login: handleLogin,
        logout: handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


// import { createContext, useState } from 'react'
// import Cookie from 'js-cookie'

// export const AuthContext = createContext()

// export function AuthProvider({ children }) {
//   const [isLogin, setIsLogin] = useState(false)
//   const [isAdmin, setIsAdmin] = useState(false)

//   const getJWT = () => {
//     return Cookie.get('JWT')
//   }
//   const login = (JWT) => {
//     setIsLogin(true)
//     Cookie.set('JWT', JWT)
//   }
//   const logout = () => {
//     setIsLogin(false)
//     Cookie.remove('ADMIN')
//     Cookie.remove('JWT')
//   }

//   const isLoginCheck = () => {
//     const JWT = getJWT()
//     if (JWT) {
//       setIsLogin(true)
//     } else {
//       setIsLogin(false)
//     }
//   }

//   const isAdminCheck = () => {
//     const JWT = getJWT()
//     if (JWT) {
//       const isAdmin = JSON.parse(Cookie.get('ADMIN'))
//       if (isAdmin) {
//         setIsAdmin(true)
//       } else {
//         setIsAdmin(false)
//       }
//     } else {
//       setIsAdmin(false)
//     }
//   }

//   return (
//     <AuthContext.Provider value={{
//       getJWT,
//       login,
//       logout,
//       isLoginCheck,
//       isLogin,
//       setIsAdmin,
//       isAdmin,
//       isAdminCheck
//     }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }