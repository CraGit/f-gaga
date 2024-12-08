/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const Sidebar = ({ openClass, handleClose }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}
        style={{ zIndex: 9999 }}
      >
        <div
          className="burger-icon burger-icon-white burger-close mt-3"
          onClick={handleClose}
        >
          <span className="burger-icon-top" />
          <span className="burger-icon-mid" />
          <span className="burger-icon-bottom" />
        </div>
        <PerfectScrollbar className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li
                      className={
                        isActive.key == 1
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <Link href="/" className="active" onClick={handleClose}>
                        Naslovnica
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 1
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <Link
                        href="/o-nama"
                        className="active"
                        onClick={handleClose}
                      >
                        O nama
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 1
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <Link
                        href="https://forms.gle/qjm3knfJojSDPtQT6"
                        className="active"
                        onClick={handleClose}
                      >
                        Pristupnica
                      </Link>
                    </li>

                    <li
                      className={
                        isActive.key == 1
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <Link
                        href="/najave-i-dogadanja"
                        className="active"
                        onClick={handleClose}
                      >
                        Najave i događanja
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 1
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <Link
                        href="/dokumenti"
                        className="active"
                        onClick={handleClose}
                      >
                        Dokumenti
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 1
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <Link
                        href="/clanovi"
                        className="active"
                        onClick={handleClose}
                      >
                        Članovi
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 1
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <Link
                        href="/doniraj"
                        className="active"
                        onClick={handleClose}
                      >
                        Doniraj
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 1
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <Link
                        href="/kontakt"
                        className="active"
                        onClick={handleClose}
                      >
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="site-copyright color-gray-400">
                Copyright 2024 FGAG
                <br />
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </>
  );
};

export default Sidebar;
