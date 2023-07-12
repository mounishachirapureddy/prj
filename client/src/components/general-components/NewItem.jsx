import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Loader from "./Loader";
import axios from "axios"
import ImgLoader from "./ImgLoader";
import SnappnowLink from "./SnappnowLink";

const NewItem = (props) => {
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
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <div className="strip">
                <figure >
                    {!imageLoaded && <div > <Loader /> </div>}<SnappnowLink imageLoaded={imageLoaded} url="/detail-page" datatopass={props.datatopass} />
                    <img src={imageSrc} data-src="img/items/item-12.jpg" className={`lazy ${imageLoaded ? "" : "visually-hidden"}`} alt="" width="533" height="400" onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(false)} />
                    <Link  className="strip_info">
                        <div className="item_title">
                            <span className="badge bg-violet">{props.price} snapps</span>
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
            </div>
        </div>)
}


export default NewItem;