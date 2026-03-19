import { useEffect } from "react";
import Navbar from "../components/Navbar";
import "./styles/Datenschutz.css";

export default function Datenschutz() {
  useEffect(() => {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <main className="datenschutz-main">
        <div className="datenschutz-container">
          <div className="datenschutz-card">
            <div className="datenschutz-header">
              <p className="datenschutz-label">Rechtliches</p>
              <h1 className="datenschutz-title">Datenschutzerklärung</h1>
              <p className="datenschutz-subtitle">
                Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.
              </p>
            </div>

            <div className="datenschutz-section">
              <h2>1. Verantwortliche Stelle</h2>
              <div className="datenschutz-text">
                <p>Khurram Irshad Awan</p>
                <p>Bernsdorfer Straße 88</p>
                <p>09126 Chemnitz</p>
                <p>Deutschland</p>
                <p>
                  E-Mail:{" "}
                  <a href="mailto:hello@khurramcodes.de">
                    hello@khurramcodes.de
                  </a>
                </p>
              </div>
            </div>

            <div className="datenschutz-section">
              <h2>2. Allgemeine Hinweise</h2>
              <div className="datenschutz-text">
                <p>
                  Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen.
                  Ich behandle Ihre personenbezogenen Daten vertraulich und
                  entsprechend den gesetzlichen Datenschutzvorschriften sowie
                  dieser Datenschutzerklärung.
                </p>
              </div>
            </div>

            <div className="datenschutz-section">
              <h2>3. Erfassung von Daten beim Besuch dieser Website</h2>
              <div className="datenschutz-text">
                <p>
                  Beim Aufruf dieser Website werden durch den Hosting-Anbieter
                  automatisch Informationen in sogenannten Server-Log-Dateien
                  erfasst. Dies sind insbesondere:
                </p>
                <p>• Browsertyp und Browserversion</p>
                <p>• verwendetes Betriebssystem</p>
                <p>• Referrer-URL</p>
                <p>• Hostname des zugreifenden Rechners</p>
                <p>• Uhrzeit der Serveranfrage</p>
                <p>• IP-Adresse</p>
                <p>
                  Diese Daten dienen der technisch fehlerfreien Darstellung und
                  Sicherheit der Website. Eine Zusammenführung dieser Daten mit
                  anderen Datenquellen erfolgt nicht.
                </p>
              </div>
            </div>

            <div className="datenschutz-section">
              <h2>4. Cookies</h2>
              <div className="datenschutz-text">
                <p>
                  Diese Website verwendet Cookies. Einige Cookies sind technisch
                  notwendig, damit die Website korrekt funktioniert. Andere Cookies
                  werden nur mit Ihrer Einwilligung gesetzt, sofern entsprechende
                  Dienste genutzt werden.
                </p>
                <p>
                  Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
                  ändern oder widerrufen.
                </p>
              </div>
            </div>

            <div className="datenschutz-section">
              <h2>5. Kontaktaufnahme</h2>
              <div className="datenschutz-text">
                <p>
                  Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben
                  einschließlich der von Ihnen dort angegebenen Kontaktdaten zum
                  Zweck der Bearbeitung Ihrer Anfrage und für den Fall von
                  Anschlussfragen gespeichert. Diese Daten gebe ich nicht ohne Ihre
                  Einwilligung weiter.
                </p>
              </div>
            </div>

            <div className="datenschutz-section">
              <h2>6. Rechtsgrundlagen der Verarbeitung</h2>
              <div className="datenschutz-text">
                <p>• Art. 6 Abs. 1 lit. a DSGVO, Einwilligung</p>
                <p>
                  • Art. 6 Abs. 1 lit. b DSGVO, Verarbeitung zur Erfüllung eines
                  Vertrags oder vorvertraglicher Maßnahmen
                </p>
                <p>
                  • Art. 6 Abs. 1 lit. f DSGVO, berechtigtes Interesse an sicherem
                  und effizientem Betrieb der Website
                </p>
              </div>
            </div>

            <div className="datenschutz-section">
              <h2>7. Speicherdauer</h2>
              <div className="datenschutz-text">
                <p>
                  Personenbezogene Daten werden nur so lange gespeichert, wie dies
                  für die jeweiligen Verarbeitungszwecke erforderlich ist oder
                  gesetzliche Aufbewahrungsfristen bestehen.
                </p>
              </div>
            </div>

            <div className="datenschutz-section">
              <h2>8. Ihre Rechte</h2>
              <div className="datenschutz-text">
                <p>
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                  jederzeit das Recht auf:
                </p>
                <p>• Auskunft über Ihre gespeicherten Daten</p>
                <p>• Berichtigung unrichtiger Daten</p>
                <p>• Löschung Ihrer Daten</p>
                <p>• Einschränkung der Verarbeitung</p>
                <p>• Datenübertragbarkeit</p>
                <p>• Widerspruch gegen die Verarbeitung</p>
                <p>• Widerruf einer erteilten Einwilligung</p>
              </div>
            </div>

            <div className="datenschutz-section">
              <h2>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
              <div className="datenschutz-text">
                <p>
                  Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
                  über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
                </p>
              </div>
            </div>

            <div className="datenschutz-section">
              <h2>10. SSL- bzw. TLS-Verschlüsselung</h2>
              <div className="datenschutz-text">
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                  Übertragung vertraulicher Inhalte eine SSL- bzw.
                  TLS-Verschlüsselung.
                </p>
              </div>
            </div>

            <div className="datenschutz-section">
              <h2>11. Änderung dieser Datenschutzerklärung</h2>
              <div className="datenschutz-text">
                <p>
                  Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit
                  sie stets den aktuellen rechtlichen Anforderungen entspricht oder
                  um Änderungen meiner Leistungen in der Datenschutzerklärung
                  umzusetzen.
                </p>
              </div>
            </div>
          </div>

          <div className="datenschutz-footer">
            <a href="/#/impressum">Impressum</a>
            <a href="/#/datenschutz">Datenschutz</a>
          </div>
        </div>
      </main>
    </>
  );
}