"use client";

import Link from "next/link";
import Image from "next/image";

import logo from "../public/logo.png";
import menu from "../public/menu_icon.png";
import "../app/globals.css";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [responsiveMenuState, setResponsiveMenuState] =
    useState<boolean>(false);

  useEffect(() => {
    const submenuList = document.querySelectorAll(".nav>ul>li");
    submenuList.forEach((submenu) => {
      submenu.addEventListener("mouseover", () => {
        submenu.querySelectorAll("ul").forEach((ul) => {
          ul.style.display = "block";
        });
      });
      submenu.addEventListener("mouseout", () => {
        submenu.querySelectorAll("ul").forEach((ul) => {
          ul.style.display = "none";
        });
      });
      submenu.addEventListener("click", () => {
        submenu.querySelectorAll("ul").forEach((ul) => {
          ul.style.display = "none";
        });
      });
    });
  }, []);

  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <Link href="/">
              <span
                style={{
                  fontFamily: "GiantsInline",
                  fontSize: "24px",
                  color: "#38832f",
                }}
              >
                내차어때
              </span>
              {/* <Image className="logo" src={logo} alt="logo" /> */}
            </Link>
            <ul className="sub">
              <Link href="/information">
                <li>회사소개</li>
              </Link>
              <Link href="/directions">
                <li>오시는길</li>
              </Link>
            </ul>
          </li>
          <Link href="/sales">
            <li>중고차 매매</li>
          </Link>
          <Link href="/export-car">
            <li>중고차 수출</li>
          </Link>
          <Link href="/scrapping">
            <li>폐차</li>
          </Link>
          <Link href="/customer-review">
            <li>고객리뷰</li>
          </Link>
          <a href="tel:+821044715896">
            <li>바로상담받기</li>
          </a>
        </ul>
      </div>
      <div className="responsive-nav">
        <div className="menu-wrap">
          <Image
            className="menu"
            src={menu}
            alt="menu"
            onClick={() => setResponsiveMenuState(!responsiveMenuState)}
          />
          <Link href="/">
            <Image
              className="logo"
              src={logo}
              alt="logo"
              onClick={() => {
                setResponsiveMenuState(false);
              }}
            />
          </Link>
        </div>
        {responsiveMenuState && (
          <ul>
            <Link
              href="/information"
              onClick={() => setResponsiveMenuState(!responsiveMenuState)}
            >
              <li>회사소개</li>
            </Link>
            <Link
              href="/directions"
              onClick={() => setResponsiveMenuState(!responsiveMenuState)}
            >
              <li>오시는길</li>
            </Link>
            <Link
              href="/sales"
              onClick={() => setResponsiveMenuState(!responsiveMenuState)}
            >
              <li>중고차 매매</li>
            </Link>
            <Link
              href="/export-car"
              onClick={() => setResponsiveMenuState(!responsiveMenuState)}
            >
              <li>중고차 수출</li>
            </Link>
            <Link
              href="/scrapping"
              onClick={() => setResponsiveMenuState(!responsiveMenuState)}
            >
              <li>폐차</li>
            </Link>
            <Link
              href="/customer-review"
              onClick={() => setResponsiveMenuState(!responsiveMenuState)}
            >
              <li>고객리뷰</li>
            </Link>
            <a
              href="tel:+821044715896"
              onClick={() => setResponsiveMenuState(!responsiveMenuState)}
            >
              <li>바로상담받기</li>
            </a>
          </ul>
        )}
      </div>
    </>
  );
}
