import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import User from "./user/User"
// import Admin from "./admin/Admin"
// import allPosts from "../posts/AllPosts"

const Account = () => {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    // console.log(auth,'------------')
    useEffect(() => {
        if (!auth.isAuthenticated) {
          navigate('/login')
          // console.log('---no auth---------')

        }
    }, [])


    console.log(auth?.user)

    if (auth?.user?.admin==false) {

      console.log('--ppppppppppppp---------')}

    return (
        <div>
        {/* <User/> */}
        {/* sdfghjkl; */}
          {(auth?.user?.admin === false) && (<User />)}
        </div>
    )
}

export default Account