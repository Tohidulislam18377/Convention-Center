
import { Accordion, Carousel, Container, Nav, NavDropdown, } from "react-bootstrap";
import './Home.css'
import img from '../../assets/images/banner.png'
import img2 from '../../assets/images/wedding.png'
import img3 from '../../assets/images/person 1.png'
import img4 from '../../assets/images/person 2.png'
import img6 from '../../assets/images/person 3.png'
import img5 from '../../assets/images/people.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="over">
      {/* navigation bar */}

      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', }}>
          <div style={{ marginTop: '10px' }}><Link style={{ textDecoration: 'none', color: 'black', fontSize: '18px', fontWeight: '600',}}>Abacus Convention Center</Link> </div>

          {/* Dropdown */}

          <div>
            <Nav>
              <NavDropdown title="More" id="basic-nav-dropdown">

                <Link style={{ textDecoration: 'none', border: '0px', color: 'black', paddingLeft: '10px', paddingTop: '3px', paddingBottom: '3px' }}><p style={{ marginTop: '-20px', paddingLeft: '10px' }} className="abc">Home</p></Link>


                <Link style={{ textDecoration: 'none', border: '0px', color: 'black', paddingLeft: '10px', paddingTop: '3px', paddingBottom: '3px' }}><p style={{ marginTop: '-40px', paddingLeft: '10px' }} className="abc">About Us</p></Link>

                <Link style={{ textDecoration: 'none', border: '0px', color: 'black', paddingLeft: '10px', paddingTop: '3px', paddingBottom: '3px' }}><p style={{ marginTop: '-40px', paddingLeft: '10px' }} className="abc"> Contact</p></Link>

                <Link style={{ textDecoration: 'none', border: '0px', color: 'black', paddingLeft: '10px', paddingTop: '3px', }}><p style={{ marginTop: '-40px', paddingLeft: '10px', paddingBottom: 'px' }} className="abc">Subscribe </p></Link>

              </NavDropdown>
              <Nav.Link style={{ color: 'black' }} href="#home">Home</Nav.Link>
              <Nav.Link style={{ color: 'black' }} href="#link">About Us</Nav.Link>
              <Nav.Link style={{ color: 'black' }} href="#link">Contact</Nav.Link>
              <Nav.Link style={{ color: 'black' }} href="#link">Subscribe</Nav.Link>

            </Nav>
          </div>

        </div>

      </Container>


      {/* // banner section */}
      <Carousel style={{ marginLeft: '30px', marginRight: '30px', marginBottom: '20px' }}>
        <Carousel.Item>
          <img style={{ borderRadius: '5px' }} className="img-fluid" src={img} alt="" />
          <Carousel.Caption>
            <div>
              <h3>The perfect venue for your <br />
                next event</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor <br /> do amet sint. Velit officia consequat duis enim velit </p>
              <button style={{ border: '0px', padding: '5px', borderRadius: '5px', color: '#3F87F5', marginBottom: '15px' }}>Book Now</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ borderRadius: '5px' }} className="img-fluid" src={img} alt="" />
          <Carousel.Caption>
            <div>
              <h3>The perfect venue for your <br />
                next event</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor <br /> do amet sint. Velit officia consequat duis enim velit </p>
              <button style={{ border: '0px', padding: '5px', borderRadius: '5px', color: '#3F87F5', marginBottom: '15px' }}>Book Now</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ borderRadius: '5px' }} className="img-fluid" src={img} alt="" />
          <Carousel.Caption>
            <div>
              <h3>The perfect venue for your <br />
                next event</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor <br /> do amet sint. Velit officia consequat duis enim velit </p>
              <button style={{ border: '0px', padding: '5px', borderRadius: '5px', color: '#3F87F5', marginBottom: '15px' }}>Book Now</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ borderRadius: '5px' }} className="img-fluid" src={img} alt="" />
          <Carousel.Caption>
            <div>
              <h3>The perfect venue for your <br />
                next event</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor <br /> do amet sint. Velit officia consequat duis enim velit </p>
              <button style={{ border: '0px', padding: '5px', borderRadius: '5px', color: '#3F87F5', marginBottom: '15px' }}>Book Now</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* banner section2 */}
      <div style={{ marginBottom: '20px' }} className="row gx-5">
        <div className="col col-6">
          <img style={{ marginLeft: '30px', marginRight: '30px', paddingLeft: '50px' }} className="img-fluid " src={img2} alt="" />
        </div>

        <div className="col col-6 d-flex align-items-center ">
          <div>
            <p style={{ paddingLeft: "20px", fontSize: '18px', fontWeight: '600' }}>Every moment is Precious </p>
            <p style={{ textAlign: 'start', paddingLeft: "20px", paddingRight: '20px' }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button style={{ marginLeft: "20px", border: '0px', backgroundColor: 'blue', color: 'white', borderRadius: '5px', padding: '5px' }}>Explore our album</button>
          </div>
        </div>
      </div>

      {/* Our package */}
      <p style={{ textAlign: 'center', fontSize: '30px', fontWeight: '700', marginBottom: '80px' }}>Our Packages</p>
      <div style={{ marginBottom: '20px' }} className="row ms-4 me-4 gx-5">
        <div style={{ paddingLeft: '20px', paddingRight: '20px' }} className="col col-3">
          <p style={{ color: '#231D4F', fontSize: '24px', fontWeight: '700', marginBottom: '0px' }}>$Our package</p>
          <p style={{ fontSize: '20px', fontWeight: '700', color: '#231D4F' }}>Business fair</p>
          <p>For most businesses event <br />
            like book fair, craft fair.</p>
          <p style={{ marginBottom: '2px' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> limited space access</p>
          <p style={{ marginBottom: '2px' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> Secuirty facility</p>
          <p style={{ marginBottom: '2px' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> event support</p>
          <p style={{ marginBottom: '2px' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span>Decoration design</p>
          <p><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> Per day bill</p>
          <button style={{ border: '0px', backgroundColor: '#F496D1', height: '45px', width: '207px', borderRadius: '5px', fontSize: '18px' }}>Choose plan</button>
        </div>
        <div style={{ paddingLeft: '20px', paddingRight: '20px' }} className="col col-3 ">
          <p style={{ color: '#231D4F', fontSize: '24px', fontWeight: '700', marginBottom: '0px' }}>$500</p>
          <p style={{ fontSize: '20px', fontWeight: '700', color: '#231D4F' }}>wedding basic</p>
          <p>For weddings with basic plan
            and limited item</p>
          <p style={{ marginBottom: '2px' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> Full space access</p>
          <p style={{ marginBottom: '2px' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> Food arrangement</p>
          <p style={{ marginBottom: '2px' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> mangement support</p>
          <p style={{ marginBottom: '2px' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> Decoration design</p>
          <p><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> Billed as shift</p>
          <button style={{ border: '0px', backgroundColor: '#F496D1', height: '45px', width: '207px', borderRadius: '5px', fontSize: '18px' }}>Choose plan</button>
        </div>
        <div style={{ paddingLeft: '20px', paddingRight: '20px', backgroundColor: '#3F87F5', height: '385px', marginTop: '-50px', borderRadius: '5px', }} className="col col-3">
          <p style={{ color: 'white', fontSize: '24px', fontWeight: '700', marginBottom: '0px', paddingTop: '10px' }}>$800</p>
          <p style={{ fontSize: '20px', fontWeight: '700', color: 'white' }}>Wedding plus</p>
          <p style={{ color: 'white' }}>For most weddings with premium plans</p>
          <p style={{ marginBottom: '2px', color: 'white' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> Full space access</p>
          <p style={{ marginBottom: '2px', color: 'white' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> Dedicated team</p>
          <p style={{ marginBottom: '2px', color: 'white' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> Buffet food</p>
          <p style={{ marginBottom: '2px', color: 'white' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> premium Decoration</p>
          <p style={{ color: 'white' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> pay as plan</p>
          <button style={{ border: '0px', backgroundColor: '#F496D1', height: '45px', width: '190px', borderRadius: '5px', fontSize: '18px', marginRight: '25px' }}>Choose plan</button>
        </div>
        <div style={{ paddingLeft: '20px', paddingRight: '20px' }} className="col col-3">
          <p style={{ color: '#231D4F', fontSize: '24px', fontWeight: '700', marginBottom: '0px' }}>$1200</p>
          <p style={{ fontSize: '20px', fontWeight: '700', color: '#231D4F' }}>Corporate event</p>
          <p>For most corporate business
            events</p>
          <p style={{ marginBottom: '2px' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> Full space access</p>
          <p style={{ marginBottom: '2px' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> Dedicated team</p>
          <p style={{ marginBottom: '2px' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> Buffet food</p>
          <p style={{ marginBottom: '2px' }}><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> premium Decoration</p>
          <p><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z" fill="#5243C2" fill-opacity="0.103693" />
            <path d="M15.7724 6.83337L10.0683 14.5742C9.93221 14.7547 9.72936 14.873 9.50527 14.9024C9.28118 14.9319 9.05465 14.8701 8.87659 14.7309L4.80325 11.4742C4.44381 11.1866 4.3856 10.662 4.67325 10.3025C4.9609 9.94309 5.48547 9.88489 5.84492 10.1725L9.24159 12.89L14.4308 5.84754C14.6009 5.5922 14.8976 5.45103 15.2031 5.48007C15.5086 5.50912 15.7734 5.70368 15.8923 5.98652C16.0113 6.26935 15.9653 6.59469 15.7724 6.83337Z" fill="#5243C2" />
          </svg></span> pay as plan</p>
          <button style={{ border: '0px', backgroundColor: '#F496D1', height: '45px', width: '207px', borderRadius: '5px', fontSize: '18px' }}>Choose plan</button>
        </div>
      </div>

      {/* Happy Clients says section */}
      <p style={{ textAlign: 'center', fontSize: '24px', fontWeight: '700', marginBottom: '25px' }}>Happy Clients says</p>


      {/* client */}

      <div className="client">
        <div style={{boxShadow:'0px 12px 30px 0px rgba(0, 0, 0, 0.13)', backgroundColor:'white', borderRadius:'5px'}}>
          <p style={{textAlign:'center', paddingTop:'10px', paddingLeft:'30px', paddingRight:'30px'}}>Slate helps you see how
            many more days you need
            to work to reach your financial
            goal for the month and year.</p>
          <img style={{paddingLeft:'90px'}} src={img3} alt="" />
          <p style={{textAlign:'center', fontSize:'14px', fontWeight:'600', color:'#0C1920' }}>Regina Miles</p>
          <p style={{textAlign:'center', marginTop:'-15px'}}>Banker</p>
        </div>
        <div style={{boxShadow:'0px 12px 30px 0px rgba(0, 0, 0, 0.13)', backgroundColor:'white', borderRadius:'5px'}}>
          <p style={{textAlign:'center', paddingTop:'10px', paddingLeft:'30px', paddingRight:'30px'}}>Slate helps you see how
            many more days you need
            to work to reach your financial
            goal for the month and year.</p>
          <img style={{paddingLeft:'90px'}} src={img4} alt="" />
          <p style={{textAlign:'center',fontSize:'14px', fontWeight:'600', color:'#0C1920' }}>Jone Drake</p>
          <p style={{textAlign:'center', marginTop:'-15px'}}>Banker</p>
        </div>
        <div style={{boxShadow:'0px 12px 30px 0px rgba(0, 0, 0, 0.13)', backgroundColor:'white',borderRadius:'5px'}}>
          <p style={{textAlign:'center', paddingTop:'10px', paddingLeft:'30px', paddingRight:'30px'}}>Slate helps you see how
            many more days you need
            to work to reach your financial
            goal for the month and year.</p>
            <img style={{paddingLeft:'90px'}} src={img6} alt="" />
            <p style={{textAlign:'center',fontSize:'14px', fontWeight:'600', color:'#0C1920' }}>Cret Yater</p>
            <p style={{textAlign:'center', marginTop:'-15px'}}>Banker</p>
        </div>
      </div>
      {/* Frequently Asked Questions */}

      <p style={{textAlign:'center', fontSize:'24px', fontWeight:'700', color:'black', marginBottom:'25px'}}>Frequently Asked Questions</p>
      <div className="row mb-5 ms-3">
        <div className="col col-6 ps-4 gx-5">
      
        <Accordion defaultActiveKey={['0']}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What’s the difference between event design and event planning? </Accordion.Header>
        <Accordion.Body style={{outlineStyle:'none', border:'0px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How early do we need to start planning an event?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is your refund and cancellation policy?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How do you keep budgets on track?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
   
        </div>
        <div  className="col col-6">
         <div>
         <img style={{marginBottom:'35px'} } className="img-fluid pe-4" src={img5} alt="" />
         </div>
          
        </div>
      </div>
      <div style={{display:'flex',  alignItems:'center', columnGap:'550px',marginLeft:'25px', backgroundColor:'black', marginBottom:'25px', borderRadius:'5px', marginRight:'25px'}}>
          <div>
            <p style={{color:'white', paddingLeft:'25px', paddingTop:'20px'}}>© 2020 bike. All rights reserved</p>
          </div>
          <div>
            <p style={{color:'white', paddingTop:'10px'}}>Get the App</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="135" height="40" viewBox="0 0 135 40" fill="none">
  <g clip-path="url(#clip0_11_211)">
    <path d="M124.249 -7.3291e-06H10.7566C10.3429 -7.3291e-06 9.9342 -7.32904e-06 9.5216 0.00199267C9.17621 0.00399267 8.83358 0.00980267 8.48488 0.0146927C7.72733 0.0225945 6.97157 0.0816689 6.22416 0.191403C5.4778 0.303525 4.75482 0.514908 4.07967 0.818403C3.40534 1.12446 2.7892 1.52216 2.25357 1.99706C1.71514 2.47063 1.26632 3.01801 0.924356 3.61815C0.581453 4.2171 0.343683 4.85893 0.219258 5.52147C0.0936495 6.18318 0.0260586 6.85251 0.0170916 7.52347C0.00662229 7.83007 0.00551669 8.13769 0 8.44433V31.5586C0.00551669 31.8691 0.00662229 32.1699 0.0170916 32.4805C0.0260614 33.1514 0.0936522 33.8207 0.219258 34.4824C0.343339 35.1453 0.581124 35.7875 0.924356 36.3867C1.26616 36.9849 1.71505 37.5301 2.25357 38.001C2.78717 38.478 3.40371 38.876 4.07967 39.1797C4.75481 39.484 5.47772 39.6966 6.22416 39.8105C6.9717 39.9193 7.72738 39.9784 8.48488 39.9873C8.83358 39.9941 9.17621 39.998 9.5216 39.998C9.93419 40 10.343 40 10.7566 40H124.249C124.655 40 125.067 40 125.472 39.998C125.816 39.998 126.169 39.9941 126.512 39.9873C127.268 39.9789 128.023 39.9198 128.769 39.8105C129.518 39.6958 130.243 39.4833 130.921 39.1797C131.597 38.8758 132.213 38.4778 132.746 38.001C133.283 37.5282 133.733 36.9834 134.079 36.3867C134.42 35.7871 134.655 35.1449 134.777 34.4824C134.903 33.8206 134.973 33.1515 134.987 32.4805C134.991 32.1699 134.991 31.8691 134.991 31.5586C135 31.1953 135 30.834 135 30.4648V9.53612C135 9.16991 135 8.80663 134.991 8.44433C134.991 8.13769 134.991 7.83007 134.987 7.52343C134.973 6.85242 134.903 6.18323 134.777 5.52143C134.655 4.85927 134.419 4.2175 134.079 3.61811C133.383 2.41519 132.278 1.43602 130.921 0.818313C130.243 0.51556 129.518 0.304233 128.769 0.191313C128.023 0.0810955 127.269 0.0220004 126.512 0.0145527C126.169 0.00967267 125.816 0.00381267 125.472 0.00186267C125.067 -0.000137329 124.655 -0.000137329 124.249 -0.000137329V-7.3291e-06Z" fill="#A6A6A6"/>
    <path d="M9.43001 39.128C9.08569 39.128 8.74969 39.1241 8.40807 39.1173C7.70037 39.1091 6.99433 39.0546 6.29574 38.9542C5.64433 38.8549 5.0133 38.6702 4.42345 38.4061C3.839 38.1443 3.30594 37.801 2.84469 37.3893C2.37676 36.9825 1.98718 36.5107 1.6914 35.9925C1.39236 35.471 1.18541 34.912 1.07775 34.335C0.961494 33.715 0.898592 33.088 0.889592 32.4596C0.882427 32.2487 0.873047 31.5463 0.873047 31.5463V8.44092C0.873047 8.44092 0.883037 7.74936 0.889648 7.54619C0.898266 6.91874 0.960802 6.29278 1.07671 5.67373C1.18457 5.09513 1.39168 4.53451 1.69088 4.01128C1.98557 3.49349 2.37299 3.02131 2.8381 2.61304C3.30269 2.20089 3.83745 1.85581 4.42289 1.59036C5.01139 1.32718 5.64123 1.14378 6.29132 1.0463C6.99221 0.944847 7.7007 0.889995 8.41085 0.882208L9.43056 0.869995H125.57L126.602 0.882698C127.306 0.890099 128.008 0.944461 128.702 1.04532C129.359 1.14403 129.995 1.32871 130.59 1.59329C131.763 2.12824 132.718 2.9746 133.32 4.01372C133.614 4.53334 133.818 5.08938 133.924 5.66299C134.042 6.28712 134.107 6.918 134.121 7.55059C134.124 7.83385 134.124 8.13811 134.124 8.44092C134.133 8.816 134.133 9.173 134.133 9.53294V30.466C134.133 30.8294 134.133 31.1839 134.124 31.5414C134.124 31.8667 134.124 32.1646 134.12 32.4713C134.107 33.0926 134.042 33.7122 133.927 34.3252C133.821 34.9064 133.615 35.4697 133.316 35.9955C133.018 36.5081 132.631 36.9758 132.169 37.3815C131.707 37.7954 131.173 38.1407 130.587 38.4042C129.994 38.6703 129.358 38.8557 128.702 38.9542C128.004 39.0551 127.297 39.1097 126.59 39.1173C126.259 39.1241 125.912 39.128 125.576 39.128L124.35 39.13L9.43001 39.128Z" fill="black"/>
    <path d="M32.7973 20.3007C32.8081 19.466 33.0298 18.6476 33.4418 17.9217C33.8538 17.1957 34.4428 16.5858 35.1539 16.1486C34.7021 15.5034 34.1062 14.9725 33.4134 14.598C32.7205 14.2234 31.9499 14.0156 31.1627 13.9909C29.4835 13.8147 27.8555 14.9958 26.9998 14.9958C26.1275 14.9958 24.81 14.0084 23.3913 14.0376C22.4736 14.0673 21.5793 14.3341 20.7954 14.8122C20.0115 15.2902 19.3649 15.9632 18.9184 16.7655C16.9844 20.1139 18.427 25.035 20.2796 27.7416C21.2065 29.0669 22.2898 30.5474 23.7072 30.4949C25.0943 30.4373 25.6123 29.6104 27.2866 29.6104C28.9454 29.6104 29.4314 30.4949 30.8776 30.4615C32.366 30.4373 33.3038 29.1302 34.1981 27.7923C34.8641 26.848 35.3766 25.8043 35.7166 24.6998C34.8518 24.3341 34.1139 23.7219 33.5948 22.9396C33.0757 22.1573 32.7983 21.2395 32.7973 20.3007Z" fill="white"/>
    <path d="M30.0656 12.2109C30.8772 11.2367 31.277 9.98449 31.1802 8.72026C29.9403 8.85048 28.7951 9.44304 27.9726 10.3799C27.5704 10.8375 27.2624 11.37 27.0662 11.9467C26.87 12.5235 26.7893 13.1333 26.8289 13.7413C27.449 13.7476 28.0625 13.6132 28.6232 13.3481C29.1838 13.0831 29.6771 12.6942 30.0656 12.2109Z" fill="white"/>
    <path d="M50.3307 27.1396H45.5973L44.4606 30.4961H42.4557L46.9391 18.0781H49.0221L53.5055 30.4961H51.4664L50.3307 27.1396ZM46.0875 25.5908H49.8395L47.9899 20.1435H47.9381L46.0875 25.5908Z" fill="white"/>
    <path d="M63.1881 25.9697C63.1881 28.7832 61.6823 30.5908 59.4098 30.5908C58.8342 30.6209 58.2617 30.4883 57.7579 30.2082C57.2541 29.928 56.8394 29.5117 56.5612 29.0068H56.5182V33.4912H54.6598V21.4424H56.4586V22.9482H56.4928C56.7838 22.4458 57.2055 22.0316 57.7131 21.7497C58.2208 21.4679 58.7953 21.3289 59.3756 21.3476C61.6735 21.3477 63.1881 23.1641 63.1881 25.9697ZM61.278 25.9697C61.278 24.1367 60.3307 22.9316 58.8854 22.9316C57.4655 22.9316 56.5104 24.1621 56.5104 25.9697C56.5104 27.7939 57.4655 29.0156 58.8854 29.0156C60.3307 29.0156 61.278 27.8193 61.278 25.9697Z" fill="white"/>
    <path d="M73.153 25.9697C73.153 28.7832 71.6471 30.5908 69.3747 30.5908C68.799 30.6209 68.2265 30.4883 67.7227 30.2082C67.2189 29.928 66.8042 29.5117 66.526 29.0068H66.483V33.4912H64.6246V21.4424H66.4235V22.9482H66.4576C66.7486 22.4458 67.1703 22.0316 67.678 21.7497C68.1856 21.4679 68.7601 21.3289 69.3405 21.3476C71.6383 21.3476 73.153 23.164 73.153 25.9697ZM71.2428 25.9697C71.2428 24.1367 70.2956 22.9316 68.8502 22.9316C67.4303 22.9316 66.4752 24.1621 66.4752 25.9697C66.4752 27.7939 67.4303 29.0156 68.8502 29.0156C70.2956 29.0156 71.2428 27.8193 71.2428 25.9697H71.2428Z" fill="white"/>
    <path d="M79.7389 27.0361C79.8766 28.2676 81.0729 29.0761 82.7077 29.0761C84.2741 29.0761 85.401 28.2675 85.401 27.1572C85.401 26.1933 84.7213 25.6162 83.112 25.2207L81.5026 24.833C79.2223 24.2822 78.1637 23.2158 78.1637 21.4853C78.1637 19.3427 80.0309 17.871 82.6823 17.871C85.3063 17.871 87.1051 19.3427 87.1657 21.4853H85.2897C85.1774 20.246 84.153 19.498 82.6559 19.498C81.1588 19.498 80.1344 20.2548 80.1344 21.3564C80.1344 22.2343 80.7887 22.7509 82.3893 23.1464L83.7574 23.4823C86.3053 24.0849 87.3639 25.1083 87.3639 26.9247C87.3639 29.248 85.5133 30.703 82.5699 30.703C79.816 30.703 77.9567 29.2821 77.8365 27.036L79.7389 27.0361Z" fill="white"/>
    <path d="M91.3746 19.2998V21.4424H93.0963V22.914H91.3746V27.9053C91.3746 28.6806 91.7194 29.042 92.4762 29.042C92.6806 29.0384 92.8846 29.0241 93.0875 28.999V30.4619C92.7472 30.5254 92.4014 30.5542 92.0553 30.5478C90.2223 30.5478 89.5074 29.8593 89.5074 28.1035V22.914H88.191V21.4424H89.5074V19.2998H91.3746Z" fill="white"/>
    <path d="M94.0934 25.9697C94.0934 23.1211 95.7711 21.3311 98.3873 21.3311C101.012 21.3311 102.682 23.1211 102.682 25.9697C102.682 28.8262 101.021 30.6084 98.3873 30.6084C95.7545 30.6084 94.0934 28.8262 94.0934 25.9697ZM100.789 25.9697C100.789 24.0156 99.8932 22.8623 98.3873 22.8623C96.8815 22.8623 95.9869 24.0244 95.9869 25.9697C95.9869 27.9316 96.8815 29.0762 98.3873 29.0762C99.8932 29.0762 100.789 27.9316 100.789 25.9697H100.789Z" fill="white"/>
    <path d="M104.214 21.4424H105.987V22.9834H106.03C106.15 22.5021 106.432 22.0768 106.828 21.7789C107.225 21.481 107.712 21.3287 108.208 21.3476C108.422 21.3469 108.635 21.3701 108.844 21.417V23.1552C108.574 23.0726 108.292 23.0347 108.009 23.0429C107.739 23.032 107.47 23.0796 107.22 23.1825C106.971 23.2854 106.746 23.4411 106.562 23.639C106.378 23.8369 106.239 24.0722 106.155 24.3289C106.07 24.5856 106.042 24.8575 106.073 25.1259V30.4961H104.214L104.214 21.4424Z" fill="white"/>
    <path d="M117.413 27.8369C117.163 29.4804 115.562 30.6084 113.514 30.6084C110.88 30.6084 109.246 28.8437 109.246 26.0127C109.246 23.1728 110.889 21.331 113.436 21.331C115.941 21.331 117.516 23.0517 117.516 25.7969V26.4336H111.122V26.5459C111.092 26.8791 111.134 27.2147 111.244 27.5306C111.354 27.8464 111.53 28.1352 111.761 28.3778C111.991 28.6203 112.27 28.8111 112.58 28.9374C112.89 29.0637 113.223 29.1226 113.557 29.1103C113.996 29.1515 114.437 29.0498 114.814 28.8203C115.191 28.5909 115.483 28.246 115.648 27.8369L117.413 27.8369ZM111.13 25.1347H115.657C115.674 24.8352 115.628 24.5353 115.523 24.2541C115.419 23.9729 115.257 23.7164 115.049 23.5006C114.84 23.2849 114.589 23.1145 114.312 23.0003C114.034 22.8861 113.736 22.8305 113.436 22.8369C113.134 22.8351 112.834 22.8932 112.553 23.008C112.273 23.1227 112.019 23.2918 111.805 23.5054C111.59 23.7191 111.42 23.973 111.305 24.2527C111.189 24.5323 111.13 24.8321 111.13 25.1348V25.1347Z" fill="white"/>
    <path d="M45.8546 8.731C46.2442 8.70304 46.6352 8.7619 46.9993 8.90333C47.3634 9.04477 47.6916 9.26525 47.9602 9.54887C48.2288 9.8325 48.4311 10.1722 48.5525 10.5435C48.6739 10.9147 48.7114 11.3083 48.6622 11.6958C48.6622 13.6021 47.632 14.6978 45.8546 14.6978H43.6993V8.731H45.8546ZM44.6261 13.854H45.7511C46.0295 13.8706 46.3081 13.825 46.5666 13.7204C46.8252 13.6158 47.0571 13.4548 47.2456 13.2492C47.4341 13.0437 47.5744 12.7987 47.6563 12.5321C47.7381 12.2654 47.7595 11.9839 47.7189 11.708C47.7566 11.4332 47.733 11.1534 47.6499 10.8887C47.5668 10.6241 47.4262 10.3811 47.2381 10.1771C47.05 9.9732 46.8192 9.81339 46.5621 9.70916C46.305 9.60492 46.0281 9.55884 45.7511 9.57421H44.6261V13.854Z" fill="white"/>
    <path d="M49.7091 12.4443C49.6808 12.1484 49.7147 11.8498 49.8085 11.5678C49.9024 11.2857 50.0541 11.0264 50.2541 10.8064C50.454 10.5864 50.6977 10.4106 50.9696 10.2904C51.2414 10.1701 51.5354 10.108 51.8327 10.108C52.1299 10.108 52.4239 10.1701 52.6958 10.2904C52.9676 10.4106 53.2113 10.5864 53.4113 10.8064C53.6112 11.0264 53.763 11.2857 53.8568 11.5678C53.9507 11.8498 53.9845 12.1484 53.9562 12.4443C53.9851 12.7406 53.9516 13.0395 53.858 13.3221C53.7644 13.6046 53.6128 13.8644 53.4128 14.0848C53.2128 14.3052 52.9689 14.4814 52.6968 14.6019C52.4246 14.7224 52.1303 14.7847 51.8327 14.7847C51.5351 14.7847 51.2407 14.7224 50.9686 14.6019C50.6965 14.4814 50.4526 14.3052 50.2526 14.0848C50.0526 13.8644 49.9009 13.6046 49.8073 13.3221C49.7137 13.0395 49.6803 12.7406 49.7091 12.4443ZM53.0421 12.4443C53.0421 11.4683 52.6037 10.8975 51.8341 10.8975C51.0617 10.8975 50.6271 11.4683 50.6271 12.4443C50.6271 13.4282 51.0617 13.9946 51.8341 13.9946C52.6037 13.9946 53.0422 13.4243 53.0422 12.4443H53.0421Z" fill="white"/>
    <path d="M59.6017 14.6978H58.6798L57.7491 11.3813H57.6788L56.7521 14.6978H55.839L54.5978 10.1948H55.4991L56.3058 13.6308H56.3722L57.298 10.1948H58.1505L59.0763 13.6308H59.1466L59.9493 10.1948H60.838L59.6017 14.6978Z" fill="white"/>
    <path d="M61.882 10.1948H62.7374V10.9102H62.8038C62.9165 10.6532 63.1065 10.4379 63.3474 10.2941C63.5882 10.1502 63.868 10.0852 64.1476 10.1079C64.3667 10.0914 64.5867 10.1245 64.7913 10.2046C64.9959 10.2847 65.1798 10.4098 65.3295 10.5706C65.4792 10.7314 65.5908 10.9239 65.656 11.1337C65.7212 11.3435 65.7383 11.5654 65.7062 11.7827V14.6977H64.8175V12.0059C64.8175 11.2822 64.5031 10.9224 63.8458 10.9224C63.6971 10.9154 63.5486 10.9408 63.4105 10.9966C63.2725 11.0524 63.1481 11.1374 63.046 11.2458C62.9439 11.3542 62.8664 11.4834 62.8188 11.6245C62.7713 11.7657 62.7549 11.9154 62.7706 12.0635V14.6978H61.882L61.882 10.1948Z" fill="white"/>
    <path d="M67.1222 8.437H68.0109V14.6977H67.1222V8.437Z" fill="white"/>
    <path d="M69.2462 12.4443C69.2179 12.1484 69.2518 11.8498 69.3457 11.5677C69.4395 11.2857 69.5913 11.0263 69.7913 10.8063C69.9912 10.5863 70.235 10.4106 70.5068 10.2903C70.7787 10.17 71.0727 10.1079 71.37 10.1079C71.6673 10.1079 71.9613 10.17 72.2332 10.2903C72.505 10.4106 72.7488 10.5863 72.9487 10.8063C73.1487 11.0263 73.3005 11.2857 73.3943 11.5677C73.4882 11.8498 73.5221 12.1484 73.4938 12.4443C73.5226 12.7406 73.4891 13.0396 73.3955 13.3221C73.3019 13.6046 73.1502 13.8644 72.9502 14.0848C72.7502 14.3052 72.5062 14.4814 72.2341 14.6019C71.962 14.7224 71.6676 14.7847 71.37 14.7847C71.0724 14.7847 70.778 14.7224 70.5059 14.6019C70.2338 14.4814 69.9899 14.3052 69.7898 14.0848C69.5898 13.8644 69.4381 13.6046 69.3445 13.3221C69.2509 13.0396 69.2174 12.7406 69.2462 12.4443ZM72.5792 12.4443C72.5792 11.4683 72.1407 10.8975 71.3712 10.8975C70.5988 10.8975 70.1642 11.4683 70.1642 12.4444C70.1642 13.4282 70.5988 13.9946 71.3712 13.9946C72.1408 13.9946 72.5792 13.4243 72.5792 12.4443H72.5792Z" fill="white"/>
    <path d="M74.4293 13.4243C74.4293 12.6138 75.0328 12.1465 76.1041 12.0801L77.3239 12.0098V11.6211C77.3239 11.1455 77.0094 10.877 76.402 10.877C75.9059 10.877 75.5621 11.0591 75.4635 11.3774H74.6031C74.694 10.604 75.4215 10.1079 76.443 10.1079C77.5719 10.1079 78.2086 10.6699 78.2086 11.6211V14.6978H77.3531V14.0649H77.2828C77.1401 14.2919 76.9397 14.477 76.7021 14.6012C76.4645 14.7254 76.1981 14.7843 75.9303 14.7719C75.7413 14.7916 75.5502 14.7714 75.3694 14.7127C75.1887 14.654 75.0222 14.5581 74.8808 14.4311C74.7394 14.3042 74.6262 14.149 74.5484 13.9756C74.4706 13.8021 74.4301 13.6144 74.4293 13.4243ZM77.3239 13.0395V12.6631L76.2242 12.7334C75.6041 12.7749 75.3229 12.9858 75.3229 13.3828C75.3229 13.7881 75.6744 14.0239 76.1579 14.0239C76.2995 14.0382 76.4426 14.0239 76.5786 13.9819C76.7146 13.9398 76.8408 13.8707 76.9495 13.7789C77.0583 13.6871 77.1475 13.5743 77.2118 13.4473C77.2761 13.3202 77.3142 13.1816 77.3239 13.0395Z" fill="white"/>
    <path d="M79.3766 12.4443C79.3766 11.0215 80.108 10.1201 81.2457 10.1201C81.5271 10.1071 81.8064 10.1746 82.051 10.3144C82.2955 10.4543 82.4951 10.6609 82.6266 10.9101H82.693V8.437H83.5817V14.6977H82.7301V13.9863H82.6598C82.5182 14.2338 82.3116 14.4378 82.0623 14.5763C81.8131 14.7148 81.5307 14.7824 81.2457 14.7719C80.1002 14.772 79.3766 13.8706 79.3766 12.4443ZM80.2946 12.4443C80.2946 13.3994 80.7448 13.9741 81.4977 13.9741C82.2467 13.9741 82.7096 13.3911 82.7096 12.4482C82.7096 11.5098 82.2419 10.9185 81.4977 10.9185C80.7496 10.9185 80.2946 11.4971 80.2946 12.4443H80.2946Z" fill="white"/>
    <path d="M87.2585 12.4443C87.2301 12.1484 87.264 11.8498 87.3578 11.5678C87.4517 11.2857 87.6034 11.0264 87.8034 10.8064C88.0033 10.5864 88.247 10.4106 88.5189 10.2904C88.7907 10.1701 89.0847 10.108 89.382 10.108C89.6793 10.108 89.9732 10.1701 90.2451 10.2904C90.517 10.4106 90.7607 10.5864 90.9606 10.8064C91.1605 11.0264 91.3123 11.2857 91.4061 11.5678C91.5 11.8498 91.5338 12.1484 91.5055 12.4443C91.5344 12.7406 91.5009 13.0395 91.4073 13.3221C91.3137 13.6046 91.1621 13.8644 90.9621 14.0848C90.7621 14.3052 90.5182 14.4814 90.2461 14.6019C89.9739 14.7224 89.6796 14.7847 89.382 14.7847C89.0844 14.7847 88.79 14.7224 88.5179 14.6019C88.2458 14.4814 88.0019 14.3052 87.8019 14.0848C87.6019 13.8644 87.4502 13.6046 87.3566 13.3221C87.2631 13.0395 87.2296 12.7406 87.2585 12.4443ZM90.5915 12.4443C90.5915 11.4683 90.153 10.8975 89.3835 10.8975C88.611 10.8975 88.1765 11.4683 88.1765 12.4443C88.1765 13.4282 88.611 13.9946 89.3835 13.9946C90.153 13.9946 90.5915 13.4243 90.5915 12.4443Z" fill="white"/>
    <path d="M92.6979 10.1948H93.5533V10.9102H93.6198C93.7324 10.6532 93.9224 10.4379 94.1633 10.2941C94.4042 10.1502 94.6839 10.0852 94.9635 10.1079C95.1826 10.0914 95.4026 10.1245 95.6072 10.2046C95.8118 10.2847 95.9958 10.4098 96.1454 10.5706C96.2951 10.7314 96.4067 10.9239 96.4719 11.1337C96.5371 11.3435 96.5543 11.5654 96.5221 11.7827V14.6977H95.6334V12.0059C95.6334 11.2822 95.319 10.9224 94.6618 10.9224C94.513 10.9154 94.3645 10.9408 94.2264 10.9966C94.0884 11.0524 93.964 11.1374 93.8619 11.2458C93.7598 11.3542 93.6823 11.4834 93.6348 11.6245C93.5872 11.7657 93.5708 11.9154 93.5865 12.0635V14.6978H92.6979V10.1948Z" fill="white"/>
    <path d="M101.544 9.07373V10.2153H102.519V10.9639H101.544V13.2793C101.544 13.751 101.738 13.9575 102.18 13.9575C102.294 13.9572 102.407 13.9503 102.519 13.937V14.6772C102.36 14.7058 102.198 14.721 102.036 14.7226C101.047 14.7226 100.654 14.375 100.654 13.5068V10.9638H99.9391V10.2153H100.654V9.07373H101.544Z" fill="white"/>
    <path d="M103.733 8.437H104.614V10.9184H104.684C104.802 10.6591 104.998 10.4425 105.243 10.2982C105.489 10.1538 105.773 10.0888 106.057 10.1118C106.275 10.0999 106.493 10.1363 106.695 10.2184C106.898 10.3004 107.079 10.4261 107.227 10.5864C107.376 10.7468 107.486 10.9378 107.552 11.146C107.618 11.3541 107.637 11.5742 107.608 11.7905V14.6977H106.718V12.0097C106.718 11.2905 106.383 10.9262 105.756 10.9262C105.603 10.9137 105.449 10.9347 105.305 10.9878C105.162 11.0408 105.031 11.1247 104.923 11.2334C104.815 11.3421 104.732 11.4731 104.68 11.6173C104.628 11.7614 104.608 11.9152 104.622 12.0678V14.6977H103.733L103.733 8.437Z" fill="white"/>
    <path d="M112.79 13.4819C112.669 13.8935 112.407 14.2495 112.051 14.4876C111.694 14.7258 111.265 14.8309 110.839 14.7847C110.542 14.7925 110.247 14.7357 109.975 14.6181C109.702 14.5006 109.458 14.3252 109.26 14.1041C109.063 13.8829 108.915 13.6214 108.828 13.3375C108.742 13.0537 108.718 12.7544 108.758 12.4604C108.719 12.1656 108.743 11.8656 108.83 11.581C108.916 11.2963 109.063 11.0335 109.26 10.8104C109.457 10.5874 109.699 10.4092 109.971 10.288C110.243 10.1668 110.537 10.1054 110.835 10.1079C112.088 10.1079 112.843 10.9639 112.843 12.3779V12.688H109.664V12.7378C109.65 12.903 109.671 13.0694 109.725 13.2261C109.779 13.3829 109.865 13.5266 109.978 13.648C110.091 13.7695 110.228 13.866 110.38 13.9314C110.533 13.9968 110.697 14.0296 110.863 14.0278C111.076 14.0533 111.291 14.015 111.482 13.9178C111.672 13.8206 111.83 13.6689 111.934 13.4819L112.79 13.4819ZM109.664 12.0308H111.938C111.949 11.8796 111.929 11.7278 111.878 11.5851C111.827 11.4424 111.747 11.3119 111.642 11.2021C111.538 11.0922 111.412 11.0054 111.272 10.9472C111.132 10.889 110.981 10.8608 110.83 10.8643C110.676 10.8623 110.523 10.8912 110.381 10.9491C110.239 11.0071 110.109 11.0929 110.001 11.2016C109.892 11.3104 109.806 11.4397 109.748 11.5821C109.691 11.7245 109.662 11.8771 109.664 12.0308H109.664Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_11_211">
      <rect width="135" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>
</p>
<p>
<svg xmlns="http://www.w3.org/2000/svg" width="135" height="40" viewBox="0 0 135 40" fill="none">
  <g clip-path="url(#clip0_11_244)">
    <path d="M130 0H5C2.23858 0 0 2.23858 0 5V35C0 37.7614 2.23858 40 5 40H130C132.761 40 135 37.7614 135 35V5C135 2.23858 132.761 0 130 0Z" fill="black"/>
    <path d="M130 0.799998C131.114 0.801285 132.181 1.24423 132.968 2.03165C133.756 2.81907 134.199 3.88666 134.2 5.0002V35.0002C134.199 36.1137 133.756 37.1813 132.968 37.9687C132.181 38.7561 131.114 39.1991 130 39.2004H5C3.88645 39.1991 2.81888 38.7562 2.0315 37.9688C1.24412 37.1813 0.801231 36.1137 0.8 35.0002V5.0002C0.801212 3.88664 1.24409 2.81904 2.03148 2.03162C2.81886 1.2442 3.88644 0.801264 5 0.799998H130ZM130 0.000198364H5C3.67511 0.00407646 2.40559 0.532106 1.46875 1.46895C0.531908 2.40579 0.0038781 3.67531 0 5.0002L0 35.0002C0.0038781 36.3251 0.531908 37.5946 1.46875 38.5314C2.40559 39.4683 3.67511 39.9963 5 40.0002H130C131.325 39.9963 132.594 39.4683 133.531 38.5314C134.468 37.5946 134.996 36.3251 135 35.0002V5.0002C134.996 3.67531 134.468 2.40579 133.531 1.46895C132.594 0.532106 131.325 0.00407646 130 0.000198364Z" fill="#A6A6A6"/>
    <path d="M47.4184 10.2433C47.4366 10.6102 47.3799 10.977 47.2518 11.3214C47.1237 11.6657 46.9268 11.9804 46.6732 12.2462C46.389 12.541 46.0457 12.7724 45.6659 12.9254C45.2861 13.0783 44.8783 13.1494 44.4691 13.1339C44.0573 13.1376 43.649 13.0589 43.268 12.9025C42.8871 12.7461 42.5412 12.5152 42.2508 12.2232C41.9604 11.9312 41.7313 11.5842 41.5769 11.2024C41.4226 10.8206 41.3461 10.4118 41.352 10.0001C41.3462 9.58833 41.4227 9.17955 41.577 8.79776C41.7314 8.41598 41.9605 8.0689 42.2509 7.77691C42.5413 7.48492 42.8871 7.2539 43.268 7.09744C43.649 6.94098 44.0573 6.86222 44.4691 6.86579C44.8925 6.86451 45.3116 6.95011 45.7006 7.11729C46.0619 7.26373 46.3834 7.49344 46.6391 7.78769L46.1117 8.31549C45.9107 8.07894 45.6581 7.89173 45.3733 7.7683C45.0885 7.64487 44.7791 7.58851 44.4691 7.60359C44.157 7.60198 43.8478 7.66337 43.56 7.78408C43.2722 7.90479 43.0118 8.08234 42.7942 8.3061C42.5767 8.52986 42.4065 8.79523 42.2939 9.0863C42.1814 9.37738 42.1287 9.68818 42.1391 10.0001C42.1317 10.4673 42.2631 10.9262 42.5168 11.3186C42.7705 11.7109 43.135 12.0191 43.5641 12.2041C43.9932 12.389 44.4676 12.4424 44.927 12.3574C45.3865 12.2724 45.8104 12.0529 46.1449 11.7267C46.4528 11.3949 46.6313 10.9636 46.6478 10.5113H44.4691V9.79059H47.3764C47.4039 9.93994 47.4179 10.0914 47.4184 10.2433Z" fill="white" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
    <path d="M52.0277 7.73741H49.2953V9.63971H51.7592V10.3605H49.2953V12.2628H52.0277V13.0001H48.5248V7.00011H52.0277V7.73741Z" fill="white" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
    <path d="M55.2787 13.0001H54.5072V7.73741H52.8314V7.00011H56.9545V7.73741H55.2787V13.0001Z" fill="white" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
    <path d="M59.9379 13.0001V7.00011H60.7084V13.0001H59.9379Z" fill="white" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
    <path d="M64.1284 13.0001H63.3569V7.73741H61.6812V7.00011H65.8042V7.73741H64.1284V13.0001Z" fill="white" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
    <path d="M73.6093 12.2247C73.0253 12.8069 72.2343 13.1339 71.4096 13.1339C70.5849 13.1339 69.7939 12.8069 69.2099 12.2247C68.921 11.9321 68.6939 11.5843 68.542 11.2022C68.3902 10.82 68.3168 10.4112 68.3261 10.0001C68.3168 9.58898 68.3902 9.18019 68.542 8.79803C68.6939 8.41586 68.921 8.06813 69.2099 7.7755C69.4986 7.48677 69.8413 7.2578 70.2186 7.1017C70.5958 6.9456 71.0002 6.86544 71.4085 6.8658C71.8167 6.86616 72.2209 6.94704 72.5979 7.10381C72.9749 7.26058 73.3173 7.49015 73.6054 7.7794C73.8945 8.07126 74.1221 8.41821 74.2746 8.79968C74.4271 9.18115 74.5014 9.58936 74.4931 10.0001C74.5022 10.4112 74.4286 10.8199 74.2768 11.202C74.125 11.5842 73.898 11.9319 73.6093 12.2247ZM69.7792 11.7223C70.2117 12.1541 70.7979 12.3966 71.4091 12.3966C72.0203 12.3966 72.6065 12.1541 73.039 11.7223C73.2608 11.4952 73.4343 11.2255 73.5489 10.9295C73.6635 10.6335 73.717 10.3173 73.706 10.0001C73.717 9.68286 73.6635 9.36668 73.5489 9.07068C73.4343 8.77467 73.2608 8.50498 73.039 8.2779C72.6065 7.84611 72.0203 7.60359 71.4091 7.60359C70.7979 7.60359 70.2117 7.84611 69.7792 8.2779C69.5577 8.50516 69.3845 8.77491 69.2701 9.07088C69.1556 9.36686 69.1022 9.68295 69.1132 10.0001C69.1022 10.3172 69.1556 10.6333 69.2701 10.9293C69.3845 11.2253 69.5577 11.495 69.7792 11.7223Z" fill="white" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
    <path d="M75.5751 13.0001V7.00011H76.5136L79.4296 11.6676H79.4628L79.4296 10.5113V7.00011H80.2011V13.0001H79.3964L76.3456 8.10651H76.3124L76.3456 9.26281V13.0001H75.5751Z" fill="white" stroke="white" stroke-width="0.2" stroke-miterlimit="10"/>
    <path d="M68.1357 21.7517C67.2952 21.7549 66.4745 22.007 65.7772 22.4763C65.0799 22.9456 64.5373 23.611 64.2178 24.3884C63.8984 25.1659 63.8165 26.0205 63.9824 26.8445C64.1483 27.6685 64.5547 28.4248 65.1501 29.018C65.7456 29.6112 66.5035 30.0147 67.3281 30.1775C68.1527 30.3403 69.007 30.2551 69.7832 29.9327C70.5595 29.6103 71.2228 29.0652 71.6894 28.3661C72.156 27.667 72.4051 26.8453 72.405 26.0048C72.4133 25.4426 72.3084 24.8845 72.0966 24.3637C71.8847 23.8429 71.5703 23.37 71.172 22.9732C70.7737 22.5764 70.2996 22.2638 69.778 22.0539C69.2564 21.8441 68.6979 21.7413 68.1357 21.7517ZM68.1357 28.5825C67.6181 28.6194 67.1014 28.4996 66.6528 28.2387C66.2042 27.9778 65.8445 27.5879 65.6207 27.1198C65.3968 26.6516 65.319 26.1269 65.3975 25.6139C65.476 25.101 65.7071 24.6235 66.0608 24.2438C66.4144 23.864 66.8742 23.5995 67.3803 23.4847C67.8864 23.3699 68.4153 23.4101 68.8982 23.6001C69.3811 23.7902 69.7956 24.1212 70.0877 24.5501C70.3799 24.979 70.5361 25.4859 70.5361 26.0048C70.5519 26.3326 70.5018 26.6603 70.389 26.9685C70.2761 27.2767 70.1028 27.5593 69.8791 27.7994C69.6554 28.0396 69.386 28.2327 69.0866 28.3671C68.7872 28.5016 68.4639 28.5749 68.1357 28.5825ZM58.8223 21.7517C57.9818 21.7549 57.1611 22.007 56.4638 22.4763C55.7665 22.9455 55.2238 23.6109 54.9044 24.3884C54.5849 25.1658 54.503 26.0205 54.6689 26.8444C54.8348 27.6684 55.2411 28.4248 55.8366 29.018C56.4321 29.6112 57.1899 30.0147 58.0145 30.1775C58.8391 30.3403 59.6935 30.2551 60.4697 29.9327C61.246 29.6103 61.9093 29.0652 62.3759 28.3661C62.8425 27.667 63.0916 26.8453 63.0915 26.0048C63.0998 25.4426 62.9949 24.8845 62.7831 24.3637C62.5713 23.8429 62.2568 23.3701 61.8585 22.9733C61.4602 22.5765 60.9862 22.2638 60.4646 22.054C59.943 21.8441 59.3845 21.7413 58.8223 21.7517ZM58.8223 28.5825C58.3047 28.6194 57.788 28.4996 57.3394 28.2387C56.8908 27.9778 56.5311 27.5879 56.3073 27.1198C56.0834 26.6516 56.0056 26.1269 56.0841 25.6139C56.1626 25.101 56.3937 24.6235 56.7474 24.2438C57.101 23.864 57.5608 23.5995 58.0669 23.4847C58.573 23.3699 59.1019 23.4101 59.5848 23.6001C60.0677 23.7902 60.4822 24.1212 60.7743 24.5501C61.0665 24.979 61.2227 25.4859 61.2227 26.0048C61.2385 26.3326 61.1884 26.6603 61.0756 26.9685C60.9628 27.2767 60.7894 27.5593 60.5657 27.7995C60.342 28.0397 60.0726 28.2327 59.7732 28.3672C59.4738 28.5016 59.1505 28.5749 58.8223 28.5825ZM47.7435 23.0567V24.861H52.0612C51.9989 25.7073 51.6526 26.5078 51.0784 27.1326C50.6458 27.5736 50.1254 27.9191 49.551 28.1466C48.9766 28.3741 48.3609 28.4787 47.7435 28.4536C46.4815 28.4365 45.277 27.9232 44.3906 27.0247C43.5042 26.1262 43.0072 24.9148 43.0072 23.6527C43.0072 22.3906 43.5042 21.1792 44.3906 20.2807C45.277 19.3822 46.4815 18.8689 47.7435 18.8518C48.9558 18.836 50.1253 19.2991 50.9979 20.1406L52.2706 18.8679C51.6752 18.2784 50.9681 17.8137 50.1907 17.5011C49.4133 17.1885 48.5813 17.0343 47.7435 17.0474C46.868 17.0347 45.9987 17.1961 45.1862 17.5223C44.3736 17.8485 43.634 18.3331 43.0104 18.9477C42.3867 19.5623 41.8915 20.2948 41.5535 21.1025C41.2155 21.9102 41.0414 22.7771 41.0414 23.6527C41.0414 24.5283 41.2155 25.3952 41.5535 26.2029C41.8915 27.0106 42.3867 27.7431 43.0104 28.3577C43.634 28.9724 44.3736 29.4569 45.1862 29.7831C45.9987 30.1093 46.868 30.2708 47.7435 30.258C48.599 30.2935 49.4522 30.1466 50.2466 29.8272C51.041 29.5078 51.7584 29.0231 52.3511 28.4053C53.4036 27.2566 53.9645 25.7415 53.9139 24.1844C53.9181 23.8063 53.8857 23.4286 53.8171 23.0567H47.7435ZM93.0518 24.4582C92.7962 23.6878 92.3097 23.0148 91.6583 22.5306C91.0069 22.0464 90.2222 21.7744 89.4108 21.7517C88.8644 21.7551 88.3243 21.8693 87.8232 22.0873C87.3221 22.3053 86.8704 22.6227 86.4955 23.0203C86.1205 23.4178 85.8301 23.8873 85.6417 24.4002C85.4533 24.9132 85.3709 25.4591 85.3994 26.0048C85.3871 26.564 85.4876 27.1199 85.695 27.6394C85.9024 28.1588 86.2123 28.6312 86.6063 29.0282C87.0002 29.4252 87.4702 29.7387 87.9881 29.95C88.5059 30.1613 89.0611 30.2661 89.6203 30.258C90.321 30.2619 91.0116 30.0917 91.6302 29.7627C92.2489 29.4337 92.7761 28.9562 93.1645 28.3731L91.7146 27.4065C91.4974 27.7672 91.1902 28.0653 90.823 28.2715C90.4559 28.4776 90.0414 28.5848 89.6203 28.5825C89.187 28.5991 88.7588 28.4851 88.391 28.2553C88.0233 28.0254 87.7331 27.6904 87.5581 27.2937L93.2452 24.9416L93.0518 24.4582ZM87.2521 25.876C87.2321 25.5664 87.274 25.256 87.3754 24.9628C87.4768 24.6697 87.6357 24.3997 87.8427 24.1687C88.0497 23.9376 88.3007 23.7502 88.581 23.6174C88.8614 23.4845 89.1654 23.4089 89.4753 23.395C89.7979 23.3738 90.1197 23.448 90.4005 23.6084C90.6813 23.7689 90.9086 24.0084 91.0541 24.2972L87.2521 25.876ZM82.6283 30.0002H84.4971V17.4986H82.6283V30.0002ZM79.5673 22.7022H79.5029C79.2188 22.3935 78.8721 22.149 78.4859 21.9851C78.0997 21.8212 77.683 21.7416 77.2635 21.7517C76.1669 21.7984 75.1306 22.2669 74.3711 23.0594C73.6116 23.8519 73.1876 24.9072 73.1876 26.0049C73.1876 27.1025 73.6116 28.1578 74.3711 28.9503C75.1306 29.7428 76.1669 30.2113 77.2635 30.258C77.6846 30.2692 78.1031 30.1885 78.4898 30.0216C78.8766 29.8547 79.2223 29.6055 79.5029 29.2914H79.5673V29.9036C79.5673 31.5308 78.6974 32.4007 77.2957 32.4007C76.8286 32.3895 76.3754 32.2395 75.9938 31.9698C75.6122 31.7001 75.3196 31.3229 75.1531 30.8863L73.5259 31.563C73.8326 32.3097 74.3553 32.9478 75.0269 33.3955C75.6985 33.8433 76.4886 34.0803 77.2957 34.0762C79.4868 34.0762 81.3395 32.7874 81.3395 29.6458V22.0094H79.5673V22.7022ZM77.4247 28.5825C76.7788 28.5277 76.177 28.2324 75.7384 27.7551C75.2998 27.2777 75.0564 26.6531 75.0564 26.0049C75.0564 25.3566 75.2998 24.732 75.7384 24.2546C76.177 23.7773 76.7788 23.482 77.4247 23.4272C77.7461 23.4429 78.061 23.5231 78.3507 23.6631C78.6404 23.8031 78.8989 24 79.1109 24.242C79.3229 24.4841 79.4839 24.7663 79.5845 25.0719C79.6851 25.3776 79.7231 25.7003 79.6962 26.0209C79.7214 26.3395 79.682 26.66 79.5804 26.963C79.4788 27.2661 79.3172 27.5455 79.1051 27.7847C78.8931 28.0238 78.635 28.2177 78.3462 28.3548C78.0575 28.4919 77.7441 28.5693 77.4247 28.5825ZM101.806 17.4988H97.3345V30.0002H99.2002V25.2638H101.806C102.334 25.2927 102.862 25.2138 103.358 25.0317C103.854 24.8497 104.308 24.5684 104.692 24.205C105.076 23.8417 105.381 23.4038 105.59 22.9184C105.799 22.4329 105.907 21.9099 105.907 21.3813C105.907 20.8528 105.799 20.3298 105.59 19.8443C105.381 19.3588 105.076 18.921 104.692 18.5576C104.308 18.1942 103.854 17.9129 103.358 17.7309C102.862 17.5488 102.334 17.4699 101.806 17.4988ZM101.854 23.524H99.2002V19.2387H101.854C102.139 19.2328 102.422 19.2839 102.688 19.3889C102.953 19.4939 103.194 19.6508 103.398 19.8503C103.602 20.0499 103.764 20.2881 103.874 20.551C103.985 20.8139 104.041 21.0962 104.041 21.3814C104.041 21.6665 103.985 21.9488 103.874 22.2117C103.764 22.4746 103.602 22.7128 103.398 22.9124C103.194 23.1119 102.953 23.2688 102.688 23.3738C102.422 23.4789 102.139 23.5299 101.854 23.524ZM113.386 21.7287C112.705 21.6889 112.027 21.8489 111.435 22.1889C110.844 22.5288 110.365 23.0341 110.056 23.6426L111.713 24.3342C111.877 24.0322 112.126 23.7846 112.429 23.6218C112.732 23.4589 113.075 23.3879 113.418 23.4174C113.891 23.3712 114.363 23.5145 114.731 23.816C115.099 24.1175 115.332 24.5525 115.38 25.0257V25.1544C114.781 24.8361 114.112 24.6704 113.434 24.6719C111.649 24.6719 109.831 25.653 109.831 27.4865C109.849 27.8729 109.943 28.2519 110.11 28.601C110.277 28.9501 110.512 29.2621 110.801 29.5186C111.091 29.7751 111.429 29.9709 111.795 30.0942C112.162 30.2176 112.55 30.266 112.935 30.2367C113.405 30.2644 113.874 30.1656 114.292 29.9506C114.711 29.7356 115.064 29.4123 115.316 29.0144H115.38V29.9794H117.181V25.1866C117.181 22.9671 115.525 21.7287 113.386 21.7287ZM113.16 28.5801C112.549 28.5801 111.697 28.2746 111.697 27.5186C111.697 26.5537 112.758 26.1837 113.675 26.1837C114.271 26.1678 114.859 26.3123 115.38 26.6019C115.311 27.1441 115.049 27.6432 114.641 28.0069C114.233 28.3705 113.707 28.5742 113.16 28.5801ZM123.743 22.0021L121.604 27.4221H121.54L119.32 22.0021H117.31L120.639 29.5773L118.741 33.7911H120.687L125.818 22.0021H123.743ZM106.936 30.0002H108.802V17.4988H106.936V30.0002Z" fill="white"/>
    <path d="M10.4353 7.5381C10.1074 7.93017 9.94182 8.4328 9.97251 8.943V31.0591C9.94173 31.5693 10.1073 32.072 10.4353 32.464L10.5093 32.5361L22.8983 20.1472V19.8549L10.5093 7.4655L10.4353 7.5381Z" fill="url(#paint0_linear_11_244)"/>
    <path d="M27.0277 24.2786L22.8983 20.1472V19.8549L27.0287 15.7245L27.1218 15.7776L32.0146 18.5577C33.4122 19.3517 33.4122 20.6509 32.0146 21.4454L27.1218 24.2255L27.0277 24.2786Z" fill="url(#paint1_linear_11_244)"/>
    <path d="M27.1218 24.225L22.8983 20.0011L10.4353 32.464C10.7201 32.7152 11.0837 32.8588 11.4633 32.87C11.8428 32.8812 12.2143 32.7593 12.5134 32.5254L27.1218 24.225Z" fill="url(#paint2_linear_11_244)"/>
    <path d="M27.1218 15.7771L12.5134 7.4767C12.2143 7.2428 11.8428 7.12089 11.4633 7.1321C11.0837 7.14332 10.7201 7.28695 10.4353 7.5381L22.8983 20.0011L27.1218 15.7771Z" fill="url(#paint3_linear_11_244)"/>
    <path opacity="0.2" d="M27.0287 24.132L12.5134 32.3793C12.2258 32.5982 11.8748 32.7177 11.5134 32.7196C11.152 32.7215 10.7997 32.6058 10.5098 32.39L10.4353 32.4645L10.5093 32.5366L10.5098 32.5361C10.7997 32.7521 11.1519 32.8678 11.5134 32.8659C11.8749 32.864 12.2259 32.7444 12.5134 32.5254L27.1218 24.225L27.0287 24.132Z" fill="black"/>
    <path opacity="0.12" d="M10.4353 32.3184C10.1074 31.9263 9.94183 31.4237 9.97248 30.9135V31.0596C9.94181 31.5698 10.1074 32.0724 10.4353 32.4645L10.5098 32.39L10.4353 32.3184Z" fill="black"/>
    <path opacity="0.12" d="M32.0146 21.2988L27.0287 24.132L27.1218 24.225L32.0146 21.4449C32.3024 21.32 32.5515 21.1202 32.7358 20.8663C32.9202 20.6125 33.0331 20.3138 33.0629 20.0015C33.001 20.2843 32.8741 20.5489 32.6921 20.7741C32.5101 20.9993 32.2781 21.1789 32.0146 21.2988Z" fill="black"/>
    <path opacity="0.25" d="M12.5134 7.6233L32.0146 18.7033C32.2783 18.8231 32.5103 19.0029 32.6923 19.2282C32.8743 19.4535 33.0012 19.7181 33.0629 20.0011C33.0334 19.6886 32.9205 19.3898 32.7362 19.1359C32.5518 18.8819 32.3026 18.682 32.0146 18.5572L12.5134 7.4772C11.1158 6.6831 9.97253 7.3427 9.97253 8.9435V9.0896C9.97253 7.4889 11.1158 6.8293 12.5134 7.6233Z" fill="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_11_244" x1="21.7996" y1="8.70981" x2="5.01724" y2="25.4922" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00A0FF"/>
      <stop offset="0.00657" stop-color="#00A1FF"/>
      <stop offset="0.2601" stop-color="#00BEFF"/>
      <stop offset="0.5122" stop-color="#00D2FF"/>
      <stop offset="0.7604" stop-color="#00DFFF"/>
      <stop offset="1" stop-color="#00E3FF"/>
    </linearGradient>
    <linearGradient id="paint1_linear_11_244" x1="33.8343" y1="20.0016" x2="9.6374" y2="20.0016" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFE000"/>
      <stop offset="0.4087" stop-color="#FFBD00"/>
      <stop offset="0.7754" stop-color="#FFA500"/>
      <stop offset="1" stop-color="#FF9C00"/>
    </linearGradient>
    <linearGradient id="paint2_linear_11_244" x1="24.8269" y1="22.2962" x2="2.06857" y2="45.0545" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF3A44"/>
      <stop offset="1" stop-color="#C31162"/>
    </linearGradient>
    <linearGradient id="paint3_linear_11_244" x1="7.29723" y1="0.176283" x2="17.4598" y2="10.3388" gradientUnits="userSpaceOnUse">
      <stop stop-color="#32A071"/>
      <stop offset="0.0685" stop-color="#2DA771"/>
      <stop offset="0.4762" stop-color="#15CF74"/>
      <stop offset="0.8009" stop-color="#06E775"/>
      <stop offset="1" stop-color="#00F076"/>
    </linearGradient>
    <clipPath id="clip0_11_244">
      <rect width="135" height="40.0002" fill="white"/>
    </clipPath>
  </defs>
</svg>
</p>

          </div>
      </div>
    </div>

  );
};

export default Home;