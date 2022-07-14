import { Link } from "react-router-dom"

const AdminSides = () => {
    return (
        <div>
                <ul className="nav justify-content-center mt-3 mb-2">
                    <Link to="add-post" className="nav-item" style={{ textDecoration: 'none'}}>
                        <a className="nav-link" ><b>Add post</b></a>
                    </Link>
                    <Link to="posts" className="nav-item" style={{ textDecoration: 'none'}}>
                        <a className="nav-link" ><b>All Posts</b></a>
                    </Link>
                    <Link to="adminposts" className="nav-item" style={{ textDecoration: 'none'}}>
                        <a className="nav-link" ><b>Your Posts</b></a>
                    </Link>
                    <Link to="users" className="nav-item" style={{ textDecoration: 'none'}}>
                        <a className="nav-link" ><b>Users</b></a>
                    </Link>
                    <Link to="countries" className="nav-item" style={{ textDecoration: 'none'}}>
                        <a className="nav-link" ><b>Countries</b></a>
                    </Link>
                    <Link to="categories" className="nav-item" style={{ textDecoration: 'none'}}>
                        <a className="nav-link" ><b>Categories</b></a>
                    </Link>
                </ul>
            </div> 
    );
};

export default AdminSides