// components/GamesShowcase.jsx
"use client";

import { motion } from "framer-motion";
import { FaCoins, FaFire, FaChartLine, FaDice, FaSpinner } from "react-icons/fa";
import { GiCardPickup, GiPokerHand, GiSloth, GiRollingDices } from "react-icons/gi";
import { RiLiveFill } from "react-icons/ri";

const games = [
  {
    id: 1,
    name: "DIAMOND SLOTS",
    description: "Spin for massive jackpots with 96.5% RTP",
    icon: <GiSloth className="text-4xl text-purple-400" />,
    color: "from-purple-500/10 to-indigo-500/10",
    border: "border-purple-400/30",
    stats: "42,690x max win",
    action: "SPIN NOW",
    trending: true
  },
  {
    id: 2,
    name: "DICE DEGEN",
    description: "Set your risk and multiply your bet",
    icon: <GiRollingDices className="text-4xl text-yellow-400" />,
    color: "from-yellow-500/10 to-amber-500/10",
    border: "border-yellow-400/30",
    stats: "98.3% RTP",
    action: "ROLL DICE",
    hot: true
  },
  {
    id: 3,
    name: "BLACKJACK 21",
    description: "Beat the dealer with crypto-fast hands",
    icon: <GiCardPickup className="text-4xl text-red-400" />,
    color: "from-red-500/10 to-pink-500/10",
    border: "border-red-400/30",
    stats: "0.5% house edge",
    action: "DEAL CARDS"
  },
  {
    id: 4,
    name: "TEXAS HOLDEM",
    description: "Play against degens worldwide",
    icon: <GiPokerHand className="text-4xl text-green-400" />,
    color: "from-green-500/10 to-emerald-500/10",
    border: "border-green-400/30",
    stats: "5% rakeback",
    action: "JOIN TABLE",
    new: true
  }
];

export default function GamesShowcase() {
  return (
    <section className="relative py-20 bg-[#0A0A0A] border-t border-gray-800/50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute text-gray-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${1 + Math.random() * 3}rem`
            }}
          >
            {['♠', '♥', '♦', '♣', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'][Math.floor(Math.random() * 10)]}
          </motion.div>
        ))}
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 mb-4"
          >
            <RiLiveFill className="text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-mono uppercase tracking-wider">
              LIVE GAMES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
              4 Ways To
            </span>{" "}
            <span className="text-white">Lose</span>{" "}
            <span className="text-yellow-400">(Or Win)</span>{" "}
            <span className="text-white">It All</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Provably fair games with instant crypto payouts. No BS, just{" "}
            <span className="text-yellow-400">degenerate gambling</span> at its finest.
          </motion.p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className={`relative rounded-xl overflow-hidden border ${game.border} bg-gradient-to-br ${game.color}`}
            >
              {/* Game badges */}
              <div className="absolute top-4 right-4 flex gap-2">
                {game.trending && (
                  <span className="flex items-center px-2 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold">
                    <FaFire className="mr-1" /> TRENDING
                  </span>
                )}
                {game.hot && (
                  <span className="flex items-center px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold">
                    <FaChartLine className="mr-1" /> HOT
                  </span>
                )}
                {game.new && (
                  <span className="flex items-center px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">
                    NEW
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-black/30 mb-4 mx-auto">
                  {game.icon}
                </div>

                <h3 className="text-2xl font-bold text-center mb-2">{game.name}</h3>
                <p className="text-gray-300 text-center mb-4">{game.description}</p>
                <p className="text-center text-sm font-mono text-yellow-400 mb-6">{game.stats}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 ${
                    game.id === 1 
                      ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
                      : game.id === 2
                      ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-black"
                      : game.id === 3
                      ? "bg-gradient-to-r from-red-500 to-pink-600 text-white"
                      : "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                  }`}
                >
                  <FaCoins /> {game.action}
                </motion.button>
              </div>

              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 20 + Math.random() * 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute text-white"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                      fontSize: `${3 + Math.random() * 5}rem`
                    }}
                  >
                    {game.id === 1 && "🎰"}
                    {game.id === 2 && "🎲"}
                    {game.id === 3 && "🃏"}
                    {game.id === 4 && "♠️"}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Wins Ticker (simplified) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-black/50 border border-gray-800 rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-yellow-400">
              <FaCoins className="mr-2" />
              <h3 className="font-bold">RECENT BIG WINS</h3>
            </div>
            <div className="text-xs text-gray-400 font-mono">
              LIVE UPDATES • ON-CHAIN VERIFIED
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              {[
                "0x3f...d4a2 won 12.42 ETH on DIAMOND SLOTS • ",
                "0x8b...7e1c won 5.67 ETH on DICE DEGEN • ",
                "0x1a...9f3d won 8.91 ETH on BLACKJACK 21 • ",
                "0x6c...2b8e won 3.14 ETH on TEXAS HOLDEM • "
              ].map((text, i) => (
                <span key={i} className="mx-8 inline-block text-gray-300">
                  {text}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}