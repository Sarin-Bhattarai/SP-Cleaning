import { useState } from "react";
import "../../../utils/css/home.css";
import { Link } from "react-router-dom";
import food1 from "../../../utils/assets/men.png";
import QuoteModal from "../../pricing/QuoteModal";
import food3 from "../../../utils/assets/work.png";
import food2 from "../../../utils/assets/materials.png";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-new">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>
              Professional Cleaning <br />
              <span>You Can Trust</span>
            </h1>

            <p>
              Residential & Commercial Cleaning Across Auckland <br />
              <strong>Reliable • Affordable • Eco-Friendly</strong>
            </p>

            <div className="hero-btns">
              <button className="primary-btn" onClick={() => setOpen(true)}>
                Get a Free Quote
              </button>
              <QuoteModal open={open} onClose={() => setOpen(false)} />
              <a href="tel:+64 0224179564" className="outline-btn">
                +64 0224179564
              </a>
            </div>
          </div>

          <div className="hero-img">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
              alt="Cleaning Service"
            />
          </div>
        </div>
      </section>

      <section className="home-second topMargin">
        <div className="container">
          <div className="heading">
            <h1>Featured Services</h1>
          </div>

          <div className="grid">
            <div className="box">
              <div className="image">
                <img src={food1} alt="shop-pic" />
              </div>
              <div className="text">
                <p>set of highly skilled trained prof...</p>
                <h2>Exit Cleaning</h2>
                <button className="primary-btn ">
                  <Link style={{ color: "#fff" }} to="/services">
                    See more
                  </Link>
                </button>
              </div>
            </div>
            {/* Box ends here */}
            <div className="box">
              <div className="image">
                <img src={food2} alt="shop-pic" />
              </div>
              <div className="text">
                <p>We have necessary equip.....</p>
                <h2>Eco-friendly Options</h2>
                <button className="primary-btn ">
                  <Link style={{ color: "#fff" }} to="/services">
                    See more
                  </Link>
                </button>
              </div>
            </div>
            {/* Box ends here */}
            <div className="box">
              <div className="image">
                <img src={food3} alt="shop-pic" />
              </div>
              <div className="text">
                <p>We have very unique style of cle...</p>
                <h2>Residential Cleaning</h2>
                <button className="primary-btn ">
                  <Link style={{ color: "#fff" }} to="/services">
                    See more
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-new">
        <div className="container">
          <div className="heading">
            <h1>Why Choose Us</h1>
          </div>

          <div className="why-grid">
            <div className="why-box">
              <span>🤝</span>
              <h3>Trusted Professionals</h3>
              <p>Fully trained and reliable cleaning experts.</p>
            </div>

            <div className="why-box">
              <span>💰</span>
              <h3>Affordable Pricing</h3>
              <p>No hidden costs, transparent pricing.</p>
            </div>

            <div className="why-box">
              <span>🌿</span>
              <h3>Eco-Friendly Products</h3>
              <p>Safe for family, pets and environment.</p>
            </div>

            <div className="why-box">
              <span>📅</span>
              <h3>Flexible Scheduling</h3>
              <p>Cleaning times that suit your lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-third topMargin">
        <div className="container">
          <div className="heading">
            <h2>Statistics</h2>
          </div>

          <div className="grid-3">
            <div className="box" id="box90">
              <h4>
                Join thousands of Happy
                <br /> Customers who have
                <br /> Successfully contracted
                <br /> With our company.
              </h4>
              <p>
                We take pride in our company's track record of delivering
                exceptional service and satisfaction to our customers. With
                thousands of happy customers who have successfully contracted
                with us, we are confident that we can meet and exceed your
                expectations. Our commitment to excellence is reflected in every
                aspect of our business, from our skilled and experienced team of
                professionals to our use of high-quality products and equipment.
              </p>
            </div>
            {/* box ends */}
            <div className="box">
              <div className="small-grid">
                <div className="sg-row">
                  <span>1,000+</span>
                  <h3>Happy Customers</h3>
                  <p style={{ color: "black" }}>
                    Satisfied clients are our top priority. Join them now and
                    experience our exceptional cleaning services.
                  </p>
                </div>
                <div className="sg-row">
                  <span>$640</span>
                  <h3>Average Savings</h3>
                  <p style={{ color: "black" }}>
                    Our services provide significant cost savings on cleaning
                    expenses, allowing you to allocate resources to other
                    priorities.
                  </p>
                </div>
              </div>
              <div className="small-grid">
                <div className="sg-row">
                  <span>10+</span>
                  <h3>Trained Professionals</h3>
                  <p style={{ color: "black" }}>
                    Expert cleaners dedicated to quality service, ensuring a
                    spotless and satisfying clean every time.
                  </p>
                </div>
                <div className="sg-row">
                  <span>Many More+</span>
                  <h3>Services</h3>
                  <p style={{ color: "black" }}>
                    We offer reliable and top-notch cleaning services for all
                    your residential and commercial needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
