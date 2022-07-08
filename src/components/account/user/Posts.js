import React, { useEffect, useState } from "react"
import { useRequest } from "../hooks2/useRequest"
import { Link } from "react-router-dom"

const Posts = () => {

    const sendRequest = useRequest()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        sendRequest(`${process.env.REACT_APP_API_URL}/users/posts`, {}, {}, {
            auth: true,
        }, 'GET').then((response) => {
            if (response?.success) {
                setPosts(response.data)
            }
        })
    }, [])

    const deletPost = (id) => {
        if (window.confirm('Do you want to delete this post ?')) {
            sendRequest(`${process.env.REACT_APP_API_URL}/posts/${id}`, {}, {}, {
                auth: true,
            }, 'DELETE').then((response) => {
                console.log(response)
                if (response?.success) {
                    const currentPosts = [...posts]
                    const filteredPosts = currentPosts.filter((post) => post.id !== id)
                    setPosts(filteredPosts)
                }
            })
        }
    }

    return (
        <>
        <table className="w-100 table table-striped">
            <thead>
                <tr>
                    <th>Post Title</th>
                    <th>Delete / Edit</th>
                    {/* <th>Category</th>
                    <th>Country</th> */}
                </tr>
            </thead>
            <tbody>
                {posts.map((post, i) => {
                    return (
                        <tr key={i}>
                            <td>{post?.title}</td>
                            <td style={{whiteSpace: 'nowrap'}}>
                                <button onClick={() => { deletPost(post.id) }} className="btn btn-primary" >Delete</button>
                                <Link to={`/account/edit/${post.id}`}>
                                    <button className="btn btn-primary" style={{ marginLeft: "2px" }}>Edit</button >
                                </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default Posts