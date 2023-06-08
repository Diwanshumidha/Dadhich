import { Link } from "react-router-dom";




function Slider_Home () {
    return (
      <>
        
		<div className="banner-three bg-primary" style={{"backgroundImage":"url(images/background/bg5.png), url(images/background/bg6.png), var(--gradient-sec)"}}>
			<div className="container">
				<div className="banner-inner">
					<div className="row align-items-center">
						<div className="col-md-6">
							<div className="banner-content text-white">
								<h6 data-wow-delay="0.5s" data-wow-duration="3s" className="wow fadeInUp sub-title text-yellow">TOP RATED WEB DEVELOPMENT AGENCY</h6>
								<h1 data-wow-delay="1s" data-wow-duration="3s" className="wow fadeInUp m-b20">Empowering Businesses With Innovative Web Development.</h1>
								<p  data-wow-delay="1.5s" data-wow-duration="3s" className="wow fadeInUp m-b30">Empower your business with our innovative web development solutions. From captivating designs to enhanced user experiences, we drive growth and elevate your online presence. Partner with us today for success.</p>
								<div className="button_container">
								<Link to="#contact"><a  data-wow-delay="2s" data-wow-duration="3s" className="wow fadeInUp  btn btn-corner gradient btn-primary">HIRE US</a></Link>
								<Link to="#portfolio"><a  data-wow-delay="2s" data-wow-duration="3s" className="wow fadeInUp  btn btn-corner hero_portfolio gradient btn-primary">PORTFOLIO</a></Link>
								</div>

								
							</div>
						</div>
						<div className="col-md-6">
							<div className="dz-media wow fadeIn" data-wow-delay="1s" data-wow-duration="3s">
								<img src="images/main-slider/slider3/pic1.png" className="move-1" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
      </>
    )
  }
  
  export default Slider_Home;