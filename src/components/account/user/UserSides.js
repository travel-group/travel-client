import { Link } from "react-router-dom"
const UserSides = () => {
    return (
        <div>
                <ul className="nav justify-content-center mt-3 mb-2">
                    <Link to="addpost" className="nav-item" style={{ textDecoration: 'none'}}>
                        <a className="nav-link" ><b>Add post</b></a>
                    </Link>
                    <Link to="posts" className="nav-item" style={{ textDecoration: 'none'}}>
                        <a className="nav-link" ><b>Your Posts</b></a>
                    </Link>
                    <Link to="edituser" className="nav-item" style={{ textDecoration: 'none'}}>
                        <a className="nav-link" ><b>Edit Your Profile</b></a>
                    </Link>
                </ul>
            </div> 
    );
};
export default UserSides