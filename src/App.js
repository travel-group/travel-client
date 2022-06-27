import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SinglePost from "./components/SinglePost";
import Login from "./components/account/Login";
import Nav from "./components/Nav";
import Posts from "./components/Posts";
import SignUp from "./components/account/SignUp";
import Account from "./components/account/Account";




const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/singlepost' element={<SinglePost />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;






// <BrowserRouter>
{/* <Routes> */ }
{/* <SignUp /> */ }
{/* <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Posts />} />
        <Route path='/blog/:slug' element={<SinglePost />} />
      </Routes>
      <Footer /> */}
    // </BrowserRouter>
