import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';



export default function Summer() {
    return (
        <div>
            <div>
                <ul className="nav justify-content-center mt-3 mb-2">
                    <Link to="/allposts" className="nav-item" style={{ textDecoration: 'none'}}>
                        <a className="nav-link" style={{ color: "" }}><b>All posts</b></a>
                    </Link>
                    <Link to="/winter" className="nav-item" style={{ textDecoration: 'none'}}>
                        <a className="nav-link" href="#"><b>Winter areas</b></a>
                    </Link>
                    <Link to="/summer" className="nav-item" style={{ textDecoration: 'none'}}>
                        <a className="nav-link" href="#"><b>Summer areas</b></a>
                    </Link>
                    <Link to="/other" className="nav-item" style={{ textDecoration: 'none'}}>
                        <a className="nav-link" href="#"><b>Other</b></a>
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
            </div>
        </div>
    )
}
