// components/Navbar.jsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaCoins, FaBolt, FaUserCircle, FaWallet } from "react-icons/fa";
import { GiSloth, GiRollingDices, GiCardPickup, GiPokerHand } from "react-icons/gi";
import { RiLiveFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [balance, setBalance] = useState("0.00");

  const connectWallet = () => {
    setWalletConnected(true);
    setBalance("42.69");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Main Nav */}
          <div className="flex items-center space-x-10">
            {/* Logo with animated gradient */}
            <Link href="/" className="flex items-center group">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 animate-gradient-x">
                SONNY<span className="text-yellow-400">BET</span>
              </span>
              <span className="ml-2 px-2 py-1 text-xs font-mono bg-yellow-400 text-black rounded-md group-hover:animate-pulse">
                CRYPTO
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <NavLink href="/" icon={<FaBolt className="text-yellow-400" />} text="Live Bets" />
              <NavLink href="/slots" icon={<GiSloth className="text-purple-400" />} text="Slots" />
              <NavLink href="/dice" icon={<GiRollingDices className="text-blue-400" />} text="Dice" />
              <NavLink href="/cards" icon={<GiCardPickup className="text-red-400" />} text="Cards" />
              <NavLink href="/poker" icon={<GiPokerHand className="text-green-400" />} text="Poker" />
            </nav>
          </div>

          {/* Right Side - Wallet & User */}
          <div className="flex items-center space-x-4">
            {/* Balance Display */}
            {walletConnected && (
              <div className="hidden sm:flex items-center space-x-2 bg-gray-800/80 px-3 py-2 rounded-lg border border-yellow-400/30">
                <FaCoins className="text-yellow-400" />
                <span className="font-mono text-sm">{balance} ETH</span>
              </div>
            )}

            {/* Wallet Button */}
            <button
              onClick={connectWallet}
              disabled={walletConnected}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                walletConnected
                  ? "bg-green-500/10 text-green-400 border border-green-400/30 cursor-default"
                  : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-600 text-black hover:shadow-lg hover:shadow-yellow-500/30"
              }`}
            >
              <FaWallet />
              <span>{walletConnected ? "Connected" : "Connect Wallet"}</span>
            </button>

            {/* User Menu */}
            <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
              <FaUserCircle className="text-2xl text-gray-300 hover:text-white" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-yellow-400"></span>
                <span className="block w-6 h-0.5 bg-yellow-400"></span>
                <span className="block w-4 h-0.5 bg-yellow-400 ml-auto"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 backdrop-blur-md md:hidden">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-10">
              <Link href="/" className="text-2xl font-bold text-yellow-400" onClick={() => setMobileMenuOpen(false)}>
                SONNYBET
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-2xl">
                <IoMdClose />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 flex-1">
              <MobileNavLink href="/" icon={<RiLiveFill />} text="Live Bets" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/slots" icon={<GiSlotMachine />} text="Slots" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/dice" icon={<GiRollingDice />} text="Dice" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/cards" icon={<GiCardPickup />} text="Cards" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="/poker" icon={<GiPokerHand />} text="Poker" onClick={() => setMobileMenuOpen(false)} />
            </nav>

            <div className="pt-6 border-t border-gray-800">
              {walletConnected ? (
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FaCoins className="text-yellow-400 text-xl" />
                    <div>
                      <p className="text-xs text-gray-400">Balance</p>
                      <p className="font-mono">{balance} ETH</p>
                    </div>
                  </div>
                  <button className="text-green-400 text-sm">Connected</button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    connectWallet();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg font-medium flex items-center justify-center space-x-2"
                >
                  <FaWallet />
                  <span>Connect Wallet</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, icon, text }) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-800/50 hover:text-yellow-400 transition-colors group"
    >
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span>{text}</span>
    </Link>
  );
}

function MobileNavLink({ href, icon, text, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center space-x-4 p-4 text-xl rounded-lg hover:bg-gray-800 transition-colors"
    >
      <span className="text-2xl text-yellow-400">{icon}</span>
      <span>{text}</span>
    </Link>
  );
}