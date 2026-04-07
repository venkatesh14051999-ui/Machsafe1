// Shared navigation HTML
function getNav(active) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'product.html', label: 'Product' },
    { href: 'how-it-works.html', label: 'How It Works' },
    { href: 'pricing.html', label: 'Pricing' },
    { href: 'about.html', label: 'About' },
    { href: 'blog.html', label: 'Blog' },
    { href: 'contact.html', label: 'Contact' },
  ];
  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.label === active ? 'active' : ''}">${p.label}</a>`
  ).join('');
  return `
  <nav class="site-nav">
    <div class="wrap">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          <svg width="30" height="31" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="2" width="22" height="22" rx="5" fill="#0D1B3E"/><rect x="26" y="0" width="22" height="22" rx="5" fill="#2563EB"/><rect x="0" y="28" width="22" height="22" rx="5" fill="#1E40AF"/><rect x="26" y="30" width="22" height="22" rx="5" fill="#0D1B3E"/><rect x="20" y="20" width="8" height="8" rx="2" fill="#60A5FA"/></svg>
          MachSafe
        </a>
        <button class="nav-toggle" aria-label="Toggle menu" onclick="this.closest('nav').classList.toggle('open')">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-links">
          ${links}
          <a href="contact.html" class="nav-btn">Get Early Access</a>
        </div>
      </div>
    </div>
  </nav>`;
}

// Shared footer HTML
function getFooter() {
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo" style="display:inline-flex;">
            <svg width="30" height="31" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="2" width="22" height="22" rx="5" fill="#0D1B3E"/><rect x="26" y="0" width="22" height="22" rx="5" fill="#2563EB"/><rect x="0" y="28" width="22" height="22" rx="5" fill="#1E40AF"/><rect x="26" y="30" width="22" height="22" rx="5" fill="#0D1B3E"/><rect x="20" y="20" width="8" height="8" rx="2" fill="#60A5FA"/></svg>
            MachSafe
          </a>
          <p>AI-assisted building safety compliance for the Building Safety Act 2022. Protecting residents across England.</p>
        </div>
        <div class="footer-col">
          <h5>Product</h5>
          <ul>
            <li><a href="product.html">Platform Overview</a></li>
            <li><a href="how-it-works.html">How It Works</a></li>
            <li><a href="pricing.html">Pricing</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="contact.html">Book a Demo</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Legal</h5>
          <ul>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Mach Global Ltd · Registered in England & Wales · Company No. 16603107 · ICO Registration No. ZC116041</span>
        <div class="footer-legal">
          <a href="privacy.html">Privacy</a>
          <a href="terms.html">Terms</a>
        </div>
      </div>
    </div>
  </footer>`;
}

// Scroll animations
function initAnimations() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade').forEach(el => io.observe(el));
}

document.addEventListener('DOMContentLoaded', initAnimations);
