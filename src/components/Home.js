
import React from "react";



export const Home = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item">
                    <img src="https://static2-viaggi.corriereobjects.it/wp-content/uploads/2021/01/iata-travel-pass-passaporto-sanitario-per-volare-in-aereo.jpg?v=419953" className="d-block w-100" alt="..." style={{ width: "1500px", height: "730px" }} />
                </div>
                <div className="carousel-item active">
                    <img src="https://media.istockphoto.com/photos/couple-relax-on-the-beach-enjoy-beautiful-sea-on-the-tropical-island-picture-id1160947136?k=20&m=1160947136&s=612x612&w=0&h=TdExAS2--H3tHQv2tc5woAl7e0zioUVB5dbIz6At0I4=" className="d-block w-100" alt="..." style={{ width: "1500px", height: "730px" }} />
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