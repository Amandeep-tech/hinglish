"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Code2, Rocket, Zap, BookOpen, CheckCircle2, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function LandingPage() {
  

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300 } },
  }

  const floatingAnimation = {
    y: [0, -10],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  }

  

  const bounceAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
    },
  }

  const shakeAnimation = {
    x: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 0.5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop" as const,
      repeatDelay: 2,
    },
  }

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Floating elements */}
      {/* {isLoaded && (
        <>
          <motion.div
            className="fixed w-20 h-20 rounded-full bg-purple-500/10 z-0"
            animate={{
              x: mousePosition.x - 50,
              y: mousePosition.y - 50,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <motion.div
            className="fixed top-20 left-20 w-32 h-32 rounded-full bg-yellow-300/10 z-0"
            animate={floatingAnimation}
          />
          <motion.div
            className="fixed bottom-20 right-20 w-40 h-40 rounded-full bg-pink-300/10 z-0"
            animate={spinAnimation}
          />
          <motion.div
            className="fixed top-1/3 right-1/4 w-24 h-24 rounded-full bg-green-300/10 z-0"
            animate={bounceAnimation}
          />
        </>
      )} */}

      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Code2 className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold">FrontendWale</span>
          </motion.div>
          <motion.nav
            className="hidden md:flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="#features"
              className="text-sm font-medium hover:text-purple-500 transition-colors relative group"
            >
              Features
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </Link>
            <Link href="#topics" className="text-sm font-medium hover:text-purple-500 transition-colors relative group">
              Topics
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-purple-500 transition-colors relative group"
            >
              Testimonials
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-purple-500 transition-colors relative group"
            >
              Pricing
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </Link>
          </motion.nav>
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button variant="outline" className="hidden sm:flex">
                Login
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-background relative overflow-hidden">
          {/* Subtle background gradient */}
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-20 dark:bg-purple-900"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.25, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  Frontend Seekho, Masti Mein!
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  React aur JS ko <span className="text-purple-600">Hinglish mein</span> samjho!
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Boring tutorials se pareshan? Humari meme-style teaching se frontend concepts ko mazedaar tarike se
                  seekho. Ekdum bindaas!
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      Abhi Start Karo
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button size="lg" variant="outline">
                      Free Demo Dekho
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/placeholder.svg?height=450&width=450"
                    alt="Frontend learning illustration"
                    fill
                    className="object-contain"
                    priority
                  />
                  <motion.div
                    className="absolute -top-5 -right-5 w-16 h-16 text-purple-500"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Code2 className="w-full h-full" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-24 lg:py-32 relative">
          <motion.div
            className="absolute top-1/3 right-10 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-20 dark:bg-yellow-900"
            animate={{
              y: [0, 50, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-2">
                <motion.div
                  className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Features
                </motion.div>
                <motion.h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Kya khaas hai humare paas?
                </motion.h2>
                <motion.p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Humari teaching style ekdum hatke hai. Yahan coding seekhna boring nahi, masti bhara experience hai!
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm"
                variants={item}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  borderColor: "#9333ea",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30"
                  whileHover={{ rotate: 5 }}
                  animate={shakeAnimation}
                >
                  <Zap className="h-6 w-6 text-purple-600" />
                </motion.div>
                <h3 className="text-xl font-bold">Hinglish Explanations</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {`Complex concepts ko simple Hinglish mein samjhaye gaye hain. No more "What is this even saying?"`}
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm"
                variants={item}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  borderColor: "#9333ea",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30"
                  whileHover={{ rotate: 5 }}
                  animate={bounceAnimation}
                >
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </motion.div>
                <h3 className="text-xl font-bold">Meme-Style Learning</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Boring theory nahi, memes ke through concepts ko yaad rakho. Hasi ke saath knowledge pakka!
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm"
                variants={item}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  borderColor: "#9333ea",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30"
                  whileHover={{ rotate: 5 }}
                  animate={floatingAnimation}
                >
                  <Rocket className="h-6 w-6 text-purple-600" />
                </motion.div>
                <h3 className="text-xl font-bold">Practical Projects</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Theory ke saath hands-on projects. Build karo real apps aur portfolio mein add karo!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Topics Section */}
        <section id="topics" className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
          <motion.div
            className="absolute -top-20 -left-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20 dark:bg-purple-900"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <div className="container px-4 md:px-6 relative">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-2">
                <motion.div
                  className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Topics
                </motion.div>
                <motion.h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Kya-kya seekhoge?
                </motion.h2>
                <motion.p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Frontend development ke sabhi important topics ko cover karte hain, wo bhi mazedaar tarike se!
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                {
                  icon: "JS",
                  title: "JavaScript Fundamentals",
                  desc: '"Ye JavaScript kya cheez hai?" se lekar advanced concepts tak, sab kuch simple language mein.',
                },
                {
                  icon: "⚛️",
                  title: "React Mastery",
                  desc: "React ke components, hooks, aur state management ko samjho jaise koi dost samjha raha ho.",
                },
                {
                  icon: "🎨",
                  title: "CSS & Tailwind",
                  desc: '"CSS ka bhoot" se darna band karo. Humari simple tricks se styling master karo.',
                },
                {
                  icon: "N",
                  title: "Next.js",
                  desc: '"Next level React" - Server components, routing, aur deployment ko ekdum simple tarike se samjho.',
                },
                {
                  icon: "🧪",
                  title: "Testing",
                  desc: '"Testing kya hota hai?" se lekar automated testing tak, sab kuch step-by-step.',
                },
                {
                  icon: "🚀",
                  title: "Performance",
                  desc: '"Meri website itni slow kyun hai?" - Performance optimization ke sare tips and tricks.',
                },
              ].map((topic, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col space-y-3 rounded-lg border p-6 bg-white dark:bg-gray-800"
                  variants={item}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    borderColor: "#9333ea",
                    y: -5,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30"
                      whileHover={{ rotate: 10 }}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                        rotate: {
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          repeatDelay: 1,
                        },
                      }}
                    >
                      <span className="font-bold text-purple-600">{topic.icon}</span>
                    </motion.div>
                    <h3 className="font-bold">{topic.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{topic.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-24 lg:py-32 relative">
          <motion.div
            className="absolute bottom-1/3 left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-20 dark:bg-green-900"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-2">
                <motion.div
                  className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Testimonials
                </motion.div>
                <motion.h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Log kya kehte hain?
                </motion.h2>
                <motion.p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Humare students ne kya experience kiya, unki zubaani suniye!
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm"
                variants={item}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  borderColor: "#9333ea",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Rahul's profile"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </motion.div>
                  <div>
                    <h3 className="font-bold">Rahul Sharma</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer</p>
                  </div>
                </div>
                <motion.p
                  className="text-gray-500 dark:text-gray-400"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                >
                  {`6 mahine pehle mujhe React ka 'R' bhi nahi aata tha. Ab main ek startup mein React developer hoon.
                  Sab credit FrontendWale ko jata hai. Mast teaching style hai!`}
                </motion.p>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm"
                variants={item}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  borderColor: "#9333ea",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Priya's profile"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </motion.div>
                  <div>
                    <h3 className="font-bold">Priya Patel</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">UI Developer</p>
                  </div>
                </div>
                <motion.p
                  className="text-gray-500 dark:text-gray-400"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                >
                  {`"Maine bahut sare courses try kiye, par concepts clear nahi hue. FrontendWale ki Hinglish teaching ne
                  game change kar diya. Ab JavaScript mere liye piece of cake hai!"`}
                </motion.p>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm"
                variants={item}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  borderColor: "#9333ea",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Amit's profile"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </motion.div>
                  <div>
                    <h3 className="font-bold">Amit Kumar</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">College Student</p>
                  </div>
                </div>
                <motion.p
                  className="text-gray-500 dark:text-gray-400"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                >
                  {`"College mein jo nahi sikhaya, wo maine yahan se seekha. Meme-style teaching se concepts dimag mein
                  baith jate hain. First job interview mein hi select ho gaya!"`}
                </motion.p>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4 rounded-lg border p-6 shadow-sm"
                variants={item}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  borderColor: "#9333ea",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Neha's profile"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </motion.div>
                  <div>
                    <h3 className="font-bold">Neha Gupta</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Career Switcher</p>
                  </div>
                </div>
                <motion.p
                  className="text-gray-500 dark:text-gray-400"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1 }}
                >
                  {`"Non-tech background se aai thi. Dar lag raha tha ki coding seekh paungi ya nahi. FrontendWale ki
                  teaching itni simple hai ki ab main full-fledged web apps bana leti hoon!"`}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
          <motion.div
            className="absolute top-1/4 right-1/4 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-20 dark:bg-blue-900"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <div className="container px-4 md:px-6 relative">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-2">
                <motion.div
                  className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Pricing
                </motion.div>
                <motion.h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Kitna lagega?
                </motion.h2>
                <motion.p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Affordable plans jo aapke budget mein fit ho. No hidden charges!
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="flex flex-col rounded-lg border bg-background p-6 shadow-sm"
                variants={item}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  borderColor: "#9333ea",
                  y: -5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="space-y-2">
                  <h3 className="font-bold">Beginner</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Frontend journey shuru karne ke liye perfect plan
                  </p>
                </div>
                <motion.div
                  className="mt-4 flex items-baseline"
                  animate={{
                    scale: [1, 1.05, 1],
                    color: ["#9333ea", "#ec4899", "#9333ea"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <span className="text-3xl font-bold">₹999</span>
                  <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">/month</span>
                </motion.div>
                <ul className="mt-4 space-y-2 text-sm">
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>HTML, CSS, & Basic JavaScript</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>5 Practice Projects</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Community Access</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center text-gray-500"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4 text-gray-300" />
                    <span>1-on-1 Mentorship</span>
                  </motion.li>
                </ul>
                <motion.div className="mt-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative"
                variants={item}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  borderColor: "#9333ea",
                  y: -10,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                animate={{
                  y: [0, -10],
                  boxShadow: [
                    "0 4px 6px rgba(0, 0, 0, 0.1)",
                    "0 15px 25px rgba(0, 0, 0, 0.2)"
                  ],
                }}
              >
                <motion.div
                  className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-purple-600 px-3 py-1 text-xs font-medium text-white"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 0 rgba(147, 51, 234, 0)",
                      "0 0 10px rgba(147, 51, 234, 0.5)",
                      "0 0 0 rgba(147, 51, 234, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  Popular
                </motion.div>
                <div className="space-y-2">
                  <h3 className="font-bold">Pro</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Job-ready skills ke liye complete package</p>
                </div>
                <motion.div
                  className="mt-4 flex items-baseline"
                  animate={{
                    scale: [1, 1.05, 1],
                    color: ["#9333ea", "#ec4899", "#9333ea"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <span className="text-3xl font-bold">₹1,999</span>
                  <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">/month</span>
                </motion.div>
                <ul className="mt-4 space-y-2 text-sm">
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Everything in Beginner</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>React & Next.js Complete</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>15 Advanced Projects</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Weekly Group Mentorship</span>
                  </motion.li>
                </ul>
                <motion.div className="mt-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 relative overflow-hidden group">
                    <span className="relative z-10">Get Started</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 z-0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex flex-col rounded-lg border bg-background p-6 shadow-sm"
                variants={item}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  borderColor: "#9333ea",
                  y: -5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="space-y-2">
                  <h3 className="font-bold">Expert</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Senior developer banne ka complete package</p>
                </div>
                <motion.div
                  className="mt-4 flex items-baseline"
                  animate={{
                    scale: [1, 1.05, 1],
                    color: ["#9333ea", "#ec4899", "#9333ea"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <span className="text-3xl font-bold">₹3,999</span>
                  <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">/month</span>
                </motion.div>
                <ul className="mt-4 space-y-2 text-sm">
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Everything in Pro</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Advanced State Management</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>Testing & Performance Optimization</span>
                  </motion.li>
                  <motion.li
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    <span>1-on-1 Weekly Mentorship</span>
                  </motion.li>
                </ul>
                <motion.div className="mt-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <motion.div
            className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20 dark:bg-purple-900"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <div className="container px-4 md:px-6 relative">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-2">
                <motion.h2
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  animate={{
                    color: ["#000", "#9333ea", "#000"],
                    textShadow: [
                      "0 0 0px rgba(147, 51, 234, 0)",
                      "0 0 5px rgba(147, 51, 234, 0.3)",
                      "0 0 0px rgba(147, 51, 234, 0)",
                    ],
                  }}
                >
                  Ready to become a Frontend Ninja?
                </motion.h2>
                <motion.p
                  className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {`Boring tutorials ko bye-bye kaho aur join karo India's most fun frontend learning platform!`}
                </motion.p>
              </div>
              <motion.div
                className="flex flex-col gap-2 min-[400px]:flex-row"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -5, 0],
                    boxShadow: [
                      "0 0 0 rgba(147, 51, 234, 0)",
                      "0 5px 15px rgba(147, 51, 234, 0.4)",
                      "0 0 0 rgba(147, 51, 234, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 relative overflow-hidden group">
                    <span className="relative z-10">Abhi Join Karo</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 z-0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="absolute -right-1 -top-1 w-6 h-6 text-yellow-300"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Sparkles className="w-full h-full" />
                    </motion.span>
                  </Button>
                </motion.div>
                <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline">
                    Free Demo Dekho
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-50 dark:bg-gray-900">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6 md:flex-row md:justify-between">
          <motion.div
            className="flex flex-col gap-6 md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div animate={shakeAnimation}>
                <Code2 className="h-6 w-6 text-purple-500" />
              </motion.div>
              <span className="text-xl font-bold">FrontendWale</span>
            </motion.div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {`Frontend development ko Hinglish mein sikhane wala India's #1 platform. Boring tutorials se aazadi paiye!`}
            </p>
            <div className="flex gap-4">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social, index) => (
                <motion.div
                  key={social}
                  whileHover={{ y: -5, color: "#9333ea" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      {index === 0 && (
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      )}
                      {index === 1 && (
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      )}
                      {index === 2 && (
                        <>
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </>
                      )}
                    </svg>
                    <span className="sr-only">{social}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 md:flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { title: "Courses", links: ["HTML & CSS", "JavaScript", "React", "Next.js"] },
              { title: "Resources", links: ["Blog", "Cheatsheets", "Projects", "Community"] },
              { title: "Company", links: ["About Us", "Careers", "Press", "Contact"] },
              { title: "Legal", links: ["Terms", "Privacy", "Cookies", "Licenses"] },
            ].map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * sectionIndex }}
              >
                <h3 className="font-semibold">{section.title}</h3>
                <ul className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
                  {section.links.map((link) => (
                    <motion.li
                      key={link}
                      whileHover={{ x: 5, color: "#9333ea" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link href="#" className="hover:text-purple-600 dark:hover:text-purple-500">
                        {link}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-center gap-2 px-4 md:px-6 md:flex-row md:justify-between">
            <motion.p
              className="text-xs text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              &copy; {new Date().getFullYear()} FrontendWale. All rights reserved.
            </motion.p>
            <motion.p
              className="text-xs text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.1, color: "#9333ea" }}
            >
              {"Made with ❤️ by Amandeep :)"}
            </motion.p>
          </div>
        </div>
      </footer>
    </div>
  )
}
