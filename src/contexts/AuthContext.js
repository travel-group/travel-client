import { createContext, useState } from "react";
export const AuthContext = createContext({
    isAuthenticated: false,
    token: '',
    user: '',
    login: (token) => {},
    logout: () => {}
})
    
    export const AuthProvider = (props) => {
    const [token, setToken] = useState(window.localStorage.getItem('token'))
    const [isAuthenticated, setIsAuthenticated] = useState(!!token)
    const [user, setUser] = useState(JSON.parse( window.localStorage.getItem('user') || '{}' ))
    console.log("user: ", user);
    
    const login = (response) => {
        console.log(response,'response -------')
        setToken(response.token)
        setUser(response.user)
        console.log("response.user: ", response.user);
        window.localStorage.setItem('token', response.token)
        window.localStorage.setItem('user', JSON.stringify(response.user))
        setIsAuthenticated(true)
    }
    const logout = () => {
        setToken(null)
        setUser({})
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
        setIsAuthenticated(false)
    }
    return <AuthContext.Provider value={{
        login,
        isAuthenticated,
        token,
        logout,
        user
    }}>
        {props.children}
    </AuthContext.Provider>
}