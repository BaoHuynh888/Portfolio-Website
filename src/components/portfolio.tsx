"use client"

import { motion } from "framer-motion"
import { Code } from "lucide-react"
import KeyneticPhotoLight from "../images/KeyneticPhotoLight.png"
import TalkifyPhoto from "../images/TalkifyPhoto.png"
import AirbnbClonePhoto from "../images/AirbnbClonePhoto.png"
import RedditIconPhoto from "../images/RedditIconPhoto.png"
import PersonalPortfolioPhoto2023 from "../images/PersonalPortfolioPhoto2023.png"

const projects = [
  {
    id: 1,
    title: "Keynetic",
    description:
      "A prototype B2C e-commerce web app simulating a storefront for mechanical keyboards. Built to practice full-stack web development.",
    image: KeyneticPhotoLight,
    skills: ["JSX", "React.js", "Node.js", "Vite", "Vercel"],
    codeUrl: "https://github.com/BaoHuynh888/KeyneticWebsite",
  },
  {
    id: 2,
    title: "Talkify",
    description: 
      "A full-stack real-time chat app featuring user authentication and live messaging. Designed with modern security and scalable backend tools.",
    image: TalkifyPhoto,
    skills: ["TypeScript", "Socket.io", "MongoDB", "React.js", "REST", "JWT", "BCrypt"],
    codeUrl: "https://github.com/wikkiboi/talkify-app",
  },
  {
    id: 3,
    title: "Airbnb Clone",
    description:
      "A full-stack clone of Airbnb with property listings, bookings, and user authentication. Mimics core features of the original platform.",
    image: AirbnbClonePhoto,
    skills: ["JSX", "MongoDB", "React.js", "Tailwind CSS", "Express.js", "JWT"],
    codeUrl: "https://github.com/BaoHuynh888/Booking-App",
  },
  {
    id: 4,
    title: "Reddit Web Crawler",
    description:
      "A Python-based crawler that scrapes the r/ucr subreddit, collecting post and comment data for offline analysis and indexing.",
    image: RedditIconPhoto,
    skills: ["Python", "BeautifulSoup", "PRAW", "Flask", "PyLucene"],
    codeUrl: "https://github.com/Bao-Huynh888/CS172-Project",
  },
  {
    id: 5,
    title: "Personal Portfolio Website 2023",
    description: 
      "An early portfolio site built using HTML, CSS, and JavaScript to showcase projects and demonstrate frontend skills.",
    image: PersonalPortfolioPhoto2023,
    skills: ["HTML/CSS", "JavaScript"],
    codeUrl: "https://github.com/BaoHuynh888/Personal-Portfolio",
  },
  // {
  //   id: 5,
  //   title: "Sample",
  //   description: "Sample.",
  //   image: "/placeholder.svg?height=300&width=400",
  //   skills: ["Vue.js", "Nuxt.js", "SCSS"],
  // },
]

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 25,
        duration: 0.8,
      },
    },
  }

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
        >
          My Portfolio
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 0 45px 9px rgba(255, 255, 255, 0.15)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
              className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-400 ease-out relative cursor-pointer will-change-transform"
            >
              <div className="relative overflow-hidden">
                <motion.div whileHover={{ scale: 1.0 }} transition={{ duration: 0.6, ease: "easeOut" as const}}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-100"
                />
                </motion.div>
              </div>
              <div className="p-6 pb-16">
                <motion.h3
                  className="text-xl font-bold mb-3 text-blue-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 mb-4 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {project.description}
                </motion.p>

                {/* Skills */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {project.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full hover:bg-gray-600 transition-all duration-300 ease-out"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                      whileHover={{
                        scale: 1.00,
                        backgroundColor: "rgb(75, 85, 99)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className="border-t border-gray-700"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  style={{ originX: 0 }}
                />
              </div>
              

              {project.codeUrl && (
                <motion.a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.00,
                    backgroundColor: "rgb(75, 85, 99)",
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 1.00, transition: { duration: 0.1 } }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute bottom-3 left-3 flex items-center gap-2 bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out"
                >
                  <Code size={16} />
                  Code
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
