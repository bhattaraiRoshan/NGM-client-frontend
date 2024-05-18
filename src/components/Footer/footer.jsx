import { Link } from "react-router-dom"

export const Footer = () =>{
    return(
        <>
        <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>NexGen</span>Market</h3>
                            <p className="footer-p">Welcome to NexGenMarket, where shopping transcends boundaries. We redefine the retail experience, offering cutting-edge products and innovative services that pave the way for your future. Embrace convenience, explore diversity, and embark on a journey where every purchase signifies progress towards a brighter tomorrow.</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul className="footer-ul">
                                <li className="nav-item footer-ul">
                                    {/* <a className="" href="/">Services</a> */}
                                    <Link className="footer-ul" to="/services">Services</Link>
                                </li>
                                <li className="nav-item footer-ul">
                                    {/* <a className="" href="/">Portfolio</a> */}
                                    <Link className="footer-ul" to="/careers">Careers</Link>
                                </li>
                                <li className="nav-item footer-ul">
                                    {/* <a className="" href="/">Contact Us</a> */}
                                    <Link className="footer-ul" to="/contactus">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="" href="/">Services</a> */}
                                    <Link className="footer-ul" to="/aboutus">About Us</Link>
                                </li>

                                <li className="nav-item">
                                    {/* <a className="" href="/">Services</a> */}
                                    <Link className="footer-ul" to="/privacy-policy">Privacy Policy</Link>
                                </li>
                               
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Contact</h5>
                            <p className="footer-ul"><i class="fa-solid fa-phone-volume"></i> +61 405624418</p>
                            <p className="footer-ul"><i class="fa-solid fa-envelope"></i>roshan.bhattarai@proroshan.com</p>
                            <p className="footer-ul"><i class="fa-solid fa-paper-plane"></i>Sydney, Australia</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Design By Roshan Bhattarai</p>
            </div>
        </>
    )
}