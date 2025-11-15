"use client";

import { useState } from "react";
import { Wallet, X } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{`
        @keyframes bob {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bob {
          animation: bob 2s infinite ease-in-out;
        }
      `}</style>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xs">
        <div className="flex justify-between items-center p-4 md:p-5">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="#00FFCC" />
              <path d="M12 12h8v8h-8z M20 20h8v8h-8z" fill="#000" />
            </svg>
            <span className="text-2xl font-semibold">ChainOpera AI</span>
          </div>

          {/* Social Icons & Connect Button */}
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://x.com/ChainOpera_AI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00FFCC] transition-colors text-xl"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://discord.gg/chainopera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00FFCC] transition-colors text-xl"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a
                href="https://t.me/ChainOpera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00FFCC] transition-colors text-xl"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>

            {/* Connect Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className=" flex cursor-pointer bg-[#00FFCC] text-black font-semibold px-8 py-2 rounded-xl hover:bg-[#00E5B8] transition-all h-10 text-sm md:text-base"
            >
              <Wallet className="text-black/60 mr-2"/>
              <span className="hidden md:inline text-black/60">Connect</span>
              <span className="md:hidden text-black/60">Connect</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="-mt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black grid-bg">
          {/* Animated highlights */}
          <div
            className="absolute highlight flicker z-0"
            style={{
              top: "280px",
              left: "400px",
              animationDuration: "2100ms",
            }}
          />
          <div
            className="absolute highlight flicker z-0"
            style={{
              top: "600px",
              left: "320px",
              animationDuration: "1900ms",
            }}
          />

          <div className="relative z-10 pt-50">
            {/* Hero Content */}
            <div className="flex justify-center px-5">
              <div className="relative">
                {/* Light glow background */}
                <Image
                  src="/2619588376.png"
                  alt=""
                  loading="eager"
                  className="absolute max-w-full pointer-events-none -top-20 -left-64 opacity-100"
                  style={{ transform: "scale(1.2, 1.2)" }}
                  width={950}
                  height={688}
                />
                {/* Hero text image */}
                <Image
                  src="/hero-text.C0YcCEXY.png"
                  alt="COAI NOW"
                  loading="eager"
                  className="relative z-10 max-w-full"
                  width={752}
                  height={135}
                />
              </div>
            </div>

            {/* Subtitle */}
            <div className="text-center py-6 px-5">
              <span className="text-lg bg-linear-to-r from-white to-[#4A5656] bg-clip-text text-transparent">
                Co-Create, Co-Own, $COAI - The Collaborative Intelligence of AI
                Agent & Model Network On Blockchain!
              </span>
            </div>
            <div className="flex"></div>
            {/* Left hand decoration */}
            <div className="relative py-20 md:py-5">
              <div className="absolute top-[220px] md:-top-2.5 left-0 max-w-[40%] md:max-w-[33%] xl:top-[-50px] pointer-events-none">
                <Image
                  src="/left-hand.png"
                  alt=""
                  loading="eager"
                  className="transform -rotate-30 md:rotate-0 -translate-x-9 md:translate-x-0 origin-left"
                  width={470}
                  height={200}
                />
              </div>
            </div>

            <div className="relative py-20 md:py-5 flex justify-end">
              <div className="absolute top-[220px] md:-top-2.5 right-0 max-w-[40%] md:max-w-[33%] xl:top-[-50px] pointer-events-none">
                <Image
                  src="/right-hand.png"
                  alt=""
                  loading="eager"
                  className="transform rotate-30 md:rotate-0 translate-x-9 md:translate-x-0 origin-right"
                  width={470}
                  height={200}
                />
              </div>
            </div>
            <div className="relative py-20 md:py-5 flex justify-center">
              <div className="absolute top-[220px] md:-top-2.5 xl:top-[-50px] pointer-events-none animate-bob">
                <Image
                  src="/token.png"
                  alt=""
                  loading="eager"
                  className="transform rotate-30 md:rotate-0 translate-x-9 md:translate-x-0 origin-right"
                  width={185} // Increase this value
                  height={185}
                />
              </div>
            </div>

            {/* Connect Wallet Button */}
            <div className="flex flex-col justify-center items-center py-7 gap-7 pb-20 mt-30">
              <button
                onClick={() => setIsModalOpen(true)}
                className="get-bgn text-lg font-bold px-22 h-11 text-white rounded-full cursor-pointer hover:drop-shadow-[0_0_15px_rgba(0,255,200,0.6)] transition-all duration-300"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative overflow-hidden bg-black grid-bg pb-8 pt-24 px-8 md:px-5">
          {/* Animated highlight */}
          <div
            className="absolute highlight flicker z-0"
            style={{
              top: "120px",
              left: "400px",
              animationDuration: "2100ms",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
            {/* Left - Powered by */}
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex gap-6 items-center justify-center lg:justify-start">
                <span className="text-[#D1D5DB] text-base">Powered by</span>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="#00FFCC" />
                    <path d="M12 12h8v8h-8z M20 20h8v8h-8z" fill="#000" />
                  </svg>
                  <span className="text-white font-semibold">
                    ChainOpera AI
                  </span>
                </div>
              </div>
              <div className="text-[#D1D5DB] text-base">
                © 2025 ChainOpera AI. All Rights Reserved.
              </div>
            </div>

            {/* Center - Links */}
            <div className="flex gap-4 items-end justify-center">
              <a
                href="/privacy-policy"
                className="text-[#00FFCC] text-base underline hover:text-[#00E5B8]"
              >
                Privacy Policy
              </a>
              <a
                href="/airdrop-tos"
                className="text-[#00FFCC] text-base underline hover:text-[#00E5B8]"
              >
                Terms of Service
              </a>
            </div>

            {/* Right - Foundation Info */}
            <div className="space-y-2 lg:space-y-4 text-center lg:text-right">
              <div>ChainOpera Foundation</div>
              <div className="text-xs text-[#D1D5DB]">
                George Town Financial Center, Suite 306, 90 Fort Street, PO Box
                10061, Grand Cayman, Cayman Islands,KY1-1001
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/10 backdrop-blur-xs"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="relative p-16 md:p-8 bg-black/90 rounded-lg border border-[#262627] max-w-2xl w-full mx-4">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 cursor-pointer border-2 border-white rounded-full p-2 hover:scale-105 hover:shadow-lg transition-transform"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-3xl font-bold font-dohyeon">
                Log in or Sign up
              </h2>
              <div className="text-2xl md:text-xl font-bold">
                Log in and connect wallet to earn points!
              </div>

              {/* Wallet options */}
              <ul className="space-y-4 list-none ml-0 pl-0">
                <li>
                  <button
                    type="button"
                    className="w-full gap-2 px-8 py-4 text-black bg-white text-2xl md:text-base cursor-pointer border rounded-sm shadow-sm hover:shadow-lg hover:scale-[1.02] flex items-center justify-center hover:text-white hover:bg-[#00FFCC] transition-all"
                  >
                    <Image
                      src="/binance.png"
                      alt="Binance"
                      className="w-8 h-8"
                      width={32}
                      height={32}
                    />
                    Binance Wallet
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="w-full gap-2 px-8 py-4 text-black bg-white text-2xl md:text-base cursor-pointer border rounded-sm shadow-sm hover:shadow-lg hover:scale-[1.02] flex items-center justify-center hover:text-white hover:bg-[#00FFCC] transition-all"
                  >
                    <Image
                      src="https://ext.same-assets.com/2727719706/3796535199.png"
                      alt="WalletConnect"
                      className="w-fit h-fit"
                      width={32}
                      height={32}
                    />
                    WalletConnect
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="w-full gap-2 px-8 py-4 text-black bg-white text-2xl md:text-base cursor-pointer border rounded-sm shadow-sm hover:shadow-lg hover:scale-[1.02] flex items-center justify-center hover:text-white hover:bg-[#00FFCC] transition-all"
                  >
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle cx="12" cy="12" r="10" fill="#0052FF" />
                    </svg>
                    Base Account
                  </button>
                </li>
              </ul>

              {/* Privacy checkbox */}
              <label className="flex items-center justify-center space-x-2">
                <input type="checkbox" className="w-4 h-4 accent-[#00FFCC]" />
                <span className="text-[#D1D5DB] text-sm">
                  I have read and agree to the{" "}
                  <a
                    href="https://chainopera.ai/privacyPolicy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00FFCC] hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  &{" "}
                  <a
                    href="https://chainopera.ai/service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00FFCC] hover:underline"
                  >
                    Terms of Use.
                  </a>
                </span>
              </label>

              <div className="text-[#D1D5DB] text-center">
                Powered by ChainOpera
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
