import "../app/globals.css";
import Image from "next/image";
import kakao from "../public/kakao_icon.png";
import call from "../public/call_icon.png";

export default function Floating() {
  return (
    <div className="floating-wrap">
      <a href="https://open.kakao.com/o/sBNFf1ni">
        <Image className="icon" src={kakao} alt="kakao talk" />
      </a>
      <a href="tel:+821044715896">
        <Image className="icon" src={call} alt="call" />
      </a>
    </div>
  );
}
