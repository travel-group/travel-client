import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
// import Admin from "./admin/Admin"
import User from "./user/User"

const Account = () => {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!auth.isAuthenticated) {
          navigate('/login')
        }
    }, [])

    return (
        <div>

          {(auth?.user?.admin == false) && (<User />)}

        </div>
    )
}

export default Account