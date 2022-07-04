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
  if (!auth.isAuthenticated) {
    navigate('/login')
    console.log('---no auth---------')

  }
  //  }, [])
  if (auth?.user?.admin == false) {

    console.log('--ppppppppppppp---------')

  }


  return (
    <div className="my-5">
      asdfghjk
    </div>
  )
=======
    // console.log(auth,'------------')
    useEffect(() => {
        if (!auth.isAuthenticated) {
          navigate('/login')
          // console.log('---no auth---------')

        }
      }, [])
        // if (auth?.user?.admin==false) {
          
          //   console.log('--ppppppppppppp---------')
          
          // }
          
          
          return (
            <div className="my-5">
            {(auth?.user?.admin == false) && (<User />)}
        </div>
    )
>>>>>>> 601b70885a970a89c5c2f67d33429f458b37a688
}

export default Account