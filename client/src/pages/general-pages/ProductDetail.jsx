import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/general-components/Header";
import Footer from "../../components/general-components/Footer";
import Loader from "../../components/general-components/Loader";
import axios from "axios"
import ImgLoader from "../../components/general-components/ImgLoader";

const ProductDetail = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState("");
    const [ProfPicLoaded, setProfPicLoaded] = useState(false)
    const [ProfilePic, setProfilePic] = useState("");
    const { state } = useLocation();
    console.log("hitted")
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:3001/api/getprofile${state.datatopass.userid}`)
                const imgsrc = response.data.user.image
                console.log("image src for prod", imgsrc)
                console.log(state)
                setProfilePic(
                    (imgsrc)
                        ? `http://127.0.0.1:3001/api/img${imgsrc}`
                        : "assets/img/items/default-prof.png"
                );
            }
            catch (err) {
                console.log(err);
            }
        }
        fetch();
        setImageSrc(
            state.datatopass.image
                ? `http://127.0.0.1:3001/api/merchandise/img${state.datatopass.image}`
                : "assets/img/items/default-prod.png"
        );
        console.log("the src for prod img : ", state.datatopass.image)
    }, [state.datatopass.img, state.datatopass.profpic, ProfilePic]);
    return (
        <div>
            <Header /><br /><br /><br />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 margin_detail">

                            <div className="box_general">
                                
                                    <img src={imageSrc} width={"100%"} alt="" className="img-fluid" onLoad={() => setImageLoaded(true)}  onError={() => setImageLoaded(false)}/>
                                <div className="main_info_wrapper">
                                    <div className="main_info">
                                        <div className="clearfix mb-3">
                                            <div className="item_desc">
                                                <div className="mb-3">
                                                    <a className="author">
                                                        <div className="author_thumb veryfied"><i className="bi bi-check"></i>
                                                            <figure>
                                                                <img src={ProfilePic} data-src="img/avatar1.jpg" alt="" className="lazy loaded" width="100" height="100" data-was-processed="true" /></figure>
                                                        </div>
                                                        <h6 className="ms-1">{state.datatopass.brand}</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="score_in">
                                                <i class="bi bi-stack me-1"></i> 123<a className="wish_bt"></a>
                                            </div>
                                        </div>
                                        <h1 className="mb-md-2">{state.datatopass.title}</h1>
                                        <p>{state.datatopass.description}</p>
                                    </div>
                                </div>
                            </div>


                            <div className="tabs_detail">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a id="tab-C" href="#pane-C" className="nav-link active" data-bs-toggle="tab" role="tab">Additional Info</a>
                                    </li>
                                </ul>
                                <div className="tab-content" role="tablist">
                                    <div id="pane-A" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">
                                        <div id="collapse-A" className="collapse" role="tabpanel" aria-labelledby="heading-A">
                                            <div className="pt-4">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        {/* <ul className="bullets text-white">
                                                            <li>Size <span>3000x2000px</span></li>
                                                            <li>Format <span>Tiff, Jpeg, Gif, Pdf</span></li>
                                                            <li>Token ID <span>002334</span></li>

                                                        </ul> */}
                                                        <p className="text-white">Not available</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-5" id="sidebar_fixed">
                            <br /><br /><br />
                            <div className="container justify-content-center align-items-center">
                                <div className="box_bid">
                                    <h2>Product Name</h2>
                                    <a href="#0" className="close_panel_mobile"><i className="icon_close"></i></a>
                                    <div className="item_meta"> <h3>Redeem With <strong>1.31  snapps</strong></h3>
                                    </div>
                                    <hr /> <a href="#modal-dialog" className="btn_1 full-width mb-2 modal_popup">Snapp Now!</a>
                                </div>
                                <ul className="share-buttons">
                                    <li><a href="#0"><i className="bi bi-instagram"></i></a></li>
                                    <li><a href="#0"><i className="bi bi-facebook"></i></a></li>
                                    <li><a href="#0"><i className="bi bi-twitter"></i></a></li>
                                    <li><a href="#0"><i className="bi bi-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )

}


export default ProductDetail