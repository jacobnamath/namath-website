import { Mail, Link2, FileText, GraduationCap } from 'lucide-react'

function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <ul className="contact-list">
        <li>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jacobnamath@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail size={20} />
            <span>Email</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jacob-namath/" target="_blank" rel="noopener noreferrer">
            <Link2 size={20} />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="/Namath_Resume_2026.pdf" target="_blank" rel="noopener noreferrer">
            <FileText size={20} />
            <span>Resume</span>
          </a>
        </li>
        <li>
          <a href="/Namath_Transcript.pdf" target="_blank" rel="noopener noreferrer">
            <GraduationCap size={20} />
            <span>Transcript</span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact