import { Link } from "react-router-dom";

const Nav = () => {
    return (

        <nav className=" container-fluid bg-black px-5">
            <div className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between">
                {/* <div className="container-fluid">
                <Link to="/" className="navbar-brand"><b>Travel</b></Link>
            </div> */}
                {/* <div className="">
                    <img src="blob:https://web.whatsapp.com/222d8cf2-7721-46c2-99eb-876805066f6f" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="65px" height="65px" loading="lazy" />
                </div> */}
                <Link to="/" className="">
                    <img src={process.env.PUBLIC_URL + "./assert/travel.png"} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="80px" height="80px" loading="lazy" />
                </Link>
                <div className="d-flex justify-content-center">
                    <Link to="/" className="btn " style={{ color: "white" }} >Home</Link>
                    <Link to="/allposts" className="btn " style={{ color: "white" }} >Posts</Link>
                    {/* <Link to="/singlepost" className="btn " style={{ color: "white" }} >Single post</Link> */}
                    <li className="nav-item dropdown d-flex justify-content-center align-items-center">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/account" className="dropdown-item" style={{ color: "black" }} >My Account</Link>
                            <Link to="/signup" className="dropdown-item" style={{ color: "black" }} >Sign Up</Link>
                            <Link to="/login" className="dropdown-item" style={{ color: "black" }} >Login</Link>
                            <Link to='/logout' className="dropdown-item" style={{ color: "black" }} >Logout</Link>
                        </ul>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Nav;






