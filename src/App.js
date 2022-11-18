
import './App.css';
import './img/rocket.png';
import './img/about.jpg';
import './img/ml_image.png'
function App() {
  return (
    <div className="App">
      <header id="header">
		<div className="container">
			<div className="row align-items-center justify-content-between d-flex">
				<div id="logo">
				<h3 className="wow fadeIn text-white" data-wow-duration="1s" data-wow-delay=".3s">SAPA</h3>
					
				</div>
				<nav id="nav-menu-container">
			
					
				</nav>
			</div>
		</div>
	</header>
	{/* <!-- End Header Area --> */}


	{/* <!-- Start Banner Area --> */}
	<section style={{paddingTop:'170px'}} className="home-banner-area relative">
		<div className="container">
			<div className="row fullscreen d-flex align-items-center justify-content-center">
				<div className="banner-content col-lg-8 col-md-12">
					<h1 className="wow fadeIn" data-wow-duration="4s">Student Academic  <br /> Prediction App</h1>
					<p className="text-white">
						To Predicts And Take Steps To Changes The Future.
					</p>

					<div className="input-wrap">
						
							<a target="_blank" href="http://127.0.0.1:5000/"><button type="submit" className="btn search-btn">Predict</button></a>
						
					</div>
					<h4 className="text-white">Functionalities</h4>

					<div  className="courses pt-20">
						<a href="/" data-wow-duration="1s" data-wow-delay=".3s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Predicts</a>
						<a href="/" data-wow-duration="1s" data-wow-delay=".6s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Register Course</a>
						<a href="/" data-wow-duration="1s" data-wow-delay=".9s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Graphs</a>
						<a href="/" data-wow-duration="1s" data-wow-delay="1.2s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Performance
							
						</a>
						<a href="/" data-wow-duration="1s" data-wow-delay="1.5s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Analysis</a>
						<a href="/" data-wow-duration="1s" data-wow-delay="1.8s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Data
							
						</a>
						<a href="/" data-wow-duration="1s" data-wow-delay="2.1s" className="primary-btn transparent mr-10 mb-10 wow fadeInDown">Machine Learning</a>
					</div>
				</div>
			</div>
		</div>
		<div  className="rocket-img">
			<img src="img/rocket.png" alt="" />
		</div>
	</section>
	{/* <!-- End Banner Area --> */}


	{/* <!-- Start About Area --> */}
	<section className="about-area section-gap">
		<div className="container">
			<div className="row align-items-center justify-content-center">
				<div className="col-lg-5 col-md-6 about-left">
					<img className="img-fluid" src="img/about.jpg" alt="" />
				</div>
				<div className="offset-lg-1 col-lg-6 offset-md-0 col-md-12 about-right">
					<h1>
						Portal <br /> Features
					</h1>
					<div className="wow fadeIn" data-wow-duration="1s">
						<p>
							Student have their own panel.<br />
							Instructors have their panel for multiple featues.<br />
							Predicts the student Grades.
							
							
						</p>
					</div>
					
				</div>
			</div>
		</div>
	</section>
	{/* <!-- End About Area --> */}


	{/* <!-- Start Courses Area --> */}
	<section className="courses-area section-gap">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-5 about-right">
					<h1>
						This is Why <br /> We have Solid Idea
					</h1>
					<div className="wow fadeIn" data-wow-duration="1s">
						<p>
							The current problem is that we only cry over the spilt milk. We fail to help 
							the students who are on verge of failure. There are many students who can be 
							helped mid semester & can clear the course if it is identified before the finals 
							that they are at risk and can fail the course or several courses if not helped. 
							There’s no such mechanism currently in universities that identifies students at risk.
							There’s a communication gap between the instructor and the students at class in the
							current education system. Students hesitate to ask questions in class and instructor
							misunderstands it and thinks the student has gotten every topic’s proper understanding.
							We, being introverts, find it difficult to ask questions in class because we fear being
							insulted. The gap can only be filled once a mechanism is finalized and teacher gets 
							to know where the students are lacking so he can further help those students and that
							can increase the clearing ratio of a course. 
						</p>
					</div>
				
				</div>
				<div className="offset-lg-1 col-lg-6">
					<div className="courses-right">
						<div className="row">
							<img className="img-fluid" src="img/ml_image.png" alt="" />
						
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- End Courses Area --> */}


	{/* <!--Start Feature Area --> */}
	<section className="feature-area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8">
					<div className="section-title text-center">
						<h1>Features That Make Us Hero</h1>
						<p>
							Predicts the performance and take step to change future performance.
						</p>
					</div>
				</div>
			</div>
			<div className="feature-inner row">
				<div className="col-lg-4 col-md-6">
					<div className="feature-item">
						<i className="ti-crown"></i>
						<h4>Prediction</h4>
						<div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
							<p>
								We take data from the student and predicts their performance their passing and failing ration and take initiatives to chnage it.
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="feature-item">
						<i className="ti-stats-up"></i>
						<h4>Graphs</h4>
						<div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s">
							<p>
								We provide ease of use and show performance graph to student and instructors with the predicted values and percentages.
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="feature-item">
						<i className="ti-medall-alt"></i>
						<h4>To reduce dropout rates</h4>
						<div className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s">
							<p>
								We work on student perfromance and predicts its performance so he/she can take step to make it better so that the drop out rate become low.
							</p>
						</div>
					</div>
				</div>
		
			</div>
		</div>
	</section>
	{/* <!-- End Feature Area --> */}





	{/* <!-- Start Testimonials Area --> */}

	{/* <!-- End Testimonials Area --> */}


	{/* <!-- Start Footer Area --> */}
	<footer className="footer-area section-gap">
		<div className="container">
			<div className="row">
				
				<div className="col-lg-4 col-md-6 single-footer-widget">
					<h4>Newsletter</h4>
					<p>You can trust us. we only send useful Notifications</p>
					<div className="form-wrap" id="mc_embed_signup">
						<form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
						 method="get" className="form-inline">
							<input className="form-control" name="EMAIL" placeholder="Your Email Address" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Your Email Address '"
							 required="" type="email" />
							<button className="click-btn btn btn-default"><span className="lnr lnr-arrow-right"></span></button>
							<div style={{position: "absolute",left: '-5000px'}}>
								<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex="-1" value="" type="text" />
							</div>

							<div className="info"></div>
						</form>
					</div>
				</div>
			</div>
			<div className="footer-bottom row align-items-center">
				<p className="footer-text m-0 col-lg-8 col-md-12">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved by <a href="" target="_blank">Student Performance Prediction Model</a>
</p>
				<div className="col-lg-4 col-md-12 footer-social">
					<a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
					<a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
					<a href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
					<a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
				</div>
			</div>
		</div>
	</footer>
	{/* <!-- End Footer Area --> */}

	{/* <!-- ####################### Start Scroll to Top Area ####################### --> */}
	<div id="back-top">
		<a title="Go to Top" href="#"></a>
	</div>
	{/* <!-- ####################### End Scroll to Top Area ####################### --> */}
    </div>
  );
}

export default App;
