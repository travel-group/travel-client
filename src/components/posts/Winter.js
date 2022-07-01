import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
// import Admin from "./admin/Admin"

const Winter = () => {


    return (
        <div>
            <div>
                <ul className="nav justify-content-center mt-3 mb-2">
                    <Link to="/allposts" className="nav-item">
                        <a className="nav-link" style={{ color: "" }}><b>All posts</b></a>
                    </Link>
                    <Link to="/winter" className="nav-item">
                        <a className="nav-link" href="#"><b>Winter areas</b></a>
                    </Link>
                    <Link to="/summer" className="nav-item">
                        <a className="nav-link" href="#"><b>Summer areas</b></a>
                    </Link>
                </ul>
            </div>
            <div className="d-flex justify-content-evenly flex-wrap">
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
    )
}

export default Winter