// components/Footer.jsx
import Link from "next/link";
import { FaTwitter, FaDiscord, FaTelegram, FaGithub, FaReddit, FaMedium } from "react-icons/fa";
import { SiBitcoin, SiEthereum, SiSolana, SiDogecoin } from "react-icons/si";
import { RiCopperCoinFill } from "react-icons/ri";

export default function Footer() {

  return (
    <footer className="bg-[#0A0A0A] border-t border-gray-800/50 pt-12 pb-6">
      {/* Glowing top accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-yellow-500/70 to-transparent mb-12 mx-auto w-3/4 opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
                SONNY<span className="text-yellow-400">BET</span>
              </span>
              <span className="ml-2 px-2 py-0.5 text-xs font-mono bg-yellow-400/20 text-yellow-400 rounded-md border border-yellow-400/30">
                v2.0
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              The craziest crypto betting experience on the blockchain. 
              Provably fair, instant payouts, and maximum degeneracy.
            </p>
            
            {/* Crypto Accepted */}
            <div className="pt-4">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Accepted Crypto</p>
              <div className="flex space-x-3">
                <SiBitcoin className="text-orange-500 text-xl" />
                <SiEthereum className="text-purple-400 text-xl" />
                <SiSolana className="text-green-400 text-xl" />
                <SiDogecoin className="text-yellow-300 text-xl" />
                <RiCopperCoinFill className="text-red-400 text-xl" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-yellow-400 font-bold uppercase text-sm tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/faq" text="FAQ" />
              <FooterLink href="/provably-fair" text="Provably Fair" />
              <FooterLink href="/leaderboard" text="High Rollers" />
              <FooterLink href="/bonuses" text="Bonuses & VIP" />
              <FooterLink href="/api" text="Developer API" />
            </ul>
          </div>

          {/* Games */}
          <div className="space-y-4">
            <h3 className="text-yellow-400 font-bold uppercase text-sm tracking-wider">Games</h3>
            <ul className="space-y-3">
              <FooterLink href="/slots" text="💎 Diamond Slots" />
              <FooterLink href="/dice" text="🎲 High Stakes Dice" />
              <FooterLink href="/cards" text="🃏 Blackjack 21" />
              <FooterLink href="/poker" text="♠️ Texas Hold'em" />
              <FooterLink href="/live" text="🔥 Live Betting" />
            </ul>
          </div>

          {/* Stats & Social */}
          <div className="space-y-6">

            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-yellow-400 font-bold uppercase text-sm tracking-wider">Join The Degens</p>
              <div className="flex space-x-4">
                <SocialLink href="https://twitter.com" icon={<FaTwitter className="text-blue-400" />} />
                <SocialLink href="https://discord.com" icon={<FaDiscord className="text-purple-400" />} />
                <SocialLink href="https://t.me" icon={<FaTelegram className="text-blue-500" />} />
                <SocialLink href="https://reddit.com" icon={<FaReddit className="text-orange-500" />} />
                <SocialLink href="https://medium.com" icon={<FaMedium className="text-gray-300" />} />
                <SocialLink href="https://github.com" icon={<FaGithub className="text-gray-300" />} />
              </div>
            </div>

            {/* Crazy CTA */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-red-500/10 p-4 rounded-lg border border-yellow-400/20">
              <p className="text-yellow-400 text-sm font-bold mb-2">READY TO DEGEN?</p>
              <button className="w-full py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-md font-bold text-black hover:shadow-lg hover:shadow-yellow-500/30 transition-all">
                DEPOSIT NOW 🚀
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
            <Link href="/terms" className="hover:text-yellow-400 transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy</Link>
            <Link href="/responsible" className="hover:text-yellow-400 transition-colors">Responsible Gambling</Link>
            <Link href="/aml" className="hover:text-yellow-400 transition-colors">AML Policy</Link>
            <Link href="/kyc" className="hover:text-yellow-400 transition-colors">KYC</Link>
          </div>
          
          <div className="mt-4 md:mt-0 text-xs text-gray-600">
            © {new Date().getFullYear()} SonnyBet. All rights reserved. Not financial advice.
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, text }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center">
        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
        {text}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-2xl hover:scale-110 transition-transform hover:drop-shadow-glow"
    >
      {icon}
    </Link>
  );
}