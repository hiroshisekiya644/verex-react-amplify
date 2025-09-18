import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../assets/images/logo.jpg"

const Header = () => {
    return (
        <header className="header-layout-nav-right">
            <div className="header-wrapper">
                <div className="header-title-nav-wrapper">
                    <div className="header-title">
                        <div className="header-title-logo">
                            <Link href="/">
                                <Image src={logo} alt="Logo" />
                            </Link>
                        </div>
                    </div>

                    <div className="header-nav">
                        <div className="header-nav-wrapper">
                            <nav className="header-nav-list">
                                <div className="header-nav-item">
                                    <Link href="/">Signal Home</Link>
                                </div>
                                <div className="header-nav-item">
                                    <Link href="/about">My Account</Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
