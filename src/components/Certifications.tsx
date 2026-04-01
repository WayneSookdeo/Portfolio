'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, FileText, Award, X, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    year: '2026',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
    borderAccent: 'hover:border-amber-500/40',
    badgeColor: 'bg-amber-500/10 text-amber-400',
    /*
     * Place your cert PDF in /public/certs/ and update the filename below.
     * e.g. /public/certs/aws-cloud-practitioner.pdf
     */
    pdfPath: '/certs/aws-cloud-practitioner.pdf',
    fileName: 'AWS_Cloud_Practitioner_Essentials.pdf',
  },
  {
    title: 'Data Engineering on AWS – Foundations',
    issuer: 'Amazon Web Services',
    year: '2026',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    borderAccent: 'hover:border-blue-500/40',
    badgeColor: 'bg-blue-500/10 text-blue-400',
    /*
     * Place your cert PDF in /public/certs/ and update the filename below.
     * e.g. /public/certs/aws-data-engineering.pdf
     */
    pdfPath: '/certs/aws-data-engineering.pdf',
    fileName: 'AWS_Data_Engineering_Foundations.pdf',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

type PdfView = { title: string; pdfPath: string; fileName: string }

const Certifications = () => {
  const [viewingPdf, setViewingPdf] = useState<PdfView | null>(null)

  return (
    <>
      <motion.section
        id="certifications"
        className="py-20 bg-zinc-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          {/* Section heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-zinc-100 mb-3">
              Certifications & CV
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm">
              AWS certified in Cloud and Data Engineering, with a full-stack background
              spanning frontend, backend, and database development.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Certifications */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                <Award className="w-3.5 h-3.5" />
                AWS Certifications
              </p>

              <motion.div
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {certifications.map((cert, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card
                      className={`bg-zinc-800 border-zinc-700 transition-colors duration-200 ${cert.borderAccent}`}
                    >
                      <CardContent className="p-4 flex items-center gap-4">
                        {/* Icon */}
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${cert.iconBg}`}
                        >
                          <Award className={`w-5 h-5 ${cert.iconColor}`} />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-zinc-100 leading-snug">
                            {cert.title}
                          </p>
                          <div className="flex items-center gap-2 mt-1 flex-wrap">
                            <span className="text-xs text-zinc-400">{cert.issuer}</span>
                            <span className="text-zinc-600">·</span>
                            <span
                              className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${cert.badgeColor}`}
                            >
                              {cert.year}
                            </span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {/* View PDF in modal */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              setViewingPdf({
                                title: cert.title,
                                pdfPath: cert.pdfPath,
                                fileName: cert.fileName,
                              })
                            }
                            className="h-8 text-xs border-zinc-600 text-zinc-400 hover:text-zinc-100 hover:border-zinc-500 bg-transparent gap-1.5"
                          >
                            <ExternalLink className="w-3 h-3" />
                            View
                          </Button>

                          {/* Direct download */}
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="h-8 text-xs border-zinc-600 text-zinc-400 hover:text-zinc-100 hover:border-zinc-500 bg-transparent gap-1.5"
                          >
                            <a href={cert.pdfPath} download={cert.fileName}>
                              <Download className="w-3 h-3" />
                              Save
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* CV Download */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" />
                Curriculum Vitae
              </p>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-5">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {/* CV icon */}
                    <div className="w-14 h-16 bg-zinc-700 rounded-lg border border-zinc-600 flex flex-col items-center justify-center gap-1 flex-shrink-0">
                      <FileText className="w-5 h-5 text-blue-400" />
                      <span className="text-[9px] font-bold text-zinc-400 tracking-wider">PDF</span>
                    </div>

                    {/* CV info */}
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-zinc-100">
                        Nicholas Wayne Sookdeo — CV
                      </p>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Full-Stack Software Developer · Durban, KZN
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {['React', 'C#', 'Blazor', 'SQL', 'AWS'].map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 bg-zinc-700 text-zinc-400 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 flex-shrink-0 flex-wrap">
                      <Button
                        variant="outline"
                        onClick={() =>
                          setViewingPdf({
                            title: 'Nicholas Wayne Sookdeo — CV',
                            pdfPath: '/Nicholas_Wayne_Sookdeo_CV.pdf',
                            fileName: 'Nicholas_Wayne_Sookdeo_CV.pdf',
                          })
                        }
                        className="border-zinc-600 text-zinc-300 hover:text-zinc-100 hover:border-zinc-500 bg-transparent gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Preview
                      </Button>
                      <Button
                        asChild
                        className="bg-blue-600 hover:bg-blue-500 text-white gap-2"
                      >
                        <a
                          href="/Nicholas_Wayne_Sookdeo_CV.pdf"
                          download="Nicholas_Wayne_Sookdeo_CV.pdf"
                        >
                          <Download className="w-4 h-4" />
                          Download CV
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* PDF Viewer Modal — renders outside the section so it overlays the full page */}
      <AnimatePresence>
        {viewingPdf && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setViewingPdf(null)}  // click backdrop to close
          >
            <motion.div
              className="relative w-full max-w-4xl h-[90vh] bg-zinc-900 rounded-2xl border border-zinc-700 flex flex-col overflow-hidden shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()} // prevent backdrop click on modal
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-700 flex-shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <FileText className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <p className="text-sm font-medium text-zinc-100 truncate">
                    {viewingPdf.title}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="h-8 text-xs border-zinc-600 text-zinc-400 hover:text-zinc-100 bg-transparent gap-1.5"
                  >
                    <a href={viewingPdf.pdfPath} download={viewingPdf.fileName}>
                      <Download className="w-3 h-3" />
                      Download
                    </a>
                  </Button>
                  <button
                    onClick={() => setViewingPdf(null)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-700 text-zinc-400 hover:text-zinc-100 hover:border-zinc-500 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* PDF rendered in an iframe — works natively in all modern browsers */}
              <div className="flex-1 overflow-hidden bg-zinc-950">
                <iframe
                  src={`${viewingPdf.pdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
                  className="w-full h-full"
                  title={viewingPdf.title}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Certifications