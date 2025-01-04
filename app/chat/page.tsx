'use client'

import { MessageSquare, Users, Lock, Zap } from 'lucide-react'
import { motion } from "framer-motion"
import SearchComponent from "./_components/search"
import { WorldMap } from "@/components/ui/worldmap";

export default function ChatHomeScreen() {
  const features = [
    { icon: MessageSquare, text: "Encrypted messaging" },
    { icon: Users, text: "Group video calls" },
    { icon: Lock, text: "Privacy focused" },
    { icon: Zap, text: "Lightning fast" },
  ]

  return (
    <div className="flex flex-col h-screen bg-black text-white p-4 md:p-8 overflow-auto relative">
      {/* WorldMap as the background */}
      <WorldMap
        dots={[
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col justify-center items-center z-10 relative"
      >
        <div className="w-full max-w-4xl space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 relative">
              Talk Twirl
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 opacity-30 blur-lg" />
            </span>
          </h1>
          <p className="text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center max-w-2xl mx-auto">
            Where your squad stays connected. No aunties allowed.
          </p>
          <div className='flex justify-center'>
            <SearchComponent onSidebar={false} />
          </div>
        </div>
      </motion.div>
      
      {/* Feature List */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 z-10 relative"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center space-y-2 p-4 bg-gray-900 rounded-lg"
          >
            <feature.icon className="w-8 h-8 text-[#2563eb]" />
            <p className="text-center text-sm">{feature.text}</p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm z-10 relative">
        © 2024 Talk Twirl. Stay cool, stay connected.
      </footer>
    </div>
  )
}
