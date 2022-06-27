import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';






export default function ActionAreaCard() {
    return (
        <div>
            <div >
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="#">All posts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">mohannad</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">aymen</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">mohammed</a>
                    </li>
                </ul>
            </div>
            <div className="d-flex justify-content-evenly flex-wrap">
                <Link to="/singlepost" className="card m-4" style={{ width: "18rem", backgroundColor: "", textDecoration: "none", color: "black" }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://cdn.britannica.com/49/139549-050-D1B8F018/Sanaa-Al-Salih-Mosque-Yemen-background.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Yemen
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This article is about the country in Western Asia. For other uses, see Yemen (disambiguation).
                                    "Yemeni" redirects here. For the, see Yemeni,
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link to="/singlepost" className="card m-4" style={{ width: "18rem", backgroundColor: "", textDecoration: "none", color: "black" }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://static.timesofisrael.com/www/uploads/2022/04/AP21033381034445-e1651312467548.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    TURKEY
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This article is about the country. For the bird, see Turkey (bird). For other uses, see Turkey (disambiguation).
                                    "Türkiye" and "Turkiye" redirect here.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link to="/singlepost" className="card m-4" style={{ width: "18rem", backgroundColor: "", textDecoration: "none", color: "black" }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.ld-export.com/upload/ld-export-f03254-large.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    saudi arabia
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Saudi Arabia is considered both a regional and middle power The Saudi economy is the largest in the Middle East
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link to="/singlepost" className="card m-4" style={{ width: "18rem", backgroundColor: "", textDecoration: "none", color: "black" }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.boldbusiness.com/wp-content/uploads/2017/08/Dubai-UAE-1.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    UAE
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    The United Arab Emirates is an elective monarchy formed from a federation of seven emirates,
                                    consisting of Abu Dhabi (the capital),
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link to="/singlepost" className="card m-4" style={{ width: "18rem", backgroundColor: "", textDecoration: "none", color: "black" }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.state.gov/wp-content/uploads/2022/02/Kuwait-2323x1406.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    kuwait
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Kuwait is an emirate. The Emir is the head of state and the Al Sabah is the ruling family which
                                    dominates the country's political system
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link to="/singlepost" className="card m-4" style={{ width: "18rem", backgroundColor: "", textDecoration: "none", color: "black" }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.unitedtowers.com/Media/2021/04/08/image-LlJtrYkN3ka1lCVqhfwyrw.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Canada
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Canada is a parliamentary democracy and a constitutional monarchy in the Westminster tradition.
                                    The country's head of government
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link to="/singlepost" className="card m-4" style={{ width: "18rem", backgroundColor: "", textDecoration: "none", color: "black" }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.lufthansa.com/content/dam/lh/images/pixels_variations/c-1835470884-87780.transform/lh-dcep-transform-width-1440/img.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    United States
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    The United States is a federal republic with three separate branches of government, including a
                                    bicameral legislature. It is a founding
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link to="/singlepost" className="card m-4" style={{ width: "18rem", backgroundColor: "", textDecoration: "none", color: "black" }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://cdn.theculturetrip.com/wp-content/uploads/2016/12/1280px-australia_day.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    australia
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Australia is a highly developed country with a high-income economy; it has the world's
                                    thirteenth-largest economy
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
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