"use client"

import { motion } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Instagram } from "lucide-react"
import type React from "react"

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    <span className="sr-only">{label}</span>
    {icon}
  </motion.a>
)

const SocialLinks: React.FC<{ className?: string }> = ({ className }) => {
  const socialLinks = [
    { href: "https://github.com/BaoHuynh888", icon: <GitHub size={24} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/bao-huynh-18a4362b0", icon: <Linkedin size={24} />, label: "LinkedIn" },
    { href: "https://www.instagram.com/_baowow._/", icon: <Instagram size={24} />, label: "Instagram" },
  ]

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((link) => (
        <SocialLink key={link.href} {...link} />
      ))}
    </div>
  )
}

export default SocialLinks
