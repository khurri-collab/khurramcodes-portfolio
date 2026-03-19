import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Wir verwenden Cookies, um unsere Website zu verbessern. Mit „Alle akzeptieren“
        stimmen Sie der Nutzung zu.
      </p>
      <div style={styles.buttons}>
        <button style={btnPrimary} onClick={acceptAll}>Alle akzeptieren</button>
        <button style={btnSecondary} onClick={acceptNecessary}>Nur notwendige</button>
      </div>
    </div>
  );
}
const btnPrimary = {
  background: "#fff",
  color: "#000",
  padding: "8px 16px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
};

const btnSecondary = {
  background: "transparent",
  color: "#fff",
  padding: "8px 16px",
  borderRadius: "6px",
  border: "1px solid #fff",
  cursor: "pointer",
};

const styles = {
  container: {
    position: "fixed" as const,
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#111",
    color: "#fff",
    padding: "20px 24px",
    borderRadius: "12px",
    zIndex: 9999,
    maxWidth: "810px",
    width: "90%",
    textAlign: "center" as const,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
  text: {
    marginBottom: "12px",
    lineHeight: "1.5",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap" as const,
  },
};