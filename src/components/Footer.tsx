const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="footer-inner">
        <p>© {year} Raj Srivastava</p>
        <p>Business Analytics · Data &amp; Business Intelligence</p>
      </div>
    </footer>
  );
};

export default Footer;
