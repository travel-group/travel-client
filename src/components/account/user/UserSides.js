import { Link } from "react-router-dom"

const UserSides = () => {
    return (
        <div>
                <ul className="nav justify-content-center mt-3 mb-2">
                    <Link to="addpost" className="nav-item" style={{ textDecoration: 'none'}}>
                        <a className="nav-link" style={{ color: "" }}><b>Add post</b></a>
                    </Link>
                    <Link to="posts" className="nav-item" style={{ textDecoration: 'none'}}>
                        <a className="nav-link" href="#"><b>Your Posts</b></a>
                    </Link>
                    <Link to="edit" className="nav-item" style={{ textDecoration: 'none'}}>
                        <a className="nav-link" href="#"><b>Edit Your Profile</b></a>
                    </Link>
                </ul>
            </div> 
    );
};

export default UserSides