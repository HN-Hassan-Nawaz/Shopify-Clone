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
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
    const [showBrowse, setShowBrowse] = useState(false);
    const [showMobileBrowse, setShowMobileBrowse] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);
    const [openMega, setOpenMega] = useState(false);
    const [openPages, setOpenPages] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    const toggleSubMenu = (category) => {
        setOpenSubMenu(openSubMenu === category ? null : category);
    };

    const handleNavigation = (path) => {
        window.location.href = path;
    };

    const categories = [
        {
            name: "Beauty & Health",
            subcategories: [
                ["Dental Care", "Fragrances", "Hair Care", "Makeup"],
                ["Personal Care", "Skin Care", "Vitamins & Supplements"],
            ],
        },
        {
            name: "Bedding & Linens",
            subcategories: [
                ["Bed Sheets", "Blankets & Throws", "Comforters & Duvets"],
                ["Curtains & Drapes", "Mattress Protectors", "Pillowcases"],
            ],
        },
        {
            name: "Books & Media",
            subcategories: [
                ["Audio Books", "Books", "Children's Books"],
                ["Comics & Graphic Novels", "E-books", "Magazines", "Music & Movies"],
            ],
        },
        {
            name: "Home & Garden",
            subcategories: [
                ["Bedding", "Flooring", "Furniture", "Gardening"],
                ["Gardening Tools", "Kitchen & Dining", "Lighting", "Storage & Organization"],
            ],
        },
        {
            name: "Jewelry & Accessories",
            subcategories: [
                ["Bracelets & Bangles", "Earrings", "Necklaces & Pendants"],
                ["Rings", "Watches"],
            ],
        },
        {
            name: "Men's Clothing",
            subcategories: [
                ["Athletic Wear", "Casual Pants", "Down Jackets", "Faux Leather Coats"],
                ["Jackets", "Parkas", "Shorts", "Suits", "T-Shirts & Polos"],
            ],
        },
        {
            name: "Mother & Kids",
            subcategories: [
                ["Baby Gear", "Baby Products", "Kids Clothing", "Kids Shoes"],
                ["Kids Toys", "Maternity Wear", "Toys & Games"],
            ],
        },
        {
            name: "Outdoor Fun",
            subcategories: [
                ["Bicycles", "Camping & Hiking", "Climbing", "Cycling"],
                ["Fishing", "Sports Equipment", "Water Sports"],
            ],
        },
        {
            name: "Shoes",
            subcategories: [
                ["Boots", "Flats", "Heels", "Sandals"],
                ["Slippers", "Sneakers", "Wedges"],
            ],
        },
        {
            name: "Sports & Outdoors",
            subcategories: [
                ["Camping Gear", "Fishing Gear", "Fitness Equipment"],
                ["Hiking Gear", "Outdoor Gear", "Sports Apparel"],
            ],
        },
        {
            name: "Toys & Games",
            subcategories: [
                ["Action Figures", "Board Games", "Building Sets", "Dolls"],
                ["Educational Toys", "Outdoor Toys", "Puzzles"],
            ],
        },
        {
            name: "Women's Clothing",
            subcategories: [
                ["Activewear", "Blouses & Shirts", "Dresses", "Hoodies & Sweatshirts"],
                ["Jeans", "Outerwear", "Skirts & Pants", "Suits & Blazers"],
            ],
        },
    ];

    return (
        <div className="navbar-container">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="top-bar-left">
                    <span><FaPhoneAlt size={12} /> +923061546939</span>
                    <span><FaMapMarkerAlt size={12} /> Our location</span>
                </div>
                <div className="top-bar-right">
                    <span><FaGlobe size={12} /> English <MdKeyboardArrowDown /></span>
                    <span onClick={() => handleNavigation("/registration")}><FaUser size={12} /> Log In / Sign Up</span>
                </div>
            </div>

            {/* Desktop: Logo + Search + Cart */}
            <div className="logo-search desktop-only">
                <div onClick={() => handleNavigation("/")} className="logo">
                    <span className="logo-box">GO</span> Shopify
                </div>
                <div className="search-wrapper">
                    <div className="custom-dropdown">
                        <span>All Categories</span>
                        <MdKeyboardArrowDown />
                        <div className="dropdown-list">
                            {categories.map((cat, i) => <p key={i}>{cat.name}</p>)}
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

            {/* Desktop: Menu */}
            <div className="menu-bar desktop-only">
                {/* Browse Categories */}
                <div className="menu-item dropdown browse-dropdown position-relative">
                    <button className="btn d-flex align-items-center gap-2" onClick={() => setShowBrowse(!showBrowse)}>
                        <BiCategory className="browse-icon" />
                        Browse Categories
                    </button>

                    {showBrowse && (
                        <div className="browse-menu-wrapper">
                            {/* Category List */}
                            <div className="list-group bg-white">
                                {categories.map((cat, index) => (
                                    <button
                                        key={index}
                                        onMouseEnter={() => setActiveCategory(index)}
                                        className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${activeCategory === index ? 'bg-light fw-semibold' : ''
                                            }`}
                                    >
                                        {cat.name}
                                        <MdKeyboardArrowRight />
                                    </button>
                                ))}
                                <div className="list-group-item d-flex justify-content-between align-items-center text-success border-top">
                                    Show more... <span className="fs-5">+</span>
                                </div>
                            </div>

                            {/* Subcategory Panel */}
                            {activeCategory !== null && (
                                <div className="browse-submenu">
                                    {categories[activeCategory].subcategories.map((group, groupIndex) => (
                                        <div key={groupIndex}>
                                            <h6 className="text-success fw-semibold fs-5 mb-3">Subcategories</h6>
                                            <ul className="list-unstyled">
                                                {group.map((sub, i) => (
                                                    <li key={i} className="mb-2">
                                                        <a href="#" className="text-dark text-decoration-none">{sub}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                    <div className="bg-light text-dark rounded p-4 ms-auto d-flex flex-column justify-content-between" style={{ width: '220px' }}>
                                        <div>
                                            <p className="text-uppercase small fw-semibold text-muted mb-1">10% Off</p>
                                            <h6 className="fw-bold mb-3">New Arrival</h6>
                                            <a href="#" className="text-dark fw-semibold text-decoration-underline">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}


                </div>

                {/* Standard Links */}
                <div onClick={() => handleNavigation("/")} className="menu-item">Home</div>
                <div onClick={() => handleNavigation("/about")} className="menu-item">About</div>

                {/* Mega Menu */}
                <div className="menu-item dropdown mega">
                    Mega Menu <MdKeyboardArrowDown />
                    <div className="mega-dropdown-content">
                        {categories.slice(0, 3).map((cat, i) => (
                            <div key={i}>
                                <strong>{cat.name}</strong>
                                {cat.subcategories.flat().map((sub, j) => <p key={j}>{sub}</p>)}
                            </div>
                        ))}
                        <div className="mega-banner">
                            <span className="discount-circle">45%<br />off</span>
                            <p className="banner-title">HOT DEALS</p>
                            <p className="banner-highlight">Don't miss<br />Trending</p>
                            <p className="banner-save">Save up to 50%</p>
                            <button className="shop-now-btn">Shop now</button>
                        </div>
                    </div>
                </div>

                {/* Other Links */}
                <div onClick={() => handleNavigation("/blogs")} className="menu-item">Blog</div>

                <div className="menu-item dropdown pages">
                    Pages <MdKeyboardArrowDown />
                    <div className="pages-dropdown-content">
                        <p onClick={() => handleNavigation("/privacy")}>Privacy Policy</p>
                        <p onClick={() => handleNavigation("/terms")}>Terms of Service</p>
                    </div>
                </div>

                <div onClick={() => handleNavigation("/contact")} className="menu-item">Contact</div>
            </div>


            {/* Mobile Header */}
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

            {/* Mobile Menu */}
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

                <div className="browse-line" onClick={() => setShowMobileBrowse(!showMobileBrowse)}>
                    <span><BiCategory /> Browse Categories</span>
                </div>

                {showMobileBrowse && (
                    <div className="mobile-browse-menu px-5 py-3">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="menu-item">
                                {cat.name}
                            </div>
                        ))}
                    </div>
                )}

                <div onClick={() => handleNavigation("/")} className="menu-item">Home</div>
                <div onClick={() => handleNavigation("/about")} className="menu-item">About</div>
                <div className="menu-item">Shop</div>

                <div className="menu-item" onClick={() => setOpenMega(!openMega)}>
                    Mega Menu <MdKeyboardArrowDown />
                </div>
                {openMega && categories.slice(0, 3).map((mainCat, idx) => (
                    <div key={idx}>
                        <div className={`menu-item ${openSubMenu === mainCat.name ? "active" : ""}`} onClick={() => toggleSubMenu(mainCat.name)}>
                            {mainCat.name} <MdKeyboardArrowDown />
                        </div>
                        {openSubMenu === mainCat.name && (
                            <div className="mobile-submenu">
                                {mainCat.subcategories.flat().map((sub, i) => (
                                    <p key={i}>{sub}</p>
                                ))}
                            </div>
                        )}
                    </div>
                ))}


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

                <div onClick={() => handleNavigation("/contact")} className="menu-item">Contact</div>

                <div className="mobile-contact-info">
                    <span> Our location</span>
                    <span>Log In / Sign Up</span>
                    <span>+923061546939</span>
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
};

export default Navbar;
