import { personalInfo } from '../data/portfolio'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-md bg-emerald-500 text-white text-xs font-black flex items-center justify-center">
              AT
            </span>
            <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              Arjun Teotia
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">·</span>
            <span className="text-sm text-zinc-500 dark:text-zinc-600">
              Technical Lead
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-500 hover:text-emerald-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            >
              <Mail size={15} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-500 hover:text-emerald-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            >
              <Github size={15} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-500 dark:text-zinc-500 hover:text-emerald-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            >
              <Linkedin size={15} />
            </a>
          </div>

          <p className="text-xs text-zinc-400 dark:text-zinc-600">
            © {year} Arjun Teotia · {personalInfo.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
