import "./footer.css"
import {FiInstagram} from "react-icons/fi"
import {FiLinkedin} from "react-icons/fi"
import {FiTwitter} from "react-icons/fi"
import {FaFacebookF} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa"
import {FaPhoneAlt} from "react-icons/fa"
import {MdLocationOn} from "react-icons/md"
function Footer (){
    return(
        <section className="info_section layout_padding2">
            <div className="container">
                <div className="row">
                <div className="col-md-6 col-lg-3 info-col">
                    <div className="info_detail">
                    <h4>About Us</h4>
                    <p>
                        Vitae aut explicabo fugit facere alias distinctio, exem commodi
                        mollitia minusem dignissimos atque asperiores incidunt vel voluptate
                        iste
                    </p>
                    <div className="info_social">
                        <a href="">
                        <FaFacebookF />
                        </a>
                        <a href="">
                        <FiTwitter />
                        </a>
                        <a href="">
                        <FiLinkedin />
                        </a>
                        <a href="">
                        <FiInstagram/>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 info-col">
                    <div className="info_contact">
                    <h4>Address</h4>
                    <div className="contact_link_box">
                        <a href="">
                        <MdLocationOn />
                        <span> Location</span>
                        </a>
                        <a href="">
                        <FaPhoneAlt />
                        <span> Call +01 1234567890</span>
                        </a>
                        <a href="">
                        <FaEnvelope />
                        <span>   demo@gmail.com</span>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 info-col">
                    <div className="info_contact">
                    <h4>Newsletter</h4>
                    <form action="#">
                        <input type="text" placeholder="Enter email" />
                        <button type="submit">Subscribe</button>
                    </form>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 info-col">
                    <div className="map_container">
                    <div className="map">
                        {/* <div id="googleMap" /> */}
                        <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15679.886868068254!2d106.66450094999999!3d10.7366632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1646055514111!5m2!1svi!2s"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
export default Footer