import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
// import Admin from "./admin/Admin"
import User from "./user/User"

const Account = () => {

  const auth = useContext(AuthContext)
  const navigate = useNavigate()

<<<<<<< HEAD
  console.log(auth, '------------')
  // useEffect(() => {
=======
  useEffect(() => {
>>>>>>> e060dda245e5950a77b1bc42f9dc711b41ad8f98
  if (!auth.isAuthenticated) {
    navigate('/login')
  }
    }, [])
  if (auth?.user?.admin == false) {
    console.log('--ppppppppppppp---------')
  }

<<<<<<< HEAD

  return (
    <div className="my-5">
      asdfghjk
    </div>
  )
    // console.log(auth,'------------')
    // useEffect(() => {
    //     if (!auth.isAuthenticated) {
    //       navigate('/login')
    //       // console.log('---no auth---------')

    //     }
    //   }, [])
        // if (auth?.user?.admin==false) {
          
          //   console.log('--ppppppppppppp---------')
          
          // }
          
=======
>>>>>>> e060dda245e5950a77b1bc42f9dc711b41ad8f98
          
          return (
            <div className="my-5">
            {(auth?.user?.admin == false) && (<User />)}
        </div>
    )
}

export default Account