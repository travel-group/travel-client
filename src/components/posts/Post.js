import * as React from 'react';
import { Link } from 'react-router-dom';


export default function posts() {
    return (
        <div>
            <div >
                <ul className="nav justify-content-center mt-5 mb-5">
                    <Link to='/allposts' className="nav-item">
                        <a className="nav-link" href="#">All posts</a>
                    </Link>
                    <Link to = '/countries' className="nav-item">
                        <a className="nav-link" href="#">Countries</a>
                    </Link>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Winter areas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Summer areas</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}


















// import React from "react";
// import { Link } from "react-router-dom";



// export const Posts = () => {
//     return (
//         <div>
//             <div className="d-flex justify-content-center">
//                 <h1>
//                     welcom to Posts
//                 </h1>
//             </div>
//             <div className="d-flex justify-content-center">
//                 <h1>
//                     If you want to go to SinglePost,
//                     <Link to="/SinglePost">click here</Link>
//                 </h1>
//             </div>
//             < div className="d-flex justify-content-center">
//                 <Link to="/" type="button" className="btn btn-primary">Back</Link>
//             </div>
//         </div>
//     )
// }


// export default Posts;