import React from "react";

import Header from "../../components/general-components/Header";
import Footer from "../../components/general-components/Footer";

const ProductDetail = (props) => {
    return (
        <div>
            <Header /><br /><br /><br />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 margin_detail">

                            <div className="box_general">
                                <img src="assets/img/items/default-prod.png" width={"100%"} alt="" className="img-fluid" />
                                <div className="main_info_wrapper">
                                    <div className="main_info">
                                        <div className="clearfix mb-3">
                                            <div className="item_desc">
                                                <div className="mb-3">
                                                    <a href="author.html" className="author">
                                                        <div className="author_thumb veryfied"><i className="bi bi-check"></i>
                                                            <figure>
                                                                <img src="assets/img/avatar1.jpg" data-src="img/avatar1.jpg" alt="" className="lazy loaded" width="100" height="100" data-was-processed="true" /></figure>
                                                        </div>
                                                        <h6 className="ms-1"><span>Brand</span>Brand Name</h6>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="score_in">
                                                123 Likes <a href="#0" className="wish_bt"><i className="bi bi-heart"></i></a>
                                            </div>
                                        </div>
                                        <h1 className="mb-md-2">Redmi Pad | MediaTek Helio G99</h1>
                                        <p>Display size - 26.69 cm (10.5 inch) Vibrant Display 1920x1200 (WUXGA) TFT; Aspect ratio 16:10. Symmetric Narrow Bezel; Display Type: LCD TFT; Max Display brightness (500 nits); Screen refresh rate (60Hz)
                                            Calling supported -Yes; 4 GB RAM, 64 GB Internal Memory (expandable to 1 TB); Processor Description - UniSOC T618 (Dual 2.0GHz + Hexa 2.0GHz); Operating system - Android 11.0
                                            Battery power - 7040 mAh Battery With 15W Fast Charging; Camera Front - 5.0MP, Camera Back - 8MP AF, Camera Flash - No
                                            Finger print sensor - No; GPS - GPS + GLONASS, Beidou, Galileo ; Stylus compatible - S Pen not included; Headphone jack - 3.5mm Jack; Quad speakers with Dolby Atmos Speakers
                                            1 year manufacturer warranty for Tablet and 6 months warranty for in the box accessories. Included components - Travel adaptor, Data Cable, Ejection Pin, QSG
                                            Graphics Description: Integrated; Hardware Interface: Bluetooth 5; Connectivity Technology: Bluetooth; Processor Description: Octa-Coreunisoc T618dual 2.0ghz + Hexa 2.0ghz; Cellular Technology: Wi-Fi Only</p>
                                        <div className="content_more">
                                            <p>Lorem ipsum dolor sit amet, an sea eius elitr persius. Voluptaria inciderint qui in. No tollit aliquid reformidans mei, nec illum sensibus id, at has esse admodum adipisci. Et has maiestatis scriptorem. Et aeque iudico oblique ius.</p>
                                        </div>
                                        <a href="#0" className="show_hide" data-content="toggle-text">Read More</a>
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
                                                        <ul className="bullets text-white">
                                                            <li>Size <span>3000x2000px</span></li>
                                                            <li>Format <span>Tiff, Jpeg, Gif, Pdf</span></li>
                                                            <li>Token ID <span>002334</span></li>

                                                        </ul>
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
                                        <p className="countdown_in">Ends in<br /><strong data-countdown="2022/03/15"></strong></p>
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