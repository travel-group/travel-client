import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SinglePost from "./components/SinglePost";
import SignUp from "./components/account/SignUp";
import Login from "./components/account/Login";
import LogOut from "./components/account/Logout";
import Nav from "./components/Nav";
import Post from "./components/posts/Post";
import AllPosts from "./components/posts/AllPosts";
import Countries from "./components/posts/Summer";
import Account from "./components/account/Account";
import Posts from "././components/account/user/Posts";
import AddPost from "./components/account/user/AddPost";
import EditProfile from "./components/account/user/EditProfile";
import EditPost from "./components/account/user/EditPost";

import Account2 from "./components/posts/Winter";
import Summer from "./components/posts/Summer";
import Winter from "./components/posts/Winter";


const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/" element={<Home />} />
        <Route path="/singlepost" element={<SinglePost />} />
        {/* <Route path="/account" element={<Account />} /> */}
        <Route path="/allposts" element={<AllPosts />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/summer" element={<Summer />} />
        <Route path="/winter" element={<Winter />} />



          <Route path="/account" element={<Account/>} >
            <Route path="/account/posts" element={<Posts/>}/>
            <Route path="/account/addpost" element={<AddPost/>}/>
            <Route path="/account/post/:id" element={<EditPost/>}/>
            <Route path="/account/user/:id" element={<EditProfile/>}/> 
          </Route> 


      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

// <BrowserRouter>
// {
  /* <Routes> */
// }
// {
  /* <SignUp /> */
// }
// {
  /* <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Posts />} />
        <Route path='/blog/:slug' element={<SinglePost />} />
      </Routes>
      <Footer /> */
// }
// </BrowserRouter>
