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
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
            </div>
        </nav>
    )
}

export default Navbar
