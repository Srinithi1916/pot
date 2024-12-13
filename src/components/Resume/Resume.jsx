import './Resume.css'
import { FaDownload } from 'react-icons/fa'

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <div className="resume-download">
        <p>Download my resume to learn more about my skills and experience.</p>
        <a 
          href="/resume.pdf" 
          download="Srinithi_Resume.pdf"
          className="download-button"
        >
          <FaDownload /> Download Resume
        </a>
      </div>
    </section>
  )
}

export default Resume