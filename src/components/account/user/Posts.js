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
        <table className="w-70 table table-striped">
            <thead>
                <tr>
                    <th>Post Title</th>
                    <th>Category</th>
                    <th>Country</th>
                    <th>Delete / Edit</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post, i) => {
                    console.log(posts)
                    return (
                        <tr key={i}>
                            <td>{post?.title}</td>
                            <td>{post.category.name
                            // post?.categories?.map(( c , i )=>{
                            //     return(
                            //         <React.Fragment key={i}>
                            //         <span key={i}>{c.name}</span>
                            //         {(i < post.categories.length - 1) && <>, </>}
                            //         </React.Fragment>
                            //     )
                            // })
                            }
                            </td>
                            <td>{post.country.country_name
                            // post?.countries?.map(( c , i )=>{
                            //     return(
                            //         <React.Fragment key={i}>
                            //         <span key={i}>{c.country_name}</span>
                            //         {(i < post.countries.length - 1) && <>, </>}
                            //         </React.Fragment>
                            //     )
                            // })
                            }</td>
                            <td >
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