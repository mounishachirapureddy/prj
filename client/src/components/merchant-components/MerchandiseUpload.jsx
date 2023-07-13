import React, { useState } from 'react'
import Header from './Header'
import Hero from '../gaming-vendor-components/Hero'
import Footer from '../general-components/Footer'
import useFetch from '../../hooks/useFetch-merchant'
import Select from 'react-select'
import FullpageLoader from '../general-components/FullpageLoader'
import { useSelector } from 'react-redux'

const MerchandiseUpload = () => {
    const [fetchData ,{loading}] = useFetch();
    const merchantState = useSelector((state) => state.merchantReducer);
    const merchant = merchantState.merchant;

    const initialFormData = {
        title: "",
        description: "",
        brand: "",
        price: "",
        count: "",
        image:null,
        category: []
    };
    const [formData, setFormData] = useState(initialFormData);
    const [checked, setChecked] = useState(false);

    const handleCategoryChange = (selectedOptions) => {
        const selectedValues = selectedOptions.map(option => option.value);
        setFormData({
          ...formData,
          category: selectedValues
        });
      };

    const handleChange = async(e) => {
        if (e.target.name === "image") {

            console.log(e.target.files[0])
            setFormData({
              ...formData,
              [e.target.name]: e.target.files[0],
            });
          } else {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            });
          }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('merchant-token')
        const formDataToSend = new FormData();

        formDataToSend.append("title", formData.title);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("brand", formData.brand);
        formDataToSend.append("price", formData.price);
        formDataToSend.append("count", formData.count);
        // formDataToSend.append("category", category);
        formData.category.forEach(category => {
            formDataToSend.append("category", category);
        });
        formDataToSend.append("featured",checked);

        if(formData.image) formDataToSend.append("image", formData.image , formData.image.name);

        const config = { url: `/merchandise/add`, method: "post", data: formDataToSend, headers: { Authorization: token}, params: { id: merchant._id } };
        await fetchData(config).then(() => {
            setFormData(initialFormData)
            // props.onFormSubmit();
        })
            .catch(error => {
                // Handle the error here, e.g., log the error or display an error message
                console.error('Error adding merchandises:', error);
            });
    }

    const handleFeatured = () =>{
        setChecked(prev => !prev)
    }

  return (
    <>
    <Header />
    <Hero />
    {loading ?<FullpageLoader /> : <div className="filters_full version_2 mt-3">
        <div className="container clearfix">
            <div className="pb-3 clearfix">
                <a href="/merchant-dashboard" className="btn_1"><i className="bi bi-cart-check-fill"></i> Back to Product List</a>
{/* <!--
                <div className="custom_select">
                    <select name="sort" id="sort">
                        <option value="popularity" selected="selected">Sort by Popularity</option>
                        <option value="rating">Sort by Newness</option>
                        <option value="date">Sort by Trending</option>
                    </select>
                </div>
--> */}
                
            </div>
        </div>
        <div className="collapse" id="collapseSearch">
            <div className="search_bar_list">
                <input type="text" className="form-control" placeholder="Search" />
            </div>
        </div>
        {/* <!-- /collapseSearch --> */}
    {/* </div> */}
        <div className="container margin_30_40">
            <div className="row">
            {/* <!-- <div className="col-lg-3">
                    <div className="main_profile edit_section">
                        <div className="author">
                            <div className="author_thumb veryfied">
                                <i className="bi bi-check"></i>
                                <figure>
                                    <img src="img/avatar-user.png" data-src="img/avatar1.jpg" alt="" className="lazy" width="100" height="100">
                                </figure>
                            </div>
                        </div>
                        <h1>@Merchant_Name</h1>
                        <ul>
                            <li><a href="#"><i className="bi bi-person"></i>Edit profile</a></li>
                            <li><a href="merchant-inventory.html"><i className="bi bi-file-earmark-arrow-up"></i>My Products</a></li>
                            <li><a href="#" className="active"><i className="bi bi-file-earmark-arrow-up"></i>Upload New Product</a></li>
                            <li><a href="#"><i className="bi bi-gear"></i>Account settings</a></li>
                            <li><a href="index.html"><i className="bi bi-box-arrow-right"></i>Log out</a></li>
                        </ul>
                    </div>
                </div>--> */}
                
                {/* <aside className="col-lg-3" id="sidebar_fixed"> --filter
	                <div className="filter_col">
	                    <div className="inner_bt"><a href="#" className="open_filters"><i className="bi bi-x"></i></a></div>
	                    <div className="filter_type">
	                        <h4><a href="#filter_1" data-bs-toggle="collapse" className="opened">Categories</a></h4>
	                        <div className="collapse show" id="filter_1">
	                            <ul>
	                                <li>
	                                    <label className="container_check">Art <small>112</small>
	                                        <input type="checkbox" />
	                                        <span className="checkmark"></span>
	                                    </label>
	                                </li>
	                                <li>
	                                    <label className="container_check">Electronics <small>90</small>
	                                        <input type="checkbox" />
	                                        <span className="checkmark"></span>
	                                    </label>
	                                </li>
	                                <li>
	                                    <label className="container_check">Stationary <small>140</small>
	                                        <input type="checkbox" />
	                                        <span className="checkmark"></span>
	                                    </label>
	                                </li>
	                                <li>
	                                    <label className="container_check">Music <small>43</small>
	                                        <input type="checkbox" />
	                                        <span className="checkmark"></span>
	                                    </label>
	                                </li>
	                                <li>
	                                    <label className="container_check">Wellness <small>23</small>
	                                        <input type="checkbox" />
	                                        <span className="checkmark"></span>
	                                    </label>
	                                </li>
	                            </ul>
	                        </div> */}
	                        {/* <!-- /filter_type --> */}
	                    {/* </div>  --filter*/ }
	                    {/* <!-- /filter_type --> */}
	                  {/* <!--  <div className="filter_type">
	                        <h4><a href="#filter_2" data-bs-toggle="collapse" className="closed">Colors</a></h4>
	                        <div className="collapse" id="filter_2">
	                            <ul>
	                                <li>
	                                    <label className="container_check">Black <small>12</small>
	                                        <input type="checkbox">
	                                        <span className="checkmark"></span>
	                                    </label>
	                                </li>
	                                <li>
	                                    <label className="container_check">Green <small>25</small>
	                                        <input type="checkbox">
	                                        <span className="checkmark"></span>
	                                    </label>
	                                </li>
	                                <li>
	                                    <label className="container_check">Purple <small>56</small>
	                                        <input type="checkbox">
	                                        <span className="checkmark"></span>
	                                    </label>
	                                </li>
	                                <li>
	                                    <label className="container_check">Blue <small>87</small>
	                                        <input type="checkbox">
	                                        <span className="checkmark"></span>
	                                    </label>
	                                </li>
	                                <li>
	                                    <label className="container_check">White <small>43</small>
	                                        <input type="checkbox">
	                                        <span className="checkmark"></span>
	                                    </label>
	                                </li>
	                            </ul>
	                        </div>
	                    </div> --> */}
	                   
	                   {/* <div className="filter_type"> --filter
	                        <h4><a href="#filter_4" data-bs-toggle="collapse" className="closed">Status</a></h4>
	                        <div className="collapse" id="filter_4">
	                            <ul>
	                                <li>
	                                    <label className="container_radio">Draft<small>11</small>
	                                        <input type="radio" name="filter_4" />
	                                        <span className="checkmark"></span>
	                                    </label>
	                                </li>
	                                <li>
	                                    <label className="container_radio">Published<small>08</small>
	                                        <input type="radio" name="filter_4" />
	                                        <span className="checkmark"></span>
	                                    </label>
	                                </li>
	                                <li>
	                                    <label className="container_radio">On Sale<small>05</small>
	                                        <input type="radio" name="filter_4" />
	                                        <span className="checkmark"></span>
	                                    </label>
	                                </li>
	                            </ul>
	                        </div>
	                    </div>  */}
	                    {/* <!-- /filter_type --> */}
	                    {/* <div className="buttons"> --filter
	                        <a href="#0" className="btn_1 full-width outline">Filter</a>
	                    </div>
	                </div>
	            </aside> */}
                {/* <div className="col-lg-9 ps-lg-5"> */}
                <div className="ps-lg-5">
                    <div className="main_title version_2">
                        <span><em></em></span>
                        <h2>Upload Product</h2>
                    </div>

                    <div className="row">
                        {/* <div className="col-md-9"> */}
                            <div className="form-group">
                                <label>Upload file</label>
                                <div className="file_upload">
                                <input type="file" name="image" onChange={handleChange}/>
                                <i className="bi bi-file-earmark-arrow-up"></i>
                                <div>{formData.image?formData.image.name:"PNG, JPEG , JPG Max 1Gb"}</div>
                                </div>
                            </div>
                        {/* </div> */}
                        {/* <div className="col-md-3">
                            <div className="form-group">
                                <label>Preview</label>
                                <figure><img src="https://distil.in/demo/snappcoins/img/items/item-3.jpg" alt="" width="533" height="400" className="img-fluid rounded" /></figure>
                            </div>
                        </div> */}
                    </div>
                    {/* <!-- /row --> */}

                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-group">
                                <label>Item title</label>
                                <input type="text" name='title' value={formData.title} className="form-control" placeholder="e.g. Item Name" onChange={handleChange} />
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="form-group">
                                <label>Choose a Category</label>
                                {/* <div className="custom_select">
                                    <select className="wide">
                                        <option>Art</option>
                                        <option>Electronics</option>
                                        <option>Stationary</option>
                                    </select>
                                </div> */}
                                {/* <div class="custom_select mt-1">
                                    <div className="nice-select wide">
                                        <span className="current">Select</span>
                                        <ul class="list">
                                            <li class="option">Art</li>
                                            <li class="option">Electronics</li>
                                            <li class="option">Stationary</li>
                                        </ul>
                                    </div>
                                </div> */}
                                <Select
                                    isMulti
                                    name="category"
                                    className="text-dark"
                                    value={formData.category.map(value => ({ value, label: value }))}
                                    options={[
                                      { value: "Art", label: "Art" },
                                      { value: "Electronics", label: "Electronics" },
                                      { value: "Stationary", label: "Stationary" },
                                      { value: "Music", label: "Music" },
                                      { value: "Wellness", label: "Wellness" },
                                    ]}
                                    onChange={handleCategoryChange}
                                    // closeMenuOnSelect={false}
                                />
                            </div>
                        </div>
                    
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" className="form-control" name='description' value={formData.description} placeholder="e.g. Abstract modern art" onChange={handleChange} />
                            </div>
                        </div>
                    {/* <!-- <div className="col-md-4">
                            <div className="form-group">
                                <label>Snapp Conversion</label>
                                <input type="text" className="form-control" placeholder="e.g. Abstract modern art">
                            </div>
                        </div>--> */}
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Brand</label>
                                <input type="text" className="form-control" name='brand' value={formData.brand} placeholder="e.g. Brand Name" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Stock</label>
                                <input type="text" className="form-control" name='count' value={formData.count} placeholder="12" onChange={handleChange} />
                            </div>
                        </div>
                        {/* <div className="col-md-6"> */}
                            <div className="form-group">
                                <label>Price</label>
                                <input type="text" className="form-control" name='price' value={formData.price} placeholder="Enter price" onChange={handleChange} />
                            </div>
                        {/* </div> */}
                        {/* <div className="col-md-6">
                            <div className="form-group">
                                <label>Sale Price</label>
                                <input type="text" className="form-control" placeholder="Enter price" />
                            </div>
                        </div> */}
                    </div>
                    {/* <!-- /row --> */}

                    <hr className="mt-3 mb-5" />

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group switch_wrapper">
                                {/* <label>Put on sale</label>
                                <p className="mb-0">Check if you want to put this product on sale.</p> */}
                                <label>Make it Featured Product</label>
                                <p className="mb-0">Sponser to show your product as a featured product and be on top.</p>
                                <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" onClick={handleFeatured} checked={checked} />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    {/* <!-- /row --> */}

                    <p className="text-end mt-4"><a type="button" href="merchant-inventory.html" className="btn_1" onClick={handleSubmit}>Save changes</a></p>
                    
                </div>
            </div>
            {/* <!-- /row --> */}
        </div>
            {/* <!-- /row --> */}
    </div>}
    <Footer />
    </>
  )
}

export default MerchandiseUpload
