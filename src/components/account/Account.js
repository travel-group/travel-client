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
  if (auth?.user?.admin == false) {
    console.log('--ppppppppppppp---------')
  }

          
          return (
            <div className="my-5">
            {(auth?.user?.admin == false) && (<User />)}
        </div>
    )
}

export default Account