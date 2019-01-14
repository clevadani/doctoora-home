import React, { Component } from 'react';
import logo from './logo.webp';
import belfiore from './belfiore.webp';
import dentist from './dentist.webp';
import mani from './mani.webp';
import mamalette from './mamalette.webp';
import dr from './dr.webp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="wrapper">
        <section className="main">
          <header>
            <div className="logo">
              <img alt="www.doctoora.com" src={logo} />
            </div>
            <nav>
              <ul>
                <li><a className="cta_a" href="https://doctoora-staging.herokuapp.com/doctors/sign_up">Start your practice on Doctoora now!</a></li>
                <li><a href="https://www.doctoora.com/who-we-are">About</a></li>
                <li><a href="https://doctoora-staging.herokuapp.com/">Login/Sign up</a></li>
              </ul>
            </nav>
          </header>
          <div className="clear"></div>
          <div className="top-cta">
            <h1>Feeling Unwell?</h1>
            <h3>Find a Private Practitioner Near You.</h3>
            <a className="orange-btn" href="www.doctoora-staging.herokuapp.com/users/sign_up">Book an Appointment</a>
          </div>
          <div className="snippets">
            <ul>
              <li>Check Up</li>
              <li>Specialist Care</li>
              <li>Lifestyle & Fitness</li>
              <li>Antenatal Care</li>
              <li>Elderly care</li>
            </ul>
          </div>
        </section>
        <section className="doctors-cta">
          <div className="doctors-cta-wrapper">
            <h2>Are you a Doctor / Health & Wellness Professional?</h2>
            <p>Gain access to fully serviced healthcare facilities you can rent to treat your patients across multiple locations.</p>
            <ul>
              <li>Attend to your patients in multiple locations</li>
              <li>Pay per use tariffs, so you avoid unnecessary setup and administrative costs</li>
              <li>Access and book exclusive on demand facilities wherever and whenever you need it</li>
            </ul>
            <a className="orange-btn" href="https://doctoora-staging.herokuapp.com/doctors/sign_up">Start your private practice on our platform now</a>
          </div>
        </section>
        <section className="partners">
          <h2>Partner Organizations</h2>
          <p>Join our network of partners and become a provider of world className healthcare with Doctoora</p>
          <ul className="row">
            <li className="col-sm-3"><img alt="www.doctoora.com" src={belfiore}/></li>
            <li className="col-sm-3"><img alt="www.doctoora.com" src={dentist}/></li>
            <li className="col-sm-3"><img alt="www.doctoora.com" src={mani}/></li>
            <li className="col-sm-3"><img alt="www.doctoora.com" src={mamalette}/></li>
          </ul>
          <a className="orange-btn" href="https://www.doctoora.com/who-we-are">More</a>
        </section>
        <section className="testimonials">
          <div className="testimonials-wrapper">
            <h2>What members of Doctoora network are saying</h2>
          </div>
        </section>
        <section className="testimonials2">
          <div className="testimonials2-wrapper">
            <div className="test-major">
              <p>"Doctoora has saved me from all the people that call me to request consultations. Now, I just direct them to sign up online and register with my practice, so they can book appointments with me whenever they need to.  I have also been enjoying the luxury of flexible working - some weeks I set my availability to only two days a week, so I can focus on other things. Honestly, Doctoora is really creating great value for practitioners here in Nigeria and giving a real incentive not to leave the country." </p>
              <div className="doc-name">
                <h4>Dr Funke Ezekiel-Jegede</h4>
                <p>General Practitioner</p>
              </div>
            </div>
            <div className="test-minor"><img alt="www.doctoora.com" src={dr}/></div>
          </div>
        </section>
        <section className="bottom-cta">
          <h2>Why dont you join us?</h2>
          <p>We are changing healthcare service delivery in Nigeria.</p>
          <a className="orange-btn" href="https://doctoora-staging.herokuapp.com/">Sign Up</a>
        </section>
        <section className="mailing">
          <p>Never miss an Update -  Join our mailing list</p>
          <form>
            <input type="text" name="name" placeholder="Name"/>
            <input type="email" name="email" placeholder="Email"/>
            <button>Subscribe</button>
          </form>
        </section>
        <footer>
          <div className="footer-wrapper">
            <div className="row">
              <div className="box1">
                <ul>
                  <li><a href="https://www.doctoora.com">Home</a></li>
                  <li><a href="https://www.doctoora.com/consumers">Consumers</a></li>
                  <li><a href="https://www.doctoora.com/providers">Healthcare Professional</a></li>
                </ul>
              </div>
              <div className="box2">
                <ul>
                  <li><a href="https://www.doctoora.com/who-we-are">About Us</a></li>
                  <li><a href="https://www.doctoora.com/services">Our Services</a></li>
                  <li><a href="https://www.doctoora.com/blog">Blog</a></li>
                  <li><a href="https://www.doctoora.com/social-impact">Social Impact</a></li>
                </ul>
              </div>
              <div className="box3">
                <ul>
                  <li><a href="https://www.doctoora.com/member-s-sign-up">Member's sign up</a></li>
                  <li><a href="https://www.doctoora.com/doctor-s-sign-up">Healthcare Professional's sign up</a></li>
                  <li><a href="https://www.doctoora.com/careers">Careers</a></li>
                </ul>
              </div>
              <div className="box4">
                <ul>
                  <li><a href="https://www.doctoora.com/contact-us">FAQs</a></li>
                  <li><a href="https://www.doctoora.com/contact-us">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="social"></div>
            <div className="row2">
              <div className="add-box1">Head Office: 11, Criag Street, Ogudu Rd, Lagos, Nigeria</div>
              <div className="add-box2"> &copy; Copyright Doctoora E-health Ltd 2018</div>
              <div className="add-box3">08105094729</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    );
  }
}

export default App;
