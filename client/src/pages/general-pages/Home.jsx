import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from "../../components/general-components/Header";
import Footer from "../../components/general-components/Footer";
import NewItem from '../../components/general-components/NewItem';
import Loader from '../../components/general-components/Loader';
import ImgLoader from '../../components/general-components/ImgLoader';
import FullpageLoader from '../../components/general-components/FullpageLoader';
import CarouselPro from '../../components/general-components/CarouselPro';
import FeaturedPro from '../../components/general-components/FeaturedPro';
const Home = () => {
  const [products, setProducts] = useState([])
  // const [searchLoad, setSearchLoad] = useState(false)
  const [productsLoaded, setLoaded] = useState(false)
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [searchTerm_home, setSearchTerm_home] = useState('')
  // const [search_filter, setSearchFilter] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoaded(false)
        const response_prod = await axios.get('http://localhost:3001/api/merchandise/gethome');
        //const total = response_prod.headers.get("x-total-count");
        setProducts(response_prod.data.merchandises);
        setLoaded(true)
        setFeaturedProducts(response_prod.data.featured_products);
        // setSearchLoad(false)
        // const search_filter_prod = await axios.get("http://localhost:5000/api/merchandise/getall", { params: { searchTerm: searchTerm_home } })
        // setSearchFilter(search_filter_prod.data.merchandises);
        // setSearchLoad(true)
        console.log("hitted")
        console.log(featuredProducts)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();


  }, [searchTerm_home]);
  return (
    <>
      <FullpageLoader />
      <Header />

      <main>
        <div className="hero_single version_2 jarallax">
          <div className="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.5)">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-lg-7">
                  <h1>
                    Discover, Collect,
                    <br />
                    and Redeem Snapps!
                  </h1>
                  <p>The Largest Redemption Platform for Gamers</p>
                  <form method="post" action="catalog">
                    <div className="row g-0 custom-search-input mx-auto">
                      <div className="col-md-9">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Search item..."
                            value={searchTerm_home} onChange={(e) => { setSearchTerm_home(e.target.value) }}
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <input type='submit' value="Find" onClick={(e) => {
                          e.preventDefault();
                          navigate("/catalog", { state: { searchTerm_home: searchTerm_home } })
                        }} />

                      </div>
                    </div>
                    <div
                      className="search_trends"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <div style={{ fontWeight: "bold" }}>Trending:</div>
                      <Link style={{ color: "white" }} to="#0">
                        &nbsp;Art,&nbsp;
                      </Link>
                      <Link style={{ color: "white" }} to="#0">
                        Games,&nbsp;
                      </Link>
                      <Link style={{ color: "white" }} to="#0">
                        Photo
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="wave hero"></div>
        </div>

        <div className="container margin_90_90">
          <div className="main_title center">
            <span>
              <em></em>
            </span>
            <h2>Featured Products</h2>
            <p>Premium products with fabulous offers!</p>
          </div>

          {/* <div className="owl-carousel owl-theme featured_carousel owl-loaded owl-drag"
            style={{
              animationName: "slideInUp",
              animationDuration: "300ms",
              animationTimingFunction: "ease",
              animationDelay: "0ms",
              animationDirection: "normal",
              animationFillMode: "both"
            }}>
            <div className='owl-stage-outer'>
              <div className='owl-stage' style={{
                width : "1922px"
              }}>
              <FeaturedPro />
              <FeaturedPro />
              <FeaturedPro />
              <FeaturedPro />
              </div>
            </div>
            <div className='owl-nav'>
              <button type='button' role="presentation" className='owl-prev'>
                <i className='bi bi-chevron-left'></i>
              </button>
              <button type='button' role="presentation" className='owl-next'>
                <i className='bi bi-chevron-right'></i>
              </button>
            </div>
          </div> */}
         <div id='carouselItems' className="carousel slide carousel-fade" data-bs-ride="carousel">
						<div className='carousel-inner'>
							{featuredProducts.map((product, index) => {
								return <CarouselPro index={index} price={product.price} desc={product.description} brand={product.brand} title={product.title} count={product.count} img={product.image} userid={product.userid} genre={product.category} />
							})}
						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselItems" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselItems" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>

          <p className="text-center mt-4">
            <a to="catalog" className="btn_1 medium pulse_bt">
              Start Redeeming
            </a>
          </p>
        </div>

        <div className="bg_gray">
          <div className="container margin_120_90">
            <div className="main_title version_2">
              <span>
                <em></em>
              </span>
              <h2>Weekly Top Games</h2>
              <p>New games added every week!</p>
              <Link to="#0">
                View All <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <div className="row author_list">
              <div className="col-lg-4 col-md-6">
                <a className="author">
                  <strong>1</strong>
                  <div className="author_thumb veryfied">
                    <i className="bi bi-check"></i>
                    <figure>
                      <img
                        src="assets/img/avatar1.jpg"
                        alt=""
                        className="lazy"
                        width="100"
                        height="100"
                      />
                    </figure>
                  </div>
                  <div>
                    <h6>Junglee Rummy</h6>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="author.html" className="author">
                  <strong>2</strong>
                  <div className="author_thumb veryfied">
                    <i className="bi bi-check"></i>
                    <figure>
                      <img
                        src="assets/img/avatar2.jpg"
                        alt=""
                        className="lazy"
                        width="100"
                        height="100"
                      />
                    </figure>
                  </div>
                  <div>
                    <h6>Callbreak</h6>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="author.html" className="author">
                  <strong>3</strong>
                  <div className="author_thumb veryfied">
                    <i className="bi bi-check"></i>
                    <figure>
                      <img
                        src="assets/img/avatar3.jpg"
                        alt=""
                        className="lazy"
                        width="100"
                        height="100"
                      />
                    </figure>
                  </div>
                  <div>
                    <h6>Ludo King</h6>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="author.html" className="author">
                  <strong>4</strong>
                  <div className="author_thumb veryfied">
                    <i className="bi bi-check"></i>
                    <figure>
                      <img
                        src="assets/img/avatar4.jpg"
                        alt=""
                        className="lazy"
                        width="100"
                        height="100"
                      />
                    </figure>
                  </div>
                  <div>
                    <h6>Cricket League</h6>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="author.html" className="author">
                  <strong>5</strong>
                  <div className="author_thumb veryfied">
                    <i className="bi bi-check"></i>
                    <figure>
                      <img
                        src="assets/img/avatar5.jpg"
                        alt=""
                        className="lazy"
                        width="100"
                        height="100"
                      />
                    </figure>
                  </div>
                  <div>
                    <h6>Evony</h6>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="author.html" className="author">
                  <strong>6</strong>
                  <div className="author_thumb veryfied">
                    <i className="bi bi-check"></i>
                    <figure>
                      <img
                        src="assets/img/avatar6.jpg"
                        alt=""
                        className="lazy"
                        width="100"
                        height="100"
                      />
                    </figure>
                  </div>
                  <div>
                    <h6>Coin Master</h6>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="author.html" className="author">
                  <strong>7</strong>
                  <div className="author_thumb veryfied">
                    <i className="bi bi-check"></i>
                    <figure>
                      <img
                        src="assets/img/avatar7.jpg"
                        alt=""
                        className="lazy"
                        width="100"
                        height="100"
                      />
                    </figure>
                  </div>
                  <div>
                    <h6>Free Fire Max</h6>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="author.html" className="author">
                  <strong>8</strong>
                  <div className="author_thumb veryfied">
                    <i className="bi bi-check"></i>
                    <figure>
                      <img
                        src="assets/img/avatar8.jpg"
                        alt=""
                        className="lazy"
                        width="100"
                        height="100"
                      />
                    </figure>
                  </div>
                  <div>
                    <h6>Klondike Adventures</h6>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link to="author.html" className="author">
                  <strong>9</strong>
                  <div className="author_thumb veryfied">
                    <i className="bi bi-check"></i>
                    <figure>
                      <img
                        src="assets/img/avatar9.jpg"
                        alt=""
                        className="lazy"
                        width="100"
                        height="100"
                      />
                    </figure>
                  </div>
                  <div>
                    <h6>Airforce Royale</h6>
                  </div>
                </Link>
              </div>
            </div>

            <div
              className="banner mt-5 lazy"
              style={{ backgroundImage: "url(assets/img/bp.png)" }}
            >
              <div
                className="d-flex align-items-center opacity-mask justify-content-between p-5"
                style={{ opacity: "rgba(0, 0, 0, 0.2)" }}
              >
                <div>
                  <small>Join Snappcoins</small>
                  <h3>Become a Partner</h3>
                  <p>Showcase your games and attract loyal fans!</p>
                </div>
                <div>
                  <Link
                    to="/gaming-vendor-login"
                    className="btn_1 medium pulse_bt"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container margin_120_90">
          <div className="main_title version_2">
            <span><em></em></span>
            <h2>New Items</h2>
            <p>Redeem your Snapps from the latest products in our catalog!</p>
            <Link to="catalog">View All <i className="bi bi-arrow-right"></i></Link>
          </div>


          {productsLoaded ? <div className='row d-flex justify-content-center '>
            {
              products.map((product) => {
                return <NewItem price={product.price} desc={product.description} brand={product.brand} title={product.title} count={product.count} img={product.image} userid={product.userid} genre={product.category} />
              })
            }

          </div> : <div className='d-flex row justify-content-center align-items-center m-5 p-5'> <Loader /> </div>}
          <p className="text-center mt-4" ><Link to="/catalog" className="btn_1 gradient pulse_bt">View New Items</Link></p>
        </div>

        <div className="bg_gray">
          <div className="container margin_120_90">
            <div className="main_title center mb-5">
              <span>
                <em></em>
              </span>
              <h2>Create Your Account & Start Snapping!</h2>
              <p>Create your account and start redeeming in 3 simple steps!</p>
            </div>
            <div className="row justify-content-md-center how_2">
              <div className="col-lg-5 text-center">
                <figure className="mb-5">
                  <img
                    src="assets/img/web_wireframe.svg"
                    alt=""
                    className="img-fluid lazy"
                    width="360"
                    height="380"
                  />
                </figure>
              </div>
              <div className="col-lg-5">
                <ul>
                  <li>
                    <h3>
                      <span>#01.</span> Set up your Snappcoins account
                    </h3>
                    <p>
                      Signup using your email / mobile number
                    </p>
                  </li>
                  <li>
                    <h3>
                      <span>#02.</span> Check your Snapp balance
                    </h3>
                    <p>
                      Your dashboard will indicate the Snapps earned by you from the games you have played.
                    </p>
                  </li>
                  <li>
                    <h3>
                      <span>#03.</span> Use your Snapps & redeem!
                    </h3>
                    <p>
                      Browse through our catalog and exchange your Snapps with our fabulous range of products.
                    </p>
                  </li>
                </ul>{" "}
                <p className="add_top_30">
                  <Link to="/gamer-signup" className="btn_1">
                    Join Now!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main >

      <Footer />

      <div id="modal-dialog" className="zoom-anim-dialog mfp-hide">
        <div className="modal_header">
          <h3>Snapp Now!</h3>
        </div>
        <form>
          <div className="sign-in-wrapper">
            <p>
              You are about to purchase <strong>"Amazing Art" #304</strong> from{" "}
              <strong>George Lucas</strong>
            </p>
            <div className="form-group">
              {" "}
              <label>Redeem With</label>
              <input
                type="text"
                className="form-control"
                placeholder="3.25 snapps"
                disabled
              />
            </div>
            <div className="form-group">
              <label>
                Enter quantity <small>(10 available)</small>
              </label>
              <input type="text" className="form-control" />
            </div>
            <ul>
              <li>
                Your balance <span>8.498 snapps</span>
              </li>
              <li>
                Service fee 1.5%<span>0.125 snapps</span>
              </li>
              <li>
                You will pay<span>8.798 snapps</span>
              </li>
            </ul>
            <div className="text-center">
              <input
                type="submit"
                value="Place a bid"
                className="btn_1 full-width mb-2"
              />
              <input
                type="submit"
                value="Cancel"
                className="btn_1 full-width outline"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Home;
