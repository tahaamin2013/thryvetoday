"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2",
            theme === "light" ? "border-black/[0.15]" : "border-white/[0.15]",
            theme === "light" ? "shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]" : "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            theme === "light"
              ? "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.2),transparent_70%)]"
              : "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function HeroGeometric({
  badge = "Training",
  title1 = "Quality Medical Training",
  title2 = "Welcome To Thryve",
}: {
  badge?: string
  title1?: string
  title2?: string
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  const { theme } = useTheme()

  return (
    <div
      className={cn(
        "relative mt-[60px] min-h-screen w-full flex items-center justify-center overflow-hidden",
        theme === "light" ? "bg-[#f0f0f0]" : "bg-[#030303]",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br blur-3xl",
          theme === "light"
            ? "from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]"
            : "from-indigo-500/[0.05] via-transparent to-rose-500/[0.05]",
        )}
      />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient={theme === "light" ? "from-indigo-500/[0.08]" : "from-indigo-500/[0.15]"}
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient={theme === "light" ? "from-rose-500/[0.08]" : "from-rose-500/[0.15]"}
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient={theme === "light" ? "from-violet-500/[0.08]" : "from-violet-500/[0.15]"}
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient={theme === "light" ? "from-amber-500/[0.08]" : "from-amber-500/[0.15]"}
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient={theme === "light" ? "from-cyan-500/[0.08]" : "from-cyan-500/[0.15]"}
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-1",
              theme === "light" ? "bg-black/[0.03] border-black/[0.08]" : "bg-white/[0.03] border-white/[0.08]",
            )}
          >
            <Image src="https://kokonutui.com/logo.svg" alt="Kokonut UI" width={20} height={20} />
            <span className={cn("text-sm tracking-wide", theme === "light" ? "text-black/60" : "text-white/60")}>
              {badge}
            </span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight">
            <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r",
                  theme === "light"
                    ? "from-indigo-600 via-black/90 to-rose-600"
                    : "from-indigo-300 via-white/90 to-rose-300",
                  pacifico.className,
                )}
              >
                {title2}
              </span><br />
              <span
                className={cn(
                  "bg-clip-text text-transparent",
                  theme === "light"
                    ? "bg-gradient-to-b from-black to-black/80"
                    : "bg-gradient-to-b from-white to-white/80",
                )}
              >
                {title1}
              </span>
              <br />
          
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p
              className={cn(
                "text-base sm:text-lg md:text-xl mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4",
                theme === "light" ? "text-black/40" : "text-white/40",
              )}
            >
              Transform Your Life with Quality Medical Training
            </p>
          </motion.div>
        </div>
      </div>

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t pointer-events-none",
          theme === "light"
            ? "from-[#f0f0f0] via-transparent to-[#f0f0f0]/80"
            : "from-[#030303] via-transparent to-[#030303]/80",
        )}
      />
    </div>
  )
}

