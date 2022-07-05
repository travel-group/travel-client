import { Routes, Route } from "react-router-dom";
import Posts from "./Posts";
import AddPost from "./AddPost";
import EditProfile from "./EditProfile";
import EditPost from "./EditPost";

const User = () => {
    return (
    <>
        <div className="container">
        <div className="row">
            <div className="col-lg-9">
            <Routes>
                <Route exact path="/" element={<Posts />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/addpost" element={<AddPost />} />
                <Route path="/edituser" element={<EditProfile />} />
                <Route path="/edit" element={<EditPost />} />
            </Routes>
            </div>
        </div>
        </div>
    </>
    );
};

export default User;

