import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { Link } from "react-router-dom";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Kontakt</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>E-Mail</h4>
            <p>
              <a href="mailto:hello@khurramcodes.de" data-cursor="disable">
                hello@khurramcodes.de
              </a>
            </p>
            <h4>Ausbildung</h4>
            <p>
              Bachelor of Science (B.Sc.) in Informatik<br />
              Schwerpunkt: Softwareentwicklung und Webtechnologien
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/khurri-collab/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/khurram-awan/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="#"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/kia.coder/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Design und Entwicklung <br /> by <span>Khurram Awan</span>
            </h2>

            <div className="flex justify-center items-center gap-8 text-xs tracking-wide text-white/40">
              <Link to="/impressum" className="hover:text-white transition duration-300">
                Impressum
              </Link>

              <span className="opacity-30"> | </span>

              <Link to="/datenschutz" className="hover:text-white transition duration-300">
               Datenschutz
              </Link>
            </div>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
