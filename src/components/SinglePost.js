import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRequest } from '../hooks/useRequest'



const SinglePost = () => {

    const { id } = useParams();
    const [post, setPost] = useState();
    const sendRequest = useRequest()
    console.log(post)

    useEffect(() => {
        sendRequest(`${process.env.REACT_APP_API_URL}/posts/${id}`, {}, {}, {
            auth: true,
        }, 'GET').then((response) => {
            if (response?.success) {
                setPost(response.data)
            }
        })
    }, [])


    return (
        <div className="">
            <div>
                <ul className="nav justify-content-center mt-3 mb-2">
                    <Link to="/allposts" className="nav-item" style={{ textDecoration: 'none' }}>
                        <a className="nav-link" style={{ color: "" }}><b>All posts</b></a>
                    </Link>
                    <Link to="/winter" className="nav-item" style={{ textDecoration: 'none' }}>
                        <a className="nav-link" href="#"><b>Winter areas</b></a>
                    </Link>
                    <Link to="/summer" className="nav-item" style={{ textDecoration: 'none' }}>
                        <a className="nav-link" href="#"><b>Summer areas</b></a>
                    </Link>
                </ul>
            </div>
            {post ?
                <div className="d-flex justify-content-evenly flex-wrap">
                    <a className="card m-4" style={{ width: "18rem", backgroundColor: "", textDecoration: "none", color: "black" }}>
                        <Card sx={{ maxWidth: 345 }}>
                            {/* <CardActionArea> */}
                            <CardMedia
                                component="img"
                                height="140"
                                image={post.image}
                                alt={post.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {post.description}
                                </Typography>
                            </CardContent>
                            {/* </CardActionArea> */}
                        </Card>
                    </a>
                </div>
                :
                null
            }

            < div className="d-flex justify-content-center mb-3">
                <Link to="/allposts" type="button" className="btn btn-primary">Back</Link>
            </div>
        </div>
    )
}
export default SinglePost;




















