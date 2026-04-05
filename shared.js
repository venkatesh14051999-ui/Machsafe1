// Shared navigation HTML
function getNav(active) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'product.html', label: 'Product' },
    { href: 'how-it-works.html', label: 'How It Works' },
    { href: 'pricing.html', label: 'Pricing' },
    { href: 'about.html', label: 'About' },
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
          <div class="nav-logo-m">M</div>
          Mach<span>Safe</span>
        </a>
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
            <div class="nav-logo-m">M</div>
            Mach<span>Safe</span>
          </a>
          <p>AI-assisted building safety compliance for the Building Safety Act 2022. Protecting residents across England.</p>
        </div>
        <div class="footer-col">
          <h5>Product</h5>
          <ul>
            <li><a href="product.html">Platform overview</a></li>
            <li><a href="how-it-works.html">How it works</a></li>
            <li><a href="pricing.html">Pricing</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="about.html">About us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="contact.html">Book a demo</a></li>
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
        <span>© 2026 Mach Global Ltd · Registered in England & Wales · ICO Registered Data Controller</span>
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
