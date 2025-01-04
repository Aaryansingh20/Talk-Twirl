'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'
import Link from "next/link"
export function GridBackground() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
      <div className="relative z-10 container mx-auto px-4 py-32 min-h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Glowing effect for the title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 relative">
              Talk Twirl
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 opacity-30 blur-lg" />
            </span>
          </h1>

          {/* Subtitle with animated fade-in */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500  max-w-2xl mx-auto"
          >
            It&apos;s like WhatsApp, but not... You know what we mean.
          </motion.p>

          {/* Button group with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <Link href="./profile">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-6 text-lg transition-all hover:shadow-[0_0_40px_8px_rgba(37,99,235,0.3)] hover:scale-105"
              >
                <div className="relative z-10 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Start Chatting
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center text-gray-400 text-sm">
          <p className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Fully encrypted, just like the original
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
