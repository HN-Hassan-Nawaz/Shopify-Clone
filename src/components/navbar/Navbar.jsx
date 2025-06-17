import React, { useState } from "react";
import {
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaShoppingCart,
    FaGlobe,
    FaUser,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {

    const handleHome = () => {
        window.location.href = "/";
    }

    const handleAbout = () => {
        window.location.href = "/about";
    }

    const handleMegaMenu = () => {
        window.location.href = "/mega-menu";
    }

    const handlePages = () => {
        window.location.href = "/pages";
    }

    const handleBlogs = () => {
        window.location.href = "/blogs";
    }

    const handleContact = () => {
        window.location.href = "/contact";
    }

    const handleregistration = () => {
        window.location.href = "/registration";
    }

    const [menuOpen, setMenuOpen] = useState(false);
    const [openMega, setOpenMega] = useState(false);
    const [openPages, setOpenPages] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleSubMenu = (category) => {
        setOpenSubMenu(openSubMenu === category ? null : category);
    };

    const categories = {
        "Beauty & Health": ["Dental Care", "Fragrances", "Hair Care", "Makeup", "Personal Care", "Skin Care", "Vitamins & Supplements"],
        "Bedding & Linens": ["Bed Sheets", "Blankets & Throws", "Comforters & Duvets", "Curtains & Drapes", "Mattress Protectors", "Pillowcases"],
        "Books & Media": ["Audio Books", "Books", "Children's Books", "Comics & Graphic Novels", "E-books", "Magazines", "Music & Movies"],
        "Home & Garden": ["Furniture", "Kitchen", "Decor", "Lighting"],
        "Jewelry & Accessories": ["Necklaces", "Bracelets", "Rings", "Earrings"],
        "Men's Clothing": ["Shirts", "Pants", "Suits"],
        "Mother & Kids": ["Maternity", "Baby Gear", "Toys"],
        "Outdoor Fun": ["Camping", "Hiking", "Fishing"],
        "Shoes": ["Casual", "Formal", "Sports"],
        "Sports & Outdoors": ["Fitness", "Cycling", "Running"],
        "Toys & Games": ["Board Games", "Educational", "Outdoor Play"],
        "Women's Clothing": ["Dresses", "Tops", "Bottoms"]
    };

    return (
        <div className="navbar-container">
            <div className="top-bar">
                <div className="top-bar-left">
                    <span><FaPhoneAlt size={12} /> +923061546939</span>
                    <span><FaMapMarkerAlt size={12} /> Our location</span>
                </div>
                <div className="top-bar-right">
                    <span><FaGlobe size={12} /> English <MdKeyboardArrowDown /></span>
                    <span onClick={handleregistration}><FaUser size={12} /> Log In / Sign Up</span>
                </div>
            </div>

            <div className="logo-search desktop-only">
                <div onClick={handleHome} className="logo">
                    <span className="logo-box">GO</span> Shopify
                </div>

                <div className="search-wrapper">
                    <div className="custom-dropdown">
                        <span>All Categories</span>
                        <MdKeyboardArrowDown />
                        <div className="dropdown-list">
                            {Object.keys(categories).map((cat, i) => <p key={i}>{cat}</p>)}
                        </div>
                    </div>

                    <div className="underline-search">
                        <input type="text" placeholder="Search for items..." />
                        <GoSearch className="search-icon" />
                    </div>
                </div>

                <div className="cart-icon">
                    <FaShoppingCart />
                    <span className="cart-count">0</span>
                </div>
            </div>

            <div className="menu-bar desktop-only">
                <div className="menu-item dropdown browse-dropdown">
                    <BiCategory className="browse-icon" />
                    Browse Categories
                </div>

                <div onClick={handleHome} className="menu-item">Home</div>
                <div onClick={handleAbout} className="menu-item">About</div>

                <div className="menu-item dropdown mega" onClick={handleMegaMenu}>
                    Mega menu <MdKeyboardArrowDown />
                    <div className="mega-dropdown-content">
                        {Object.keys(categories).slice(0, 3).map((cat, i) => (
                            <div key={i}>
                                <strong>{cat}</strong>
                                {categories[cat].map((sub, j) => <p key={j}>{sub}</p>)}
                            </div>
                        ))}
                        <div className="mega-banner">
                            <span className="discount-circle">35%<br />off</span>
                            <p className="banner-title">HOT DEALS</p>
                            <p className="banner-highlight">Don't miss<br />Trending</p>
                            <p className="banner-save">Save to 50%</p>
                            <button className="shop-now-btn">Shop now</button>
                        </div>
                    </div>
                </div>

                <div onClick={handleBlogs} className="menu-item">Blog</div>

                <div onClick={handlePages} className="menu-item dropdown pages">
                    Pages <MdKeyboardArrowDown />
                    <div className="pages-dropdown-content">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                </div>

                <div onClick={handleContact} className="menu-item">Contact</div>
            </div>

            <div className="logo-search mobile-only">
                <div className="logo">
                    <span className="logo-box">GO</span> Shopify
                </div>
                <div className="cart-icon">
                    <FaShoppingCart />
                    <span className="cart-count">0</span>
                </div>
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
                </button>
            </div>

            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <div className="mobile-menu-header">
                    <div className="logo">
                        <span className="logo-box">GO</span> Shopify
                    </div>
                    <button className="close-btn" onClick={() => setMenuOpen(false)}>
                        <RxCross2 />
                    </button>
                </div>

                <div className="underline-search">
                    <input type="text" placeholder="Search for items..." />
                    <GoSearch className="search-icon inside" />
                </div>

                <div className="browse-line">
                    <span><BiCategory /> Browse Categories</span>
                </div>

                <div className="menu-item">Home</div>
                <div className="menu-item">Shop</div>

                <div className="menu-item" onClick={() => setOpenMega(!openMega)}>
                    Mega Menu <MdKeyboardArrowDown />
                </div>

                {openMega && (
                    <>
                        {Object.keys(categories).map((mainCat) => (
                            <div key={mainCat}>
                                <div
                                    className={`menu-item ${openSubMenu === mainCat ? "active" : ""}`}
                                    onClick={() => toggleSubMenu(mainCat)}
                                >
                                    {mainCat} <MdKeyboardArrowDown />
                                </div>
                                {openSubMenu === mainCat && (
                                    <div className="mobile-submenu">
                                        {categories[mainCat].map((subItem, index) => (
                                            <p key={index}>{subItem}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                )}

                <div className="menu-item">Blog</div>

                <div className="menu-item" onClick={() => setOpenPages(!openPages)}>
                    Pages <MdKeyboardArrowDown />
                </div>
                {openPages && (
                    <div className="mobile-submenu">
                        <p>Privacy Policy</p>
                        <p>Terms Of Service</p>
                    </div>
                )}

                <div className="menu-item" onClick={() => setOpenLanguage(!openLanguage)}>
                    Language <MdKeyboardArrowDown />
                </div>
                {openLanguage && (
                    <div className="mobile-submenu">
                        <p>English</p>
                        <p>Urdu</p>
                    </div>
                )}

                <div onClick={handleContact} className="menu-item">Contact</div>

                <div className="mobile-contact-info">
                    <span> Our location</span>
                    <span>Log In / Sign Up</span>
                    <span> +923061546939</span>
                </div>

                <div className="mobile-follow-section">
                    <h4>Follow Us</h4>
                    <div className="icons">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaPinterest />
                        <FaYoutube />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar