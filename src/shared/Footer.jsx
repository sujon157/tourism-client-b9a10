
import { FiPhone } from 'react-icons/fi';
import './Footer.css'
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineMailOutline } from 'react-icons/md';
import { ImFacebook2 } from 'react-icons/im';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>

            <footer className="footer-distributed ">

                <div className="footer-left">

                    <h3>Company<span>logo</span></h3>

                    <p className="footer-links">
                        <Link to='/'> <a href="#" className="link-1">Home</a></Link>

                        <a href="#">Blog</a>

                        <a href="#">Pricing</a>

                        <a href="#">About</a>

                        <a href="#">Faq</a>

                        <a href="#">Contact</a>
                    </p>

                    <p className="footer-company-name ">Travel Tour © 2015</p>
                </div>

                <div className="footer-center space-y-6">

                    <div className='flex space-x-16'>
                        <p className='text-3xl font-bold'> <CiLocationOn /></p>

                        <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                    </div>

                    <div className='flex space-x-16'>
                        <p className='text-3xl font-bold'><FiPhone /></p>
                        <p>+1.555.555.5555</p>
                    </div>

                    <div className='flex space-x-16'>
                        <p className='text-3xl font-bold'><MdOutlineMailOutline /></p>
                        <p><a href="mailto:support@company.com">support@traveltour.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the company</span>
                        Our company includes some features and services that provide a great experience with custumers .                    </p>

                    <div className="flex gap-6 mt-4">

                        <a className='text-white text-3xl'
                            href="#"><ImFacebook2 />
                        </a>
                        <a className='text-white text-3xl' href="#"><FaSquareTwitter /></a>
                        <a className='text-white text-3xl' href="#"><FaLinkedin /></a>
                        <a className='text-white text-3xl' href="#"><FaGithub /></a>

                    </div>

                </div>
              

            </footer>
            <footer className=" bg-[#666] footer footer-center  text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by World Tour Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;