import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className="mb-20 flex justify-between items-center py-6">
            <div className="flex flex-shrink-0 items-center ">
                {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
                <h1 className="mx-2 w-10 text-4xl">JSB</h1>
            </div>
            <div className="flex justify-center items-center gap-4 m-6 text-2xl">
                <a href="//linkedin.com/in/jeevan-sb-1695641a2"> <FaLinkedin /></a>
                <a href="//github.com/Jeevansb5"> <FaGithub /></a>
                <a href="//www.instagram.com/jeevan_af_?igsh=b2todTh1YTc5Z2M4"><FaInstagram /></a>
            </div>
        </nav>
    )
}

export default Navbar
