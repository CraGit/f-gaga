/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = ({ handleOpen, headerStyle }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? `${headerStyle} header sticky-bar stick `
            : `${headerStyle} header sticky-bar`
        }
      >
        <div className="container">
          <div className="main-header flex">
            <div className="header-left">
              <div className="header-logo">
                <Link href="/" className="d-flex">
                  <Image alt="logo" src="/logo.svg" height={50} width={200} />
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li className="">
                      <Link href="/" className="active">
                        Naslovnica
                      </Link>
                    </li>
                    <li className="">
                      <Link href="#" className="active">
                        Pristupnica
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/dokumenti" className="active">
                        Dokumenti
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/najave-i-dogadanja" className="active">
                        Najave i događanja
                      </Link>
                    </li>

                    <li className="">
                      <Link href="/kontakt" className="active">
                        Kontakt
                      </Link>
                    </li>
                    {/* <li className="has-children">
                      <Link href="#" legacyBehavior>
                        <a>About</a>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/page-about-1" legacyBehavior>
                            <a>
                              <i className="fi fi-rr-star" />
                              About Us - 1
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-about-2" legacyBehavior>
                            <a>
                              <i className="fi fi-rr-star" />
                              About Us - 2
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-about-3" legacyBehavior>
                            <a>
                              <i className="fi fi-rr-star" />
                              About Us - 3
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link href="#" legacyBehavior>
                        <a>Company</a>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/page-service-1" legacyBehavior>
                            <a className="closer">
                              <i className="fi fi-rr-gem" />
                              Services - 1
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-service-2" legacyBehavior>
                            <a className="closer">
                              <i className="fi fi-rr-gem" />
                              Services - 2
                            </a>
                          </Link>
                        </li>
                        <li className="hr">
                          <span />
                        </li>
                        <li>
                          <Link href="/page-pricing-1" legacyBehavior>
                            <a className="closer">
                              <i className="fi fi-rr-database" />
                              Pricing - 1
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-pricing-2" legacyBehavior>
                            <a className="closer">
                              <i className="fi fi-rr-database" />
                              Pricing - 2
                            </a>
                          </Link>
                        </li>
                        <li className="hr">
                          <span />
                        </li>
                        <li>
                          <Link href="/page-faqs-1" legacyBehavior>
                            <a className="closer">
                              <i className="fi fi-rr-headset" />
                              FAQs - 1
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-faqs-2" legacyBehavior>
                            <a className="closer">
                              <i className="fi fi-rr-headset" />
                              FAQs - 2
                            </a>
                          </Link>
                        </li>
                        <li className="hr">
                          <span />
                        </li>
                        <li>
                          <Link href="/page-career" legacyBehavior>
                            <a className="closer">
                              <i className="fi fi-rr-briefcase" />
                              Career
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-career-detail" legacyBehavior>
                            <a className="closer">
                              <i className="fi fi-rr-briefcase" />
                              Career Detail
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link href="#" legacyBehavior>
                        <a>Pages</a>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/page-contact" legacyBehavior>
                            <a>
                              <i className="fi fi-rr-paper-plane" />
                              Contact
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-signup" legacyBehavior>
                            <a>
                              <i className="fi fi-rr-user-add" />
                              Sign Up
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-login" legacyBehavior>
                            <a>
                              <i className="fi fi-rr-fingerprint" />
                              Log In
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-reset" legacyBehavior>
                            <a>
                              <i className="fi fi-rr-settings" />
                              Reset Password
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/404" legacyBehavior>
                            <a>
                              <i className="fi fi-rr-exclamation" />
                              Error 404
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link href="#" legacyBehavior>
                        <a>Blog</a>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/blog-1" legacyBehavior>
                            <a className="closer">
                              <i className="fi fi-rr-edit" />
                              Blog Archive - 1
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-2" legacyBehavior>
                            <a className="closer">
                              <i className="fi fi-rr-edit" />
                              Blog Archive - 2
                            </a>
                          </Link>
                        </li>
                        <li className="hr">
                          <span />
                        </li>
                        <li>
                          <Link href="/blog-single" legacyBehavior>
                            <a>
                              <i className="fi fi-rr-document-signed" />
                              Blog Single
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <a href="#">Shop</a>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/page-shop-grid-1" legacyBehavior>
                            <a className="closer">
                              <i className="fi fi-rr-edit"></i>Shop Grid - 1
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-shop-grid-2" legacyBehavior>
                            <a className="closer">
                              <i className="fi fi-rr-edit"></i>Shop Grid - 2
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/1" legacyBehavior>
                            <a className="closer">
                              <i className="fi fi-rr-edit"></i>Product Details
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </nav>
                <div
                  className="burger-icon burger-icon-white mt-3"
                  onClick={handleOpen}
                >
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
