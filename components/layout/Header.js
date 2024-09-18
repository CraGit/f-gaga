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
                {/* <Link href="/" className="d-flex">
                  <Image
                    alt="logo"
                    src="/logo-yellow.svg"
                    height={50}
                    width={200}
                  />
                </Link> */}
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
                      <Link href="/o-nama" className="active">
                        O nama
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="https://forms.gle/qjm3knfJojSDPtQT6"
                        className="active"
                      >
                        Pristupnica
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/najave-i-dogadanja" className="active">
                        Najave i događanja
                      </Link>
                    </li>
                    <li className="">
                      <Link href="/dokumenti" className="active">
                        Dokumenti
                      </Link>
                    </li>

                    <li className="">
                      <Link href="/kontakt" className="active">
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div
                  className="burger-icon burger-icon-white mt-3 d-xl-none"
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
