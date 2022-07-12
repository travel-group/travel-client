import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRequest } from '../../hooks/useRequest'




const AllPosts = () => {

    const [posts, setPosts] = useState([]);
    const sendRequest = useRequest()
    console.log(posts)

    useEffect(() => {
        sendRequest(`${process.env.REACT_APP_API_URL}/posts`, {}, {}, {
            auth: true,
        }, 'GET').then((response) => {
            if (response?.success) {
                setPosts(response.data)
            }
        })
    }, [])

    return (
        <div>
            <div>
                <ul className="nav justify-content-center mt-3 mb-2">
                    <Link to="/allposts" className="nav-item" style={{ textDecoration: 'none' }}>
                        <a className="nav-link"><b>All posts</b></a>
                    </Link>
                    <Link to="/winter" className="nav-item" style={{ textDecoration: 'none' }}>
                        <a className="nav-link" href="#" ><b>Winter areas</b></a>
                    </Link>
                    <Link to="/summer" className="nav-item" style={{ textDecoration: 'none' }}>
                        <a className="nav-link" href="#"><b>Summer areas</b></a>
                    </Link>
                    <Link to="/other" className="nav-item" style={{ textDecoration: 'none' }}>
                        <a className="nav-link" href="#"><b>Other</b></a>
                    </Link>
                </ul>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                {posts && posts.length ? posts.map((post, i) => {
                    return (
                        < div className="d-flex justify-content-evenly flex-wrap">
                            <Link to={"/singlepost/"+post.id} className="card m-4" style={{ width: "18rem", backgroundColor: "", textDecoration: "none", color: "black" }}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
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
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </div>
                    )
                })

                    :
                    null
                }
            </div>
        </div >
    );
}


export default AllPosts;