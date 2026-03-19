import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother | null = null;

const Navbar = () => {
  const isHome =
    window.location.hash === "#/" ||
    window.location.hash === "" ||
    window.location.hash === "#";

  useEffect(() => {
    const wrapper = document.querySelector("#smooth-wrapper");
    const content = document.querySelector("#smooth-content");

    if (!isHome || !wrapper || !content) {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
      return;
    }

    smoother = ScrollSmoother.create({
      wrapper: wrapper as HTMLElement,
      content: content as HTMLElement,
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");

    const handleLinkClick = (e: Event) => {
      if (window.innerWidth > 1024 && smoother) {
        e.preventDefault();
        const elem = e.currentTarget as HTMLAnchorElement;
        const section = elem.getAttribute("data-href");
        if (section) {
          smoother?.scrollTo(section, true, "top top");
        }
      }
    };

    links.forEach((elem) => {
      elem.addEventListener("click", handleLinkClick);
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      links.forEach((elem) => {
        elem.removeEventListener("click", handleLinkClick);
      });
      window.removeEventListener("resize", handleResize);

      if (smoother) {
        smoother.kill();
        smoother = null;
      }
    };
  }, [isHome]);

  return (
    <>
      <div className="header">
        <Link
        to="/"
        className="navbar-title"
        onClick={() => window.scrollTo(0, 0)}
      >
        Khurram Awan
      </Link>
        <a
          href="mailto:hello@khurramcodes.de"
          className="navbar-connect"
          data-cursor="disable"
        >
          hello@khurramcodes.de
        </a>

        <ul>
          <li>
            {isHome ? (
              <a data-href="#about" href="#about">
                <HoverLinks text="Über mich" />
              </a>
            ) : (
              <Link to="/" onClick={() => setTimeout(() => window.scrollTo(0, 500), 100)}>
                <HoverLinks text="Über mich" />
              </Link>
            )}
          </li>

          <li>
            {isHome ? (
              <a data-href="#work" href="#work">
                <HoverLinks text="Projekte" />
              </a>
            ) : (
              <Link to="/" onClick={() => setTimeout(() => window.scrollTo(0, 900), 100)}>
                <HoverLinks text="Projekte" />
              </Link>
            )}
          </li>

          <li>
            {isHome ? (
              <a data-href="#contact" href="#contact">
                <HoverLinks text="Kontakt" />
              </a>
            ) : (
              <Link to="/" onClick={() => setTimeout(() => window.scrollTo(0, 1400), 100)}>
                <HoverLinks text="Kontakt" />
              </Link>
            )}
          </li>
        </ul>
      </div>

      {isHome && (
        <>
          <div className="landing-circle1"></div>
          <div className="landing-circle2"></div>
          <div className="nav-fade"></div>
        </>
      )}
    </>
  );
};

export default Navbar;