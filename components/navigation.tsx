"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { generateMetadata } from "./generateMetadata";

import menu from "../public/menu_icon.png";
import "../app/globals.css";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "중고차 매입·수출·폐차 | 내차어때",

  description:
    "중고차 매입부터 수출, 폐차까지 한 곳에서 상담하세요. 주행거리 많은 차량, 사고차, 오래된 차량도 무료 견적 및 방문 상담을 제공합니다. 평택, 안성, 천안 등 전국 방문 가능.",

  openGraph: {
    siteName: "내차어때",

    images: {
      url: "/logo.png",
    },
  },

  other: {
    "naver-site-verification": "9452a2aa9833c54cbb5d0ebd512da001524855de",

    "google-site-verification": "b37BTrJB_RuH9ElDsUaG61sKOOJz4WNejwbE8rIOBwk",
  },

  metadataBase: new URL("http://www.내차어때.com"),

  // metadataBase: new URL("https://used-car-tau.vercel.app"),

  alternates: {
    canonical: "/",
  },
};

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
              <div
                style={{
                  fontFamily: "GiantsInline",
                  fontSize: "24px",
                  color: "#38832f",
                }}
              >
                내차어때
              </div>
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
            <div
              style={{
                fontFamily: "GiantsInline",
                fontSize: "20px",
                color: "#38832f",
                paddingTop: "12px",
                paddingRight: "8px",
              }}
            >
              내차어때
            </div>
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
