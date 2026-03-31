'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon, Download, ArrowUpRight, MapPin } from 'lucide-react'

const STACK = ['React', 'C#', 'Blazor', 'TypeScript', 'SQL', 'AWS']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

// ── Particle constellation canvas ──────────────────────────────────────────
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0, h = 0, raf = 0
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    window.addEventListener('mousemove', onMove)

    // Particle count scales with screen size
    const COUNT = Math.floor((w * h) / 14000)

    type Particle = {
      x: number; y: number
      vx: number; vy: number
      r: number; base: number
      opacity: number
    }

    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.5 + 0.6,
      base: Math.random() * 1.5 + 0.6,
      opacity: Math.random() * 0.5 + 0.2,
    }))

    const MAX_DIST = 120      // line draw distance
    const MOUSE_DIST = 140    // mouse repel distance
    const REPEL = 0.018       // repel strength

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      // Update + draw particles
      for (const p of particles) {
        // Mouse repel
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < MOUSE_DIST && d > 0) {
          const force = (MOUSE_DIST - d) / MOUSE_DIST
          p.vx += (dx / d) * force * REPEL
          p.vy += (dy / d) * force * REPEL
        }

        // Dampen velocity
        p.vx *= 0.995
        p.vy *= 0.995

        p.x += p.vx
        p.y += p.vy

        // Wrap edges
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        // Draw dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(148, 163, 184, ${p.opacity})`   // slate-400
        ctx.fill()
      }

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.12
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`   // indigo
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Mouse-to-nearby-particle lines (stronger glow)
      for (const p of particles) {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_DIST) {
          const alpha = (1 - dist / MOUSE_DIST) * 0.35
          ctx.beginPath()
          ctx.moveTo(mouse.x, mouse.y)
          ctx.lineTo(p.x, p.y)
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`    // sky-400
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 w-full h-full"
    />
  )
}

// ── Hero ────────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center bg-zinc-950 overflow-hidden">

      {/* Particle constellation */}
      <ParticleCanvas />

      {/* Soft vignette so edges fade dark — keeps text readable */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(9,9,11,0.85) 100%)',
        }}
      />

      {/* Very faint top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 py-20">

        {/* Meta row */}
        <motion.div {...fadeUp(0.05)} className="flex items-center gap-5 mb-10">
          <div className="flex items-center gap-1.5 text-zinc-600 text-xs font-mono">
            <MapPin className="w-3 h-3" />
            Durban, South Africa
          </div>
          <span className="w-px h-3 bg-zinc-800" />
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span className="text-xs text-emerald-500 font-mono">Open to work</span>
          </div>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-black leading-[0.92] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(3rem, 8.5vw, 7rem)' }}
          >
            <span className="block text-zinc-100">Nicholas</span>
            <span className="block text-zinc-100">Wayne&nbsp;
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(110deg, #38bdf8 0%, #818cf8 55%, #a78bfa 100%)',
                }}
              >
                Sookdeo
              </span>
            </span>
          </motion.h1>
        </div>

        {/* Rule + role */}
        <motion.div {...fadeUp(0.35)} className="flex items-center gap-5 mb-6">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.55, delay: 0.38, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
            className="h-px w-12 bg-blue-500/70"
          />
          <p className="text-zinc-400 text-base sm:text-lg font-light tracking-wide">
            Full-Stack Software Developer
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.44)}
          className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-md mb-9"
        >
          Building polished, end-to-end digital products with a strong eye for clean
          code and seamless user experiences. AWS certified. Two years of commercial experience.
        </motion.p>

        {/* Stack chips */}
        <motion.div {...fadeUp(0.52)} className="flex flex-wrap gap-2 mb-10">
          {STACK.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.56 + i * 0.05, duration: 0.3 }}
              className="text-[11px] font-mono font-medium px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/70 text-zinc-500 hover:text-sky-400 hover:border-sky-500/40 transition-colors duration-200 cursor-default backdrop-blur-sm"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.65)} className="flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_28px_rgba(99,102,241,0.45)]"
            style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)' }}
          >
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
            Get in touch
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="/Nicholas_Wayne_Sookdeo_CV.pdf"
            download="Nicholas_Wayne_Sookdeo_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 hover:border-zinc-600 text-zinc-400 hover:text-zinc-200 text-sm font-medium transition-all duration-200 backdrop-blur-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Download CV
          </a>

          <div className="h-8 w-px bg-zinc-800 mx-1 hidden sm:block" />

          {[
            { href: 'https://github.com/WayneSookdeo', label: 'GitHub', icon: <GithubIcon className="w-[18px] h-[18px]" /> },
            { href: 'https://www.linkedin.com/in/nicholas-wayne-sookdeo/', label: 'LinkedIn', icon: <LinkedinIcon className="w-[18px] h-[18px]" /> },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-500 hover:text-zinc-200 hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-200 backdrop-blur-sm"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.7 }}
      >
        <motion.div className="w-px h-12 rounded-full overflow-hidden bg-zinc-800">
          <motion.div
            className="w-full h-1/2 bg-gradient-to-b from-sky-400 to-transparent rounded-full"
            animate={{ y: ['0%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom-right editorial index */}
      <motion.p
        className="absolute bottom-8 right-6 sm:right-12 text-[10px] font-mono text-zinc-800 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        01 / intro
      </motion.p>

    </section>
  )
}