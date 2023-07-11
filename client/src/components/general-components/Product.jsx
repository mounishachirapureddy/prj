import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Loader from "./Loader";
import axios from "axios"
import ImgLoader from "./ImgLoader";

function Product(props) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState("");
    const [ProfPicLoaded, setProfPicLoaded] = useState(false)
    const [ProfilePic, setProfilePic] = useState("");


    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:3001/api/getprofile${props.userid}`)
                const imgsrc = response.data.user.image
                console.log(imgsrc)
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
            props.img
                ? `http://127.0.0.1:3001/api/merchandise/img${props.img}`
                : "assets/img/items/default-prod.png"
        );
    }, [props.img, props.profpic, ProfilePic]);

    return (
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
            <div className="strip">
                <figure >
                    {!imageLoaded && <div > <Loader /> </div>}<Link to="#modal-dialog" className={`btn_1 modal_popup lazy ${imageLoaded ? "" : "visually-hidden"} `}>Snapp Now!</Link>
                    <img src={imageSrc} data-src="img/items/item-12.jpg" className={`lazy ${imageLoaded ? "" : "visually-hidden"}`} alt="" width="533" height="400" onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(false)} />
                    <Link to="detail-page.html" className="strip_info">
                        <div className="item_title">
                            <span className="badge bg-voilet">{props.price} snapps</span>
                        </div>
                    </Link>
                </figure >
                <ul>
                    <li>
                        <Link to="author.html" className="author">
                            <div className="author_thumb veryfied"><i className="bi bi-check"></i>
                                <figure>{!ProfPicLoaded && <div > <ImgLoader /> </div>}
                                    <img src={ProfilePic} data-src="img/avatar2.jpg" alt="" className={`lazy ${ProfPicLoaded ? "" : "visually-hidden"}`} width="100px" onLoad={() => setProfPicLoaded(true)} onError={() => setProfPicLoaded(false)} /></figure>
                            </div>
                            <h6 className="">{props.title}</h6>
                        </Link>
                    </li>
                    <li></li>
                    <li>
                        <Link to="#0" className="wish_bt"></Link><i class="bi bi-stack"></i> {props.count}
                    </li>
                </ul>
                <ul>
                    <li className="container-fluid"  >{ props.genre.length > 0 ?  props.genre.map((g) => {
                        return <span className="badge bg-success me-1" >{g}</span>
                    }) : <span className="badge bg-danger me-1" >No Category</span>}</li>
                </ul>
                <ul>
                    <li className="">{props.desc.slice(0, 20) + "..."}</li>
                    <li className="text-uppercase link">{props.brand}</li>
                </ul>
            </div>
        </div>
    )
}


export default Product;