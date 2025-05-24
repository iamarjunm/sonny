// components/Hero.jsx
"use client";

import { useEffect, useState } from 'react';
import { FaCoins, FaBolt, FaWallet, FaChevronDown } from 'react-icons/fa';
import { SiEthereum, SiSolana, SiBitcoin } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [showCoins, setShowCoins] = useState(false);

  useEffect(() => {
    setShowCoins(true);
    return () => setShowCoins(false);
  }, []);

  const connectWallet = () => {
    setWalletConnected(true);
    setTimeout(() => setWalletConnected(false), 3000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0E0E0E] to-[#1A1A2E] border-b border-yellow-400/20">
      {/* Floating crypto coins */}
      <AnimatePresence>
        {showCoins && (
          <>
            <motion.div
              initial={{ y: -100, x: -50, opacity: 0, rotate: -45 }}
              animate={{ y: 100, x: "20vw", opacity: [0, 0.6, 0], rotate: 45 }}
              transition={{ duration: 8, repeat: Infinity, delay: 0 }}
              className="absolute text-yellow-400 text-4xl"
            >
              <SiBitcoin />
            </motion.div>
            <motion.div
              initial={{ y: -80, x: "80vw", opacity: 0, rotate: 20 }}
              animate={{ y: "60vh", x: "60vw", opacity: [0, 0.4, 0], rotate: -20 }}
              transition={{ duration: 10, repeat: Infinity, delay: 2 }}
              className="absolute text-purple-400 text-3xl"
            >
              <SiEthereum />
            </motion.div>
            <motion.div
              initial={{ y: -120, x: "40vw", opacity: 0, rotate: 10 }}
              animate={{ y: "70vh", x: "10vw", opacity: [0, 0.5, 0], rotate: 30 }}
              transition={{ duration: 12, repeat: Infinity, delay: 1 }}
              className="absolute text-green-400 text-2xl"
            >
              <SiSolana />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Animated Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 mb-6">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>
                <span className="text-yellow-400 text-sm font-mono uppercase tracking-wider">
                  <TypeAnimation
                    sequence={[
                      'Provably Fair',
                      2000,
                      'Instant Payouts',
                      2000,
                      '100% On-Chain',
                      2000,
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                  />
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
                  Bet Like A <span className="underline decoration-yellow-400">Degen</span>
                </span>
                <br />
                <span className="text-white">Win Like A</span>{' '}
                <span className="text-yellow-400">Whale</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
                The craziest crypto gambling experience with{' '}
                <span className="text-yellow-400 font-semibold">4 insane games</span>, instant payouts,
                and <span className="text-purple-400 font-semibold">provable fairness</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={connectWallet}
                  className={`flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold transition-all ${
                    walletConnected
                      ? 'bg-green-500/10 text-green-400 border border-green-400/30'
                      : 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-600 text-black hover:shadow-lg hover:shadow-yellow-500/30'
                  }`}
                >
                  <FaWallet className="text-lg" />
                  {walletConnected ? 'Wallet Connected!' : 'Connect Wallet'}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold bg-transparent border-2 border-yellow-400/50 hover:border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 transition-all"
                >
                  <FaCoins />
                  Play Now
                </motion.button>
              </div>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="mr-2">⚡</span>
                  <span>No KYC Required</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="mr-2">🔒</span>
                  <span>Non-Custodial</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="mr-2">🎰</span>
                  <span>4 Crazy Games</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Animated Game Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/30 to-purple-500/30 rounded-2xl blur-lg opacity-50"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
              <div className="bg-gray-900 p-4 border-b border-gray-800 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-xs font-mono text-gray-400">
                  slot_machine.min.js
                </div>
              </div>
              <div className="p-6">
                <div className="bg-black rounded-lg border border-yellow-400/20 p-4">
                  {/* Slot machine animation placeholder */}
                  <div className="flex justify-between mb-4">
                    {['🍒', '7️⃣', '💰'].map((item, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          y: [0, -10, 0],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          delay: i * 0.3
                        }}
                        className="text-5xl"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                  <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent my-2"></div>
                  <div className="text-center text-yellow-400 font-mono text-sm mb-2">
                    NEXT JACKPOT: 3.42 ETH
                  </div>
                  <button className="w-full py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded text-black font-bold flex items-center justify-center gap-2">
                    <FaBolt /> SPIN NOW (0.01 ETH)
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <FaChevronDown className="text-yellow-400 text-xl opacity-70" />
        </motion.div>
      </div>
    </section>
  );
}