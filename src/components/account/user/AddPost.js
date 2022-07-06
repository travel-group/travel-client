import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRequest } from "../hooks2/useRequest"

const AddPost = () => {
	const navigate = useNavigate()
	const descriptionRef = useRef()
	const imageRef = useRef()
	const titleRef = useRef()
	const categorieseRef = useRef()
	const countriesRef = useRef()
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
				setCountries(response?.data)
			})
		sendRequest(process.env.REACT_APP_API_URL + "/categories")
			.then((response) => {
				setCategories(response?.data)
			})
	}, [])

	const sendRequest = useRequest()
	const addpost = () => {
		const formdata = new FormData();
		formdata.append('title', titleRef.current.value)
		formdata.append('description', descriptionRef.current.value)
		formdata.append('category_id', categorieseRef.current.value)
		formdata.append('country_id', countriesRef.current.value)
		formdata.append('image', imageRef.current.files[0])
		sendRequest(process.env.REACT_APP_API_URL + "/posts/add", {}, formdata, { auth: true }, 'POST')
			.then((response) => {
				console.log(response)
				window.alert(response?.messages)
				if (response?.success) {
					navigate('/account/posts')
				}
			})
	}
	return (
		<div className="custombox clearfix">
			<h5 className="small-title mb-5">Create Post</h5>
			<div className="row">
				<div className="col-lg-12">
					<div className="form-wrapper">
						<input type={"text"} ref={titleRef} className="form-control mb-5" placeholder="Title" />
						<h5>Select Post Country</h5>
						<div className="container-fluid">
							<div className="row mb-4">
							    <div  className="my-2 col-md-4 col-lg-3">
							        <select className="form-select" ref={countriesRef} onClick={handleCountryToggle}>
										<optgroup label="Select Country">
												{countries?.map((country, i) => {
									            	return (
                                                        <option value={country.id} key={i}>{country?.country_name}</option>
										            )
									              })
								                }
							            </optgroup>
							        </select>
							    </div>
							</div>
						</div>

						<h5>Select Post Category</h5>
						<div className="container-fluid">
							<div className="row mb-4">
								{
									categories?.map((category, i) => {
										return (
											<div key={i} className='my-2 col-md-4 col-lg-3'>
												<input ref={categorieseRef} onChange={handleCategoryToggle}  type='checkbox' value={category.id} id={`categories-${category.id}`} />&nbsp;
												<label htmlFor={`categories-${category.id}`}>{category?.name}</label>
											</div>
										)
									})
								}
							</div>
						</div>
						
						<input type={"file"} ref={imageRef} className="form-control my-5 col-md-4 col-lg-3" placeholder="image" />
						<textarea ref={descriptionRef} className="form-control" placeholder=" Description"></textarea>
						<button onClick={addpost} type="button" className="btn btn-primary mt-5 col-md-4 col-lg-3">Submit</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddPost