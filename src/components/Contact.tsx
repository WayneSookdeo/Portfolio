'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Send, CheckCircle2, Mail, Github, Linkedin, Phone } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'waynesookdeo@gmail.com',
    href: 'mailto:waynesookdeo@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'linkedin.com/in/nicholas-wayne-sookdeo',
    href: 'https://www.linkedin.com/in/nicholas-wayne-sookdeo/',
  },
  {
    icon: Phone,
    label: '082 457 9070 or Call 082 309 2750',
    href: 'https://wa.me/27824579070',
  },
]

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <motion.section
      id="contact"
      className="py-20 bg-zinc-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-zinc-100 mb-3">Get In Touch</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Open to new opportunities, collaborations, or just a chat about tech.
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact links */}
          <motion.div
            className="space-y-4"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-zinc-100 mb-6">
              Other ways to reach me
            </h3>
            {contactLinks.map(({ icon: Icon, label, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-zinc-800 border border-zinc-700 hover:border-blue-500/50 hover:bg-zinc-700 transition-all duration-200 group"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-700 group-hover:bg-blue-600/20 flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                  <Icon className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors duration-200" />
                </div>
                <span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors duration-200 truncate">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader className="pb-4">
                <CardTitle className="text-base font-semibold text-zinc-100">
                  Send a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {status === 'success' ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-10 gap-3 text-center"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                    <p className="text-zinc-100 font-medium">Message sent!</p>
                    <p className="text-zinc-400 text-sm">
                      Thanks for reaching out — I'll get back to you soon.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setStatus('idle')}
                      className="mt-2 border-zinc-600 text-zinc-300 hover:text-zinc-100"
                    >
                      Send another
                    </Button>
                  </motion.div>
                ) : (
                  /*
                   * Netlify Forms:
                   * - data-netlify="true" enables Netlify's form detection at build time.
                   * - The hidden input name="form-name" is required for AJAX submissions.
                   * - The bot-field input is a honeypot to block spam bots.
                   * Make sure you add a hidden <form> with the same name in your index.html
                   * so Netlify can detect it during the build (see Netlify Forms docs).
                   */
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Required hidden fields for Netlify Forms AJAX */}
                    <input type="hidden" name="form-name" value="contact" />

                    {/* Honeypot field — hidden from real users, traps bots */}
                    <div className="hidden" aria-hidden="true">
                      <label>
                        Don't fill this out if you're human:
                        <input name="bot-field" tabIndex={-1} autoComplete="off" />
                      </label>
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-1.5 text-xs font-medium text-zinc-400"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="bg-zinc-700 border-zinc-600 text-zinc-100 placeholder:text-zinc-500 focus:border-blue-500 focus:ring-blue-500/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-1.5 text-xs font-medium text-zinc-400"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="bg-zinc-700 border-zinc-600 text-zinc-100 placeholder:text-zinc-500 focus:border-blue-500 focus:ring-blue-500/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-1.5 text-xs font-medium text-zinc-400"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="What's on your mind?"
                        className="bg-zinc-700 border-zinc-600 text-zinc-100 placeholder:text-zinc-500 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-red-400">
                        Something went wrong. Please try again or email me directly.
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white gap-2 disabled:opacity-60"
                    >
                      {status === 'submitting' ? (
                        <>Sending…</>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact