import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' bg-[#E5E6E6] drop-shadow-md '>
            <footer className="footer p-10  text-neutral-content container mx-auto">
                <aside>
                    <h2 className='text-black text-5xl font-bold font-platypi'>Ideal <span className='text-red-700'>Library</span></h2>
                    <p className='text-xl font-medium text-neutral'>Ideal Library Ltd.<br /> <span className='text-base'>Providing reliable tech since 2024</span></p>
                    <p className="text-neutral">Copyright © 2024 - All right reserved by <span className="font-platypi font-base font-medium">Mehedi-9T9</span></p>
                </aside>
                <nav>
                    <h6 className="text-2xl font-bold font-platypi text-[#333]">Social Address</h6>
                    <div className="flex items-center mt-3 gap-4">
                        <a><FaFacebookF className="text-2xl text-blue-700 font-bold" /></a>
                        <a><FaYoutube className="text-2xl text-red-700 font-bold" /></a>
                        <a><FaTwitter className="text-2xl text-blue-700 font-bold" /></a>
                    </div>
                </nav>
                <form>
                    <h6 className="footer-title text-red-700 font-bold text-2xl font-platypi">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="btn bg-red-700 join-item text-white">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>





        </div>
    );
};

export default Footer;