import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRequest } from "../hooks2/useRequest";

const EditPost = () => {
	const navigate = useNavigate()
	// const { id } = useParams()
	const sendRequest = useRequest()
	const [post, setPost] = useState({
		title: '',
		excerpt: '',
		description: ''
	})
	useEffect(() => {
		sendRequest (process.env.REACT_APP_API_URL + "/posts/:id ", {}, {}, { auth: true })
			.then(response => {
				if (response?.success) {
					setPost(response?.data)
					const postCategories = response?.data?.Categories?.map((c) => c.id)
					const postTags = response?.data?.Tags?.map((t) => t.id)
					setSelectedCategories(postCategories)
					setSelectedCountries(postTags)
				}
			})
	}, [])
	const descriptionRef = useRef()
	const imageRef = useRef()
	const titleRef = useRef()
	const [countries, setCountries] = useState([])
	const [categories, setCategories] = useState([])
	const [selectedCountries, setSelectedCountries] = useState([])
	const [selectedCategories, setSelectedCategories] = useState([])
	const handleTagToggle = (e) => {
		const tagsClone = [...selectedCountries]
		const value = parseInt(e.target.value)
		if (tagsClone.indexOf(value) === -1) {
			tagsClone.push(value)
		} else {
			tagsClone.splice(tagsClone.indexOf(value), 1)
		}
		setSelectedCountries(tagsClone)
	}
	const handleCategoryToggle = (e) => {
		const categoriesClone = [...selectedCategories]
		const value = parseInt(e.target.value)
		if (categoriesClone.indexOf(value) === -1) {
			categoriesClone.push(value)
		} else {
			categoriesClone.splice(categoriesClone.indexOf(value), 1)
		}
		setSelectedCategories(categoriesClone)
	}

    useEffect(() => {
    sendRequest(process.env.REACT_APP_API_URL + "/countries").then((response) => {
        setCountries(response?.data);
    });
    sendRequest(process.env.REACT_APP_API_URL + "/categories").then(
        (response) => {
        setCategories(response?.data);
        }
    );
    }, []);

	const addpost = () => {
		const formdata = new FormData();
		formdata.append('title', titleRef.current.value)
		formdata.append('description', descriptionRef.current.value)
		for (var i = 0; i < selectedCategories.length; i++) {
			formdata.append('categories[]', selectedCategories[i])
		}
		for (var i = 0; i < selectedCountries.length; i++) {
			formdata.append('countries[]', selectedCountries[i])
		}
		formdata.append('image', imageRef.current.files[0])
		sendRequest(process.env.REACT_APP_API_URL + "/posts/:id", {}, formdata, { auth: true }, 'put')
			.then((response) => {
				window.alert(response?.messages?.join(' '))
				if (response?.success) {
					navigate('/posts')
				}
			})
	}
	return (
		<div className="custombox clearfix">
			<h4 className="small-title">Edit Post</h4>
			<div className="row">
				<div className="col-lg-12">
					<div className="form-wrapper">
						<input type={"text"}
							onChange={(e) => { setPost({ ...post, title: e.target.value }) }}
							value={post?.title} ref={titleRef} className="form-control" placeholder="Title" />
						<h4>Select Post Countries</h4>
						<div className="container-fluid">
							<div className="row mb-4">
								{
									countries?.map((countries, i) => {
										return (
											<div key={i} className='my-2 col-md-4 col-lg-3'>
												<input
													checked={selectedCountries.includes(countries.id)}
													onChange={handleTagToggle} type='checkbox' value={countries.id} id={`countries-${countries.id}`} />&nbsp;
												<label htmlFor={`countries-${countries.id}`}>{countries}</label>
											</div>
										)
									})
								}
							</div>
						</div>

						<h4>Select Post Categories</h4>
						<div className="container-fluid">
							<div className="row mb-4">
								{
									categories?.map((categories, i) => {
										return (
											<div key={i} className='my-2 col-md-4 col-lg-3'>
												<input
													checked={selectedCategories.includes(categories.id)}
													onChange={handleCategoryToggle} type='checkbox' value={categories.id} id={`categories-${categories.id}`} />&nbsp;
												<label htmlFor={`categories-${categories.id}`}>{categories}</label>
											</div>
										)
									})
								}
							</div>
						</div>
						{
							post?.picture && <img src={post?.picture} width='100' style={{ height: 'auto' }} />
						}
						<input type={"file"} ref={imageRef} className="form-control" placeholder="picture" />
						<textarea ref={descriptionRef} className="form-control" placeholder="Your Article" defaultValue={post?.description}></textarea>
						<button onClick={addpost} type="button" className="btn btn-primary">Submit</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditPost;
