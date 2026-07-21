function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <p>
        <a href="/about">About</a> · <a href="/contact">Contact</a>
      </p>
    </footer>
  );
}

export default Footer;
