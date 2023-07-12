import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilterCheck from "./FilterCheck";


function Filter({ children }) {
    const [ClickedCat, setClickedCat] = useState(false)
    const [ClickedRange, setClickedRange] = useState(false)

    return (
        <aside class="col-lg-3" id="sidebar_fixed">
            <div class="filter_col">
                <div class="inner_bt"><a href="#" class="open_filters"><i class="bi bi-x"></i></a></div>
                <div class="filter_type">
                    <h4><a href="" data-bs-toggle="collapse" class={ClickedCat ? "opened" : "collapsed closed"} onClick={(e) => {
                        e.preventDefault();
                        setClickedCat((prev) => !prev)
                    }} aria-expanded={ClickedCat ? "true" : "false"} >Categories</a></h4>
                    <div className={`collapse ${ClickedCat ? "show" : ""}` } id="">
                        <ul>
                            {children[0]}
                        </ul>
                    </div>
                </div>
                <div class="filter_type">
                    <h4><a href="" data-bs-toggle="collapse" class={ClickedRange ? "opened" : "collaped closed"} onClick={(e) => {
                        e.preventDefault();
                        setClickedRange((prev) => !prev)
                    }} aria-expanded={ClickedRange ? "true" : "false"} >Snapps</a></h4>
                    <div class={`collapse ${ClickedRange ? "show" : ""}`}>
                        {children[1]}
                    </div>
                </div>
                {/* <div class="buttons">
                    <a href="#0" class="btn_1 full-width outline">Filter</a>
                </div> */}
            </div>
        </aside>
    )
}


export default Filter;