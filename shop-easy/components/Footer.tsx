export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      
      {/* Logo */}
      <div className="footer-brand">
        <img src="/logo.png" alt="SERENIA Logo" className="footer-logo" />
        <span>◆ SERENIA</span>
      </div>

      {/* Links */}
      <ul className="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
      </ul>

      {/* Copy */}
      <p className="footer-copy">
        © {year} SERENIA. All rights reserved.
      </p>
    </footer>
  );
}