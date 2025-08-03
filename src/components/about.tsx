"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import PortfolioProfilePicture from "../images/PortfolioProfilePicture.jpg"
import { Download, MapPin, Mail, User, Clock } from "lucide-react"

const About = () => {
  const [activeTab, setActiveTab] = useState("about")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  const tabContentVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
    exit: {
      opacity: 0,
      x: -30,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const,
      },
    },
  }

  const skills = [
    { category: "Languages", items: ["C++/C", "JavaScript", "TypeScript", "Python", "HTML/CSS"] },
    { category: "Tools & Technologies", items: ["Git/Github", "RESTful APIs", "Postman", "JSON", "JSX", "TSX"] },
    { category: "Frameworks & Libraries", items: ["Socket.io", "MongoDB", "React.js", "Express.js", "Node.js", "TailwindCSS", "BeautifulSoup", "JWT", "BCrypt", "Flask", "PRAW", "PyLucene"] },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science w/ Business Applications",
      school: "University of California - Riverside",
      year: "2021 - 2025",
      description: "Graduated from UCR's Marlan and Rosemarty Bourns College of Engineering with a focus in computer science with a focus in information systems and marketing."
    },
  ]

  const contactInfo = [
    { label: "Name", value: "Bao Huynh", icon: User },
    { label: "Email", value: "baohuynh888@gmail.com", icon: Mail },
    { label: "Location", value: "Los Angeles, CA", icon: MapPin },
    { label: "Availability", value: "Available for hire", icon: Clock, status: "available" },
  ]

  const tabs = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
  ]

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Resume.pdf"
    link.download = "Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <motion.div key="about" variants={tabContentVariants} initial="hidden" animate="visible" exit="exit">
            <motion.p
              className="text-base mb-6 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              I'm Bao Huynh, a recent graduate with a degree in Computer Science and Business Applications from the University of California - Riverside. 
              I am a software engineer based in Los Angeles, California looking for oppotunrities to enhance my tehnical skills through hands-on experience.
            </motion.p>
            <motion.p
              className="text-lg mb-6 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              My work spans across various mediums, including UX/UI design, web development, and Full Stack engineering.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <IconComponent size={18} className="text-blue-400 mt-1" />
                    <div className="flex flex-col">
                      <span className="text-gray-400 text-sm mb-1">{info.label}:</span>
                      <span className={`text-base ${info.status === "available" ? "text-green-400" : "text-gray-300"}`}>
                        {info.value}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>


            <motion.button
              onClick={handleDownloadResume}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 ease-out"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </motion.div>
        )

      case "skills":
        return (
          <motion.div
            key="skills"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              >
                <h4 className="text-lg font-semibold text-blue-400 mb-3">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + skillIndex * 0.05, duration: 0.4 }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )

      case "education":
        return (
          <motion.div
            key="education"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-6"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="border-l-2 border-blue-500 pl-6 pb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                whileHover={{ x: 5, transition: { duration: 0.3 } }}
              >
                <h4 className="text-xl font-semibold text-blue-400 mb-2">{edu.degree}</h4>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <span className="text-gray-300 font-medium">{edu.school}</span>
                  <span className="text-gray-400 text-sm">{edu.year}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <section id="about" className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-start "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src={PortfolioProfilePicture}
              alt="Bao Huynh"
              width={400}
              height={400}
              className="rounded-full shadow-lg mx-auto"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>

            {/* Tab Navigation */}
            <div className="flex space-x-8 mb-8">
              {tabs.map((tab) => (
                <div key={tab.id} className="relative">
                  <span
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-lg font-medium transition-colors duration-200 bg-transparent border-none outline-none cursor-pointer p-0 ${
                      activeTab === tab.id ? "text-blue-400" : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    {tab.label}
                  </span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-2 left-0 h-0.5 bg-blue-400"
                      style={{ width: "80%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">{renderTabContent()}</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About