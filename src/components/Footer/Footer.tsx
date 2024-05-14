import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="footerInfo col-lg-4">
            <h4>HeaLer </h4>
            <h5>Car Dealing Experience.</h5>
            <div className='detail'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati officiis quibusdam unde.</div>
            <div className="social-media">
            <a href="#" className='text-dark'><i className='bx bxl-twitter'></i></a>
            <a href="#" className='text-light'><i className='bx bxl-facebook'></i></a>
            <a href="#" className='text-light'><i className='bx bxl-instagram-alt' ></i></a>
        </div>
        </div>
        <div className="moreInfo col-lg-2">
            <h5 >Account</h5>
            <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Billing.</li>
                <li>Notifications.</li>
            </ul>

        </div>
        <div className="moreInfo col-lg-2">
            <h5>About</h5>
            <ul>
                <li>Services</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Career</li>
            </ul>

        </div>
        <div className="moreInfo col-lg-2">
            <h5>Company</h5>
            <ul>
                <li>Community</li>
                <li>Help Center</li>
                <li>Support</li>
            </ul>

        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="separation4"></div>
        </div>
      </div>
      <div className="row">
        <div className="endInfo col-lg-6">
            <div>&copy;2024 All Rights Reserved by HeaLer.</div>
        </div>
        <div className="endInfo2 col-lg-6">
            <div>Terms<span>-</span>Privacy Policy<span>-</span>Cokies</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
