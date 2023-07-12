import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const SnappnowLink = (props) => {
    const navigate = useNavigate();
    return (<Link to={props.url} className={`btn_1 modal_popup lazy ${props.imageLoaded ? "" : "visually-hidden"} `} onClick={() => {
        navigate(props.url)
    }} >Snapp Now!</Link>)
}

export default SnappnowLink