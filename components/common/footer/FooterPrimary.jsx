import Link from 'next/link';

export default function FooterPrimary() {
  return (
    <div className="container footer-primary-inner">
      <nav className="footer-nav">
        <ul>
          <li>
            <Link href="/" title="Information">
              Information
            </Link>
          </li>

          <li>
            <Link href="/" title="Contact us">
              Contact us
            </Link>
          </li>

          <li>
            <Link href="/" title="track my order">
              track my order
            </Link>
          </li>

          <li>
            <Link href="/" title="Shipping">
              Shipping
            </Link>
          </li>

          <li>
            <Link href="/" title="Free returns*">
              Free returns*
            </Link>
          </li>

          <li>
            <Link href="/" title="My account">
              My account
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Services">
              Services
            </Link>
          </li>

          <li>
            <Link href="/" title="Ship to store">
              Ship to store
            </Link>
          </li>

          <li>
            <Link href="/" title="Gift card">
              Gift card
            </Link>
          </li>

          <li>
            <Link href="/" title="Online only">
              Online only
            </Link>
          </li>

          <li>
            <Link href="/" title="Tips&tricks">
              Tips&tricks
            </Link>
          </li>

          <li>
            <Link href="/" title="Home">
              Home
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Loyalty programs">
              Loyalty programs
            </Link>
          </li>

          <li>
            <Link href="/" title="Sign up to the Simons">
              Sign up to the Simons
            </Link>
          </li>

          <li>
            <Link href="/" title="My account">
              My account
            </Link>
          </li>

          <li>
            <Link href="/" title="Conditions">
              Conditions
            </Link>
          </li>

          <li>
            <Link href="/" title="Faq">
              Faq
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="Careers">
              Careers
            </Link>
          </li>

          <li>
            <Link href="/" title="About us">
              About us
            </Link>
          </li>

          <li>
            <Link href="/" title="Our story">
              Our story
            </Link>
          </li>

          <li>
            <Link href="/" title="Art & Culture">
              Art & Culture
            </Link>
          </li>

          <li>
            <Link href="/" title="Our private labels">
              Our private labels
            </Link>
          </li>

          <li>
            <Link href="/" title="Stores">
              Stores
            </Link>
          </li>
        </ul>
      </nav>

      <section className="footer-contact">
        <h1>
          <span>Thread Affair</span> Milano
        </h1>

        <p className="d-flex flex-column">
          Largo Augusto 3, Milano, 20122, Milano, IT
          <a href="tel:+00390276000366" title="Call us">
            Tel: 00390276000366
          </a>
          <a
            href="mailto:office@thread-affair.com"
            className="text-danger"
            title="email us"
          >
            office@thread-affair.com
          </a>
        </p>
      </section>

      <nav className="footer-support">
        <ul>
          <li>
            <a href="tel:+00390276000366" title="Call us">
              <i className="fa-solid fa-phone"></i>
              Support
            </a>
          </li>

          <li>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat"
            >
              <i className="fa-solid fa-comment"></i>
              Chat
            </a>
          </li>

          <li>
            <a href="mailto:office@thread-affair.com" title="email us">
              <i className="fa-solid fa-at"></i>
              Email
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
