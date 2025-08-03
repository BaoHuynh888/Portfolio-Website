"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  }

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: -15,
      x: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn" as const,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.6,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 120,
        damping: 25,
      },
    }),
  }

  const mobileToggleVariants = {
    hidden: { opacity: 0, rotate: -90, scale: 0.8 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <motion.header
      className="fixed w-full bg-[#0d0d0d] bg-opacity-90 backdrop-blur-sm z-50 border-gray-800"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      }}
    >
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.05,
            color: "#7c7c7cff",
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          className="text-2xl font-bold text-white cursor-pointer transition-colors duration-300"
        >
          {/* Bao Huynh */}
        </motion.h1>

        <nav className="hidden md:flex space-x-8">
          {["Home", "Portfolio", "About", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              custom={index}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.1,
                y: -1,
                color: "#7c7c7cff",
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
              className="text-gray-400 hover:text-gray transition-colors transition-all duration-200 ease-out relative will-change-transform"
            >
              {item}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-blue-400"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </motion.a>
          ))}
        </nav>

        <motion.div className="md:hidden" variants={mobileToggleVariants} initial="hidden" animate="visible">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white transition-colors duration-300"
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.1 },
            }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <X />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Menu />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-black border-t border-gray-800 backdrop-blur-sm"
          >
            <nav className="flex flex-col items-center py-6 space-y-4">
              {["Home", "Portfolio", "About", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  variants={menuItemVariants}
                  className="text-gray-300 hover:text-blue-400 py-2 text-lg transition-all duration-300 ease-out relative"
                  onClick={() => setIsOpen(false)}
                  whileHover={{
                    scale: 1.05,
                    x: 5,
                    color: "#60a5fa",
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1 },
                  }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-1/2 h-0.5 bg-blue-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ originX: 0.5, width: "80%" }}
                  />
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
