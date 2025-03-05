import React from 'react';

import './Home.css';
const Home = () => {
    // Internal CSS styles
    const cardStyles = {
        card1: { backgroundColor: "rgb(220, 215, 221)", color: "black" }, // Blue
        card2: { backgroundColor: "rgb(220, 215, 221)", color: "black" }, // Green
        card3: { backgroundColor: "rgb(220, 215, 221)", color: "black" }  // Red
     
    }
    

    return (
        <div className="container mt-4">
        
            <div className="row" style={{ fontFamily: "'Lora', serif"}}>
                {/* Card 1 */}
                <div className="col-md-4">
                    <div className="card mb-3" style={cardStyles.card1}>
                    <img src="/images/wweb.jpg" className="card-img-top fixed-img" alt="Web Development" />
          
                        <div className="card-body">
                            <h3 className="card-title"  style={{ fontWeight: "bold" }}>Web Development</h3>
                         
                            <p className="card-text">
                                Learn HTML, CSS, JS to build modern websites.
                            </p>
                            <a href="/courses/web-development" className="btn btn-light">Explore Course</a>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card mb-3" style={cardStyles.card2}>
                    <img src="images/machine.jpg" className="card-img-top fixed-img" alt="Data Science" />
                    <div className="card-body">
                        <h3 className="card-title"  style={{ fontWeight: "bold" }}>Data Science</h3>
                            <p className="card-text">
                                Master Python, Machine Learning, and AI to analyze data.
                            </p>
                            <a href="/courses/data-science" className="btn btn-light">Explore Course</a>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                    <div className="card mb-3" style={cardStyles.card3}>
                    <img src="images/cs.jpeg" className="card-img-top fixed-img" alt="Cybersecurity" />
                    <div className="card-body">
                        <h3 className="card-title"  style={{ fontWeight: "bold" }}>Cybersecurity</h3>
                        <p className="card-text">
                                Learn ethical hacking, network security, and risk management.
                            </p>
                            <a href="/courses/cybersecurity" className="btn btn-light">Explore Course</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mt-5">
            <h2 className="text-center" style={{ fontWeight: "bold", textDecoration: "underline" }}>
    Our Toppers
</h2>
 <div id="toppersCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="images/topper1.jpg" className="rounded-circle mx-auto mt-4"
            alt="Topper"
            width="250"
            height="250" />
            <h5 class="mt-2">Alice Johnson</h5>
            </div>
            <div class="carousel-item">
            <img src="images/topper2.jpg" className="rounded-circle mx-auto mt-4"
            alt="Topper"
            width="230"
            height="250" />
            <h5 class="mt-2">Bob Smith</h5>
            </div>
            <div class="carousel-item">
            <img src="images/topper3.jpg" className="rounded-circle mx-auto mt-4"
            alt="Topper"
            width="250"
            height="250" />
            <h5 class="mt-2">Charlie Brown</h5>
            </div>
            <div class="carousel-item">
            <img src="images/topper1.jpg" className="rounded-circle mx-auto mt-4"
            alt="Topper"
            width="250"
            height="250" />
            <h5 class="mt-2">David Lee</h5>
            </div>
            <div class="carousel-item">
            <img src="images/topper2.webp" className="rounded-circle mx-auto mt-4"
            alt="Topper"
            width="250"
            height="250" />
            <h5 class="mt-2">Emma Wilson</h5>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#toppersCarousel" data-bs-slide="prev"> 
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#toppersCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>
</div>




 {/* Commonly Asked Questions - Accordion */}
 <div className="my-5">
                <h3 className="text-center mb-4" style={{fontWeight:'bold', textDecoration: "underline"}}>Commonly Asked Questions</h3>
                <div className="accordion" id="faqAccordion">
                    {/* Question 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={{fontSize:'24px'}}>
                                What is Web Development?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Web Development is the process of creating websites and web applications using HTML, CSS, JavaScript, and frameworks like React.
                            </div>
                        </div>
                    </div>

                    {/* Question 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={{fontSize:'24px'}}>
                                What is Data Science?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Data Science involves analyzing and interpreting complex data using Python, Machine Learning, and AI.
                            </div>
                        </div>
                    </div>

                    {/* Question 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" style={{fontSize:'24px'}}>
                                What is Cybersecurity?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Cybersecurity focuses on protecting systems, networks, and programs from digital attacks.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );





    
};

export default Home;

