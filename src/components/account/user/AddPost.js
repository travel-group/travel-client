import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRequest } from "../hooks2/useRequest"

const AddPost = () => {
	const navigate = useNavigate()
	const Ref = useRef()
	const imageRef = useRef()
	const titleRef = useRef()
	const [countries, setCountries] = useState([])
	const [categories, setCategories] = useState([])
	const [selectedCountries, setSelectedCountries] = useState([])
	const [selectedCategories, setSelectedCategories] = useState([])
	const handleCountryToggle = (e) => {
		const countriesClone = [...selectedCountries]
		if (e.target.checked) {
			countriesClone.push(e.target.value)
		} else {
			countriesClone.splice(countriesClone.indexOf(e.target.value), 1)
		}
		setSelectedCountries(countriesClone)
	}
	const handleCategoryToggle = (e) => {
		const categoriesClone = [...selectedCategories]
		if (e.target.checked) {
			categoriesClone.push(e.target.value)
		} else {
			categoriesClone.splice(categoriesClone.indexOf(e.target.value), 1)
		}
		setSelectedCategories(categoriesClone)
	}

	useEffect(() => {
		sendRequest(process.env.REACT_APP_API_URL + "/countries")
			.then((response) => {
				setCountries(response?.countries)
			})
		sendRequest(process.env.REACT_APP_API_URL + "/categories")
			.then((response) => {
				console.log(response)
				setCategories(response?.categories)
			})
	}, [])

	const sendRequest = useRequest()
	const addpost = () => {
		const formdata = new FormData();
		formdata.append('title', titleRef.current.value)
		formdata.append('description', Ref.current.value)
		for (var i = 0; i < selectedCategories.length; i++) {
			formdata.append('categories[]', selectedCategories[i])
		}
		for (var i = 0; i < selectedCountries.length; i++) {
			formdata.append('countries[]', selectedCountries[i])
		}
		formdata.append('image', imageRef.current.files[0])
		sendRequest(process.env.REACT_APP_API_URL + "/posts/add", {}, formdata, { auth: true }, 'post')
			.then((response) => {
				window.alert(response?.messages?.join(' '))
				if (response?.success) {
					navigate('/posts')
				}
			})
	}
	console.log(`categories`,categories)
	return (
		<div className="custombox clearfix">
			<h4 className="small-title">Create Post</h4>
			<div className="row">
				<div className="col-lg-12">
					<div className="form-wrapper">
						<input type={"text"} ref={titleRef} className="form-control" placeholder="Title" />
						<h4>Select Post countries</h4>
						<div className="container-fluid">
							<div className="row mb-4">
								{
									countries?.map((country, i) => {
										return (
											<div key={i} className='my-2 col-md-4 col-lg-3'>
												<input onChange={handleCountryToggle} type='checkbox' value={country?.id} id={`countries-${country.id}`} />&nbsp;
												<label htmlFor={`countries-${country.id}`}>{country?.country_name}</label>
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
									categories?.map((category, i) => {
										return (
											<div key={i} className='my-2 col-md-4 col-lg-3'>
												<input onChange={handleCategoryToggle} type='checkbox' value={category.id} id={`categories-${category.id}`} />&nbsp;
												<label htmlFor={`categories-${category.id}`}>{category?.name}</label>
											</div>
										)
									})
								}
							</div>
						</div>
						
						<input type={"file"} ref={imageRef} className="form-control" placeholder="picture" />
						<textarea ref={Ref} className="form-control" placeholder="Your Article"></textarea>
						<button onClick={addpost} type="button" className="btn btn-primary">Submit</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddPost