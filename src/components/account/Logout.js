import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

const LogOut = () => {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        auth.logout()
        window.alert('Logged Out')
        navigate('/login')
    }, [])
    return (
        <>
            
        </>
    )
}

export default LogOut