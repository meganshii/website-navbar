import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Banners from "../Layout/Banner";
import { links } from "../../constants/index";
import Services from "../Layout/Service";
import Layout from "../Layout/Layout";
import gsap from "gsap";
import ApplicationPage from "../Layout/Application";
import Solution from "../Layout/Solution";

const NavLinks = ({
  hoveredItem,
  setHoveredItem,
  open,
  heading,
  setHeading,
  isVisible,
  setIsVisible,
}) => {
  const animateref = useRef(null);
  const menuDropRef = useRef(null);
  const listItemRefs = useRef([]);

  useEffect(() => {
    if (hoveredItem) {
      if (isVisible) {
        gsap.fromTo(
          animateref.current,
          { y: "-20%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.1 }
        );
        setIsVisible(false);
      }
    } else {
      gsap.to(animateref.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.8,
        ease: "power3.in",
      });
    }
  }, [hoveredItem]);

  useEffect(() => {
    const handleMouseEnter = (e, index) => {
      const menuDrop = menuDropRef.current;
      const item = listItemRefs.current[index];

      menuDrop.style.setProperty(
        "--block-top",
        `${item.getBoundingClientRect().top}px`
      );
      menuDrop.style.setProperty(
        "--block-left",
        `${item.getBoundingClientRect().left}px`
      );
      menuDrop.style.setProperty("--block-height", `${item.clientHeight}px`);
      menuDrop.style.setProperty("--block-width", `${item.clientWidth}px`);
      menuDrop.style.setProperty("opacity", "1");
      menuDrop.style.setProperty("visibility", "visible");

      gsap.to(menuDrop, {
        duration: 0.5,
        ease: "power3.out",
        left: item.getBoundingClientRect().left,
        top: item.getBoundingClientRect().top,
        width: item.clientWidth,
        height: item.clientHeight,
        backgroundColor: "black",
        color: "white",
      });
    };

    const handleMouseLeave = () => {
      const menuDrop = menuDropRef.current;
      gsap.to(menuDrop, {
        duration: 0.5,
        ease: "power3.out",
        opacity: 0,
        visibility: "hidden",
      });
    };

    listItemRefs.current.forEach((item, index) => {
      item.addEventListener("mouseenter", (e) => handleMouseEnter(e, index));
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      listItemRefs.current.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const handleMouseEnternew = (linkName) => {
    setHeading(linkName);
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
    setHeading(item);
  };

  return (
    <>
      {links.map((link, index) => (
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
                ref={(el) => (listItemRefs.current[index] = el)}
                className={`flex item-center p-0 font-montserrat text-16 pl-2 pr-2 justify-center link-name ${
                  hoveredItem
                    ? heading === link.name
                      ? "bg-black text-white rounded-full"
                      : "text-black"
                    : "text-black"
                } text-base rounded-full`}
              >
                {link.name}
              </p>
            </h6>

            {hoveredItem === link.name && (
              <div
                ref={animateref}
                className={`fixed left-0 right-0 mx-auto shadow-lg max-w-screen-2xl rounded-b-xl h-auto z-10 top-14 flex justify-center items-center`}
              >
                <div id="borderline" className="absolute top-0 left-0 w-full" />
                {link.comp === "AboutUs" && (
                  <Layout
                    hoveredItem={hoveredItem}
                    setHoveredItem={setHoveredItem}
                    heading={heading}
                    setHeading={setHeading}
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                  />
                )}
                {link.name === "Products" && (
                  <Banners
                    hoveredItem={hoveredItem}
                    setHoveredItem={setHoveredItem}
                    heading={heading}
                    setHeading={setHeading}
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                  />
                )}
                {link.name === "Application" && <ApplicationPage />}
                {link.name === "Solutions" && <Solution />}
                {link.submenu &&
                  link.comp !== "AboutUs" &&
                  link.name !== "Products" &&
                  link.name !== "Application" &&
                  link.name !== "Solutions"}
              </div>
            )}
          </div>
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
                  {link.name === "Application" && <ApplicationPage />}
                  {link.name === "Solutions" && <Solution />}
                  {link.submenu &&
                    link.comp !== "AboutUs" &&
                    link.name !== "Products" &&
                    link.name !== "Application" &&
                    link.name !== "Solutions" && (
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
