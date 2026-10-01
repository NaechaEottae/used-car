"use client";

import Link from "next/link";
import Image from "next/image";
import menu from "../public/menu_icon.png";
import "../app/globals.css";
import { useState } from "react";

export default function Navigation() {
  const [responsiveMenuState, setResponsiveMenuState] =
    useState<boolean>(false);

  return (
    <>
      {/* =========================
    PC NAVIGATION
========================== */}
      <nav className="nav">
        <ul>
          {/* 로고 */}
          <li className="nav-logo">
            <Link href="/">
              <span>내차어때</span>
            </Link>
          </li>

          {/* 메뉴 */}
          <li>
            <Link href="/sales">중고차 매매</Link>
          </li>

          <li>
            <Link href="/export-car">중고차 수출</Link>
          </li>

          <li>
            <Link href="/scrapping">폐차</Link>
          </li>

          <li>
            <Link href="/customer-review">고객리뷰</Link>
          </li>

          {/* 무료 견적 */}
          <li className="nav-estimate">
            <a href="tel:01099545896" target="_parent">
              무료 견적 받기
            </a>
          </li>
        </ul>
      </nav>

      {/* =========================
    MOBILE NAVIGATION
========================== */}
      <nav className="responsive-nav">
        <div className="menu-wrap">
          {/* 햄버거 버튼 */}
          <button
            type="button"
            className="mobile-menu-button"
            aria-label="메뉴 열기"
            onClick={() => setResponsiveMenuState(!responsiveMenuState)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* 모바일 로고 */}
          <Link href="/" className="mobile-logo">
            내차어때
          </Link>

          {/* 모바일 무료 견적 */}
          <a
            href="tel:01099545896"
            target="_parent"
            className="mobile-estimate-button"
          >
            무료 견적
          </a>
        </div>

        {/* 모바일 메뉴 */}
        {responsiveMenuState && (
          <div className="mobile-menu">
            <Link href="/sales" onClick={() => setResponsiveMenuState(false)}>
              중고차 매매
            </Link>

            <Link
              href="/export-car"
              onClick={() => setResponsiveMenuState(false)}
            >
              중고차 수출
            </Link>

            <Link
              href="/scrapping"
              onClick={() => setResponsiveMenuState(false)}
            >
              폐차
            </Link>

            <Link
              href="/customer-review"
              onClick={() => setResponsiveMenuState(false)}
            >
              고객리뷰
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
