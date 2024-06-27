import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banners from "../Layout/Banner";
import { links } from "../../constants/index";
import Services from "../Layout/Service";
import Industries from "../Layout/Industries";
import Layout from "../Layout/Layout";

const NavLinks = ({ hoveredItem, setHoveredItem, open }) => {
    const [heading, setHeading] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnternew = (linkName) => {
        setHeading(linkName);
    };

    const handleMouseEnter = (item) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
        setHeading(null);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {links.map((link) => (
                <div
                    key={link.name}
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    className="text-left md:cursor-pointer group relative"
                >
                    <div className="hidden md:flex">
                        <h6
                            className={`z-30 flex justify-center items-center md:pr-1 pr-2`}
                            onMouseEnter={() => handleMouseEnternew(link.name)}
                            onClick={() => {
                                heading !== link.name ? setHeading(link.name) : setHeading("");
                            }}
                        >
                            <p
                                className={`flex item-center p-0 font-montserrat text-16 pl-2 pr-2 justify-center ${hoveredItem
                                    ? heading === link.name
                                        ? "bg-black text-white rounded-full"
                                        : "text-black"
                                    : "text-black"
                                    } text-base z-30 rounded-full`}
                            >
                                {link.name}
                            </p>
                        </h6>

                        {hoveredItem === link.name && (
                            <div
                                className={`fixed left-0 right-0 mx-auto shadow-lg bg-red-500 max-w-screen-2xl rounded-b-xl h-auto z-10 top-14 flex justify-center items-center`}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div
                                    id="borderline"
                                    className="absolute bg-white top-0 left-0 w-full"
                                ></div>

                                {link.comp === "AboutUs" && <Layout />}
                                {link.name === "Products" && <Banners />}
                                {link.name === "Industries" && <Industries />}
                                {link.submenu &&
                                    link.comp !== "AboutUs" &&
                                    link.name !== "Products" &&
                                    link.name !== "Industries" && (
                                        <div className="bg-white shadow-lg w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-10">
                                            {link.sublinks.map((mysublinks) => (
                                                <div key={mysublinks.Head} className="text-center">
                                                    <h1 className="text-lg font-montserrat text-16">
                                                        {mysublinks.Head}
                                                    </h1>
                                                    <ul>
                                                        {mysublinks.sublink.map((slink) => (
                                                            <li
                                                                className="text-sm text-gray-600 my-2.5"
                                                                key={slink.name}
                                                            >
                                                                <Link
                                                                    to={slink.link}
                                                                    className="hover:text-primary"
                                                                >
                                                                    {slink.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                            </div>
                        )}
                    </div>
                    {/* Mobile menus */}
                    {open && (
                        <div className="md:hidden w-full bg-inherit">
                            <div
                                className={`py-2 pl-4 border-b border-gray-300 text-black flex justify-between items-center`}
                                onClick={() => {
                                    heading !== link.name
                                        ? setHeading(link.name)
                                        : setHeading("");
                                }}
                            >
                                <p className="text-lg">{link.name}</p>
                                <span>{heading === link.name ? "-" : "+"}</span>
                            </div>
                            {heading === link.name && (
                                <div className="pl-4 pb-2">
                                    {link.comp === "AboutUs" && <Services />}
                                    {link.name === "Products" && <Banners />}
                                    {link.name === "Industries" && <Industries />}
                                    {link.submenu &&
                                        link.comp !== "AboutUs" &&
                                        link.name !== "Products" &&
                                        link.name !== "Industries" && (
                                            <div>
                                                {link.sublinks.map((mysublinks) => (
                                                    <div key={mysublinks.Head} className="text-center">
                                                        <h1 className="text-lg font-montserrat text-16">
                                                            {mysublinks.Head}
                                                        </h1>
                                                        <ul>
                                                            {mysublinks.sublink.map((slink) => (
                                                                <li
                                                                    className="text-sm text-gray-600 my-2.5"
                                                                    key={slink.name}
                                                                >
                                                                    <Link
                                                                        to={slink.link}
                                                                        className="hover:text-primary"
                                                                    >
                                                                        {slink.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default NavLinks;
