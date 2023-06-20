import React from "react";

export default function Footer() {
  const SOFIcon = () => (
    <svg
      aria-hidden="true"
      className="native svg-icon iconLogoGlyphMd"
      width="32"
      height="37"
      viewBox="0 0 32 37"
    >
      <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
      <path
        d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
        fill="#F48024"
      ></path>
    </svg>
  );

  return (
    <footer className="flex sticky z-10 w-screen bg-[#232629] text-[#bfbfbf] text-sm py-10 px-4 ">
      <div className="flex w-[1265px] h-[270px] max-w-[1265px] mx-auto">
        <div className=" flex gap-10">
          <div>
            <SOFIcon />
          </div>
          <nav className=" flex gap-20 mr-20">
            <div>
              <h5 className="font-bold">STACK OVERFLOW</h5>
              <ul className=" py-3">
                <li className=" pb-2 text-xs opacity-75">Questions</li>
                <li className=" pb-2 text-xs opacity-75">Help</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold">PRODUCTS</h5>
              <ul className=" py-3">
                <li className=" pb-2 text-xs opacity-75">Teams</li>
                <li className=" pb-2 text-xs opacity-75">Advertising</li>
                <li className=" pb-2 text-xs opacity-75">Collectives</li>
                <li className=" pb-2 text-xs opacity-75">Talent</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold">COMPANY</h5>
              <ul className=" py-3">
                <li className=" pb-2 text-xs opacity-75">About</li>
                <li className=" pb-2 text-xs opacity-75">Press</li>
                <li className=" pb-2 text-xs opacity-75">Work Here</li>
                <li className=" pb-2 text-xs opacity-75">Legal</li>
                <li className=" pb-2 text-xs opacity-75">Privacy Policy</li>
                <li className=" pb-2 text-xs opacity-75">Terms of Service</li>
                <li className=" pb-2 text-xs opacity-75">Contact Use</li>
                <li className=" pb-2 text-xs opacity-75">Cookie Settings</li>
                <li className=" pb-2 text-xs opacity-75">Cookie Policy</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold">STACK EXCHANGE NETWORK</h5>
              <ul className=" py-3">
                <li className=" pb-2 text-xs opacity-75">Technology</li>
                <li className=" pb-2 text-xs opacity-75">
                  Culture & recreation
                </li>
                <li className=" pb-2 text-xs opacity-75">Life & arts</li>
                <li className=" pb-2 text-xs opacity-75">Science</li>
                <li className=" pb-2 text-xs opacity-75">Professional</li>
                <li className=" pb-7 text-xs opacity-75">Business</li>
                <li className=" pb-2 text-xs opacity-75">API</li>
                <li className=" pb-2 text-xs opacity-75">Data</li>
              </ul>
            </div>
          </nav>
          <div className=" flex flex-col justify-between">
            <ul className=" flex gap-5">
              <li className=" pb-2 text-xs opacity-75">Blog</li>
              <li className=" pb-2 text-xs opacity-75">Facebook</li>
              <li className=" pb-2 text-xs opacity-75">Twitter</li>
              <li className=" pb-2 text-xs opacity-75">LinkedIn</li>
              <li className=" pb-2 text-xs opacity-75">Instagram</li>
            </ul>
            <div className=" text-xs opacity-75 pb-7">
              <div>Site design / logo © 2023 Stack Exchange Inc; user</div>
              <div>
                contributions licensed under CC BY-SA. rev 2023.6.16.43501
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
