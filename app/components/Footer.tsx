export default function Footer() {
  return (
    <div className="footer-outer">
      <footer>
        <div>© {new Date().getFullYear()} Esso Tankstelle Bad Wildungen</div>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </footer>
    </div>
  );
}
