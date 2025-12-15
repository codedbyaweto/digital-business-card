import { FaTwitter, FaGithub, FaLinkedin , FaFacebook, FaInstagram} from "react-icons/fa"; 
function Footer() {
    return (
        <footer className="digital-footer">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="social-icons" size={40} color="#918E9B" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub className="social-icons" size={40} color="#918E9B" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="social-icons" size={40} color="#918E9B" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="social-icons" size={40} color="#918E9B" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="social-icons" size={40} color="#918E9B" />
            </a>
        </footer>
    )
}

export default Footer