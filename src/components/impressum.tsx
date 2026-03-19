import { useEffect } from "react";
import Navbar from "../components/Navbar";
import "./styles/Impressum.css";

export default function Impressum() {
  useEffect(() => {
  document.documentElement.style.overflow = "auto";
  document.body.style.overflow = "auto";
  document.body.style.height = "auto";
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Navbar />

      <main className="impressum-main legal-scroll-page">
        <div className="impressum-container">
          <div className="impressum-card">

            <div className="impressum-header">
              <p className="impressum-label">Rechtliches</p>
              <h1 className="impressum-title">Impressum</h1>
              <p className="impressum-subtitle">
                Angaben gemäß § 5 TMG.
              </p>
            </div>

            <div className="impressum-section">
              <h2>Angaben gemäß § 5 TMG</h2>
              <div className="impressum-text">
                <p>Khurram Irshad Awan</p>
                <p>Bernsdorfer Straße 88</p>
                <p>09126 Chemnitz</p>
                <p>Deutschland</p>
              </div>
            </div>

            <div className="impressum-section">
              <h2>Kontakt</h2>
              <div className="impressum-text">
                <p>
                  E-Mail: <a href="mailto:hello@khurramcodes.de">hello@khurramcodes.de</a>
                </p>
                <p>Telefon: 015906463589</p>
              </div>
            </div>

            <div className="impressum-section">
              <h2>Unternehmensform</h2>
              <div className="impressum-text">
                <p>Einzelunternehmer</p>
                <p>Kleinunternehmer gemäß § 19 UStG</p>
                <p>Umsatzsteuer wird gemäß § 19 UStG nicht ausgewiesen.</p>
              </div>
            </div>

            <div className="impressum-section">
              <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <div className="impressum-text">
                <p>Khurram Irshad Awan</p>
                <p>Bernsdorfer Straße 88</p>
                <p>09126 Chemnitz</p>
                <p>Deutschland</p>
              </div>
            </div>

          </div>

          <div className="impressum-footer">
            <a href="/#/impressum">Impressum</a>
            <a href="/#/datenschutz">Datenschutz</a>
          </div>

        </div>
      </main>
    </>
  );
}