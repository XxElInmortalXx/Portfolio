import Cookie from 'js-cookie';

export const authFunctions = {
  getJWT: () => Cookie.get('JWT'),
  login: (JWT) => Cookie.set('JWT', JWT, {
    sameSite: 'none',
    secure: true,
  }),
  logout: () => {
    Cookie.remove('JWT');
    Cookie.remove('ADMIN');
  },
  checkUser: () => {
    const JWT = Cookie.get('JWT');
    const isAdmin = JWT ? Cookie.get('ADMIN') : false;
    return { isLoggedIn: !!JWT, isAdmin };
  },
};
