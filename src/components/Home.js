
import React from "react";



export const Home = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://expatguideturkey.com/wp-content/uploads/2020/10/which-ways-may-be-followed-in-making-long-distance-travel.jpg" className="d-block w-100" alt="..." style={{ width: "1500px", height: "730px" }} />
                </div>
                <div className="carousel-item">
                    <img src="https://lnt.ma/wp-content/uploads/2021/03/travel.jpg" className="d-block w-100" alt="..." style={{ width: "1500px", height: "730px" }} />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}


export default Home;






        // <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        //     <div className="carousel-inner">
        //         <div className="carousel-item active">
        //             <img src={process.env.PUBLIC_URL + "https://expatguideturkey.com/wp-content/uploads/2020/10/which-ways-may-be-followed-in-making-long-distance-travel.jpg"} className="d-block w-100" alt="..." style={{ width: "1500px", height: "950px" }} />
        //         </div>
        //         <div className="carousel-item active">
        //             <img src={process.env.PUBLIC_URL + "https://assets.weforum.org/community/image/r7FE4wrRxEfwwPRwPAxClIzn3BDY12OWBk0KG9EYK0A.jpg"} className="d-block w-100" alt="..." style={{ width: "1500px", height: "950px" }} />
        //         </div>
        //     </div>
        // </div>