/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="footer mt-50">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-4 col-sm-6 text-center text-md-start">
                <Link href="/" className="d-flex">
                  <Image alt="logo" src="/logo.svg" height={100} width={200} />
                </Link>
              </div>
              <div className="col-md-8 col-sm-6 text-center text-md-end">
                <span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">
                  Nisi član?
                </span>
                <Link href="https://forms.gle/qjm3knfJojSDPtQT6" legacyBehavior>
                  <a className="btn btn-square">Pridruži se!</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">Kontakt</h4>
              <div className="mt-20 text-body-text color-gray-600 mb-20">
                Matice hrvatske 15, 21000 Split, Hrvatska
              </div>
              <div className="mt-20 text-body-text color-gray-600">
                +385(0)95 900 6578
              </div>
              <div className="text-body-text color-gray-600">
                info@f-gaga.hr
              </div>
            </div>
            {/* <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">O nama</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="/#" legacyBehavior>
                    <a>Misija i vizija</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#" legacyBehavior>
                    <a>Članovi</a>
                  </Link>
                </li>
                <li>
                  <Link href="/" legacyBehavior>
                    <a>Karijere</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#" legacyBehavior>
                    <a>Mediji o nama</a>
                  </Link>
                </li>
              </ul>
            </div> */}
            {/* <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">Discover</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="/blog-2" legacyBehavior>
                    <a>Our Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-pricing-1" legacyBehavior>
                    <a>Plans and Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#" legacyBehavior>
                    <a>Knowledge Base</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#" legacyBehavior>
                    <a>Cookie Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#" legacyBehavior>
                    <a>Office Center</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-1" legacyBehavior>
                    <a>News and Events</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">Support</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="/page-faqs-1" legacyBehavior>
                    <a>FAQs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#" legacyBehavior>
                    <a>Editor Help</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#" legacyBehavior>
                    <a>Community</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#" legacyBehavior>
                    <a>Live Chatting</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-contact" legacyBehavior>
                    <a>Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#" legacyBehavior>
                    <a>Support Center</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-16">
              <h4 className="text-heading-5">Useful links</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="/#" legacyBehavior>
                    <a>Request an offer</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#" legacyBehavior>
                    <a>How it works</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-pricing-2" legacyBehavior>
                    <a>Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#" legacyBehavior>
                    <a>Reviews</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#" legacyBehavior>
                    <a>Stories</a>
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="footer-bottom mt-20">
            <div className="row">
              <div className="col-md-6">
                <span className="color-gray-400 text-body-lead">
                  © F-GAGA 2024
                </span>
                {/* <Link href="/" legacyBehavior>
                  <a className="text-body-text color-gray-400 ml-50">
                    Polica privatnosti
                  </a>
                </Link> */}

                <a
                  href="https://killerclick.com"
                  className="text-body-text color-gray-200 ml-50"
                >
                  web by Killer Click
                </a>
              </div>
              {/* <div className="col-md-6 text-center text-lg-end text-md-end">
                <div className="footer-social">
                  <Link href="https://facebook.com" legacyBehavior>
                    <a className="icon-socials icon-facebook"></a>
                  </Link>
                  <Link href="https://twitter.com" legacyBehavior>
                    <a className="icon-socials icon-twitter"></a>
                  </Link>
                  <Link href="https://www.instagram.com" legacyBehavior>
                    <a className="icon-socials icon-instagram"></a>
                  </Link>
                  <Link href="https://www.linkedin.com" legacyBehavior>
                    <a className="icon-socials icon-linkedin"></a>
                  </Link>
                </div>
              </div>] */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
