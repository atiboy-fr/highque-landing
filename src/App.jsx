
import './App.css'

function App() {

  return (
    <>
    <div className='nav-bar'>
      <img src={"/images/Asset 3 1.svg"} alt="highque Logo" />
      
      <div className='all-nav-links'>
        <ul className='nav-links'>
          <li>About Us</li>
          <li>How it Works</li>
          <li>Contact Us</li>
        </ul>
        <ul className='register-links'>
        <li>Login</li>
        <li className='green-btn'>Create Account</li>
        </ul>
        
      </div>
        <img src={'/images/bars-solid.svg'} alt="" className='hamburger' />

      </div>

      <div className='first-section'>
        <div className='first-sec-title'>
          <h2>The cheap, <br/> Fast way to <br/> Send money abroad</h2>
          <p className='first-paragraph'>You can now send money home and abroad at an exchange rate <br/>better and cheaper than the conventional banks</p>

          <div className='download-btn'>
            <button><img src={'/images/white_Apple_Logo_768cf7ce21.svg.svg'} alt="app store" /><p>Get on iPhone</p></button>
            <button><img src={'/images/Vector.svg'} alt="play store" /><p>Get on Android</p></button>
          </div>
        </div>

        <div className='first-section2'>
          <div className='notification-sent'>
            <p className='success'>Sucessfully Sent</p>
            <p className='amount'>₤ 1,000.00</p>
            <p className='username'>Daniel O</p>
          </div>
          <img src={'/images/Union.png'} alt="union" className='union'/>
          <img src={'/images/handsome-man-spending-time-outdoors-using-modern-smartphone 1.png'} alt="handsome man" className='first-section-img' />
        </div>
      </div>

      <div className='coins'>
        <img src={'/images/gold-coin-naira.png'} alt="gold-coin-naira" className='coin-image' />
        <img src={'/images/gold-coin-pound.png'} alt="gold-coin-pound" className='coin-image2' />
      </div>

      <div className='second-section'>
        <h2>Why Choose Highque ?</h2>

        <div  className='testimonials'>
          <div className='testimonial-child'>
            <div className='countries-flags'>
            <img src={'/images/image 16.png'} alt="uk flag" />
            <img src={'/images/image 10.png'} alt="nigerian flag" className='nigerian-flag'/>
            </div>
            <h3>Seamless UK-Nigeria Transactions</h3>
            <p>Highque simplifies cross-border payments between the UK and Nigeria, ensuring swift and secure transactions.</p>
          </div>

          <div className='testimonial-child'>
            <img src={'/images/currency-exchange.png'} alt="currency exchange" />
            <h3>Competitive Exchange Rates</h3>
            <p>Enjoy competitive exchange rates that maximize the value of your money.</p>
          </div>

          <div className='testimonial-child'>
            <img src={'/images/handshake-icon.png'} alt="handshake" />
            <h3>Trusted and Reliable</h3>
            <p>With Highque, trust comes standard. Our secure platform ensures peace of mind with every transaction.</p>
          </div>

          <div className='testimonial-child'>
            <img src={'/images/Customers care 1.png'} alt="customer care" />
            <h3>24/7 Customer Support</h3>
            <p>Our dedicated support team is available round-the-clock to assist you with any queries or concerns.</p>
          </div>
        </div>
        <button className='green-btn'>Get Started</button>
      </div>

    <div className='third-section'>
      <img src={'/images/iPhone 13 Pro Mockup Right View.png'} alt="" />

      <div className='get-started-section'>
        <h2>Get Started in 4 easy steps</h2>

        <div className='steps'>
          <h3 className='numbers'>01</h3>
          <div className='text-container'>
            <div>
              <h3>Sign Up</h3>
              <p>Create your Highque account in minutes.</p>
            </div>
            <button>&rarr;</button>
          </div>
        </div>

        <div className='steps'>
          <h3 className='numbers'>02</h3>
          <div className='text-container'>
            <div>
              <h3>Click on Send Money</h3>
              <p>Choose the amount and currency for your UK-Nigeria<br/> trandsfer.</p>
            </div>
            <button>&rarr;</button>
          </div>
        </div>

        <div className='steps'>
          <h3 className='numbers'>03</h3>
          <div className='text-container'>
            <div>
              <h3>Review and Confirm</h3>
              <p>Verify your transaction details and confirm to proceed.</p>
            </div>
            <button>&rarr;</button>
          </div>
        </div>

        <div className='steps'>
          <h3 className='numbers'>04</h3>
          <div className='text-container'>
            <div>
              <h3>Track Your Transfer</h3>
              <p>Monitor the progress of your transfer with real-time updates</p>
            </div>
            <button>&rarr;</button>
          </div>
        </div>
      
      </div>
    
    </div>

    <div className='fourth-section'>
      <div>
        <h2>Our Commitment to Security</h2>
        <p>At Highque, security is our top priority. We employ cutting-edge<br/> encryption technology to safeguard your personal and financial<br/> information.</p>
        <button className='green-btn'>Send Money</button>
      </div>

      <img src={'/images/image 20.png'} alt="" /> 
    </div>

    <div className='fifth-section'>
      <div className='footer1'>
        <h3>The cheap,<br/>
          Fast way to<br/>
          Send money abroad</h3>
        <p>You can now send money home and abroad at an 
        exchange rate better and cheaper than the conventional banks.</p>
        <button className='green-btn'>Get Started</button>
      </div>

      <div className='footer2'>
        <div className='footer2-child'>
          <div>
            <h4>Company</h4>
            <p>Download</p>
            <p>About Us</p>
            <p>Blog</p>
          </div>
          <div>
            <h4>Support</h4>
            <p>FAQ</p>
            <p>Terms of Use</p>
            <p>Cpmplaints Policy</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>info@forex.com</p>
            <p>+44 (75) 74933286</p>
            <p>C/O Aacsl Accountants Ltd, 1st Floor<br/> North Westgate House, Harlow, Essex,<br/> England, CM20 1YS</p>
          </div>
          <img src={'/images/Asset 3 1.svg'} alt="highque" />
          </div>

          <div className='copyrights'>
            <div className='social-media'>
              <img src={'/images/logo-twitter.svg'} alt="twitter" />
              <img src={'/images/logo-facebook.svg'} alt="facebook" />
              <img src={'/images/logo-linkedin.svg'} alt="linkedin" />
              <img src={'/images/logo-instagram.svg'} alt="instagram" />
            </div>

            <p>© Highque -2024. All Rights Reserved</p>

          </div>
      </div>

      <p className='final-paragraph'>
      Highque Limited is a company registered in England and Wales under company number 13872977 and is registered with the UK Financial Conduct Authority as a PSD Agent. Registered<br/> Office : C/O Aacsl Accountants Ltd, 1st Floor North Westgate House, Harlow, Essex, England, CM20 1YS. Highque Limited is authorised and regulated by the Financial Conduct Authority,<br/> as an Electronic Money Institution, registration number: 975377
      </p>
    
    </div>




    </>
  )
}


export default App
