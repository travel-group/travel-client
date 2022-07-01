import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';




const SinglePost = () => {
    return (
        <div className="">
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
                <a className="card m-4" style={{ width: "18rem", backgroundColor: "", textDecoration: "none", color: "black" }}>
                    <Card sx={{ maxWidth: 345 }}>
                        {/* <CardActionArea> */}
                        <CardMedia
                            component="img"
                            height="140"
                            image=""
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                test
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                test test test test test test test test test test test test test test test test test test
                            </Typography>
                        </CardContent>
                        {/* </CardActionArea> */}
                    </Card>
                </a>
            </div>
            < div className="d-flex justify-content-center mb-3">
                <Link to="/allposts" type="button" className="btn btn-primary">Back</Link>
            </div>
        </div>
    )
}
export default SinglePost;




















