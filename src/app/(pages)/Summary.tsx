import { Download, Mail } from "lucide-react";
import Link from "next/link";

function Summary() {
  return (
    <section id="summary" className="summary">
      <article className="summary__content">
        <h1 className="summary__title">Frontend Developer</h1>
        <p className="summary__text">
          Front-end Developer with over 1 year of experience, dedicated to
          crafting pixel-perfect designs and delivering seamless user
          experiences. Proven ability to adapt quickly, communicate effectively,
          and collaborate within agile teams to achieve innovative solutions.
          Committed to continuous learning and delivering software solutions
          that meet the highest standards of quality and user satisfaction.
        </p>
      </article>
      <article className="summary__actions">
        <Link
          href="/assets/resume.pdf"
          download="Valdez Leonardo Juan Pablo - Frontend Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
          aria-label="Download Resume in PDF format of Leonardo Valdez"
        >
          <Download className="btn__icon" />
          <span>Download Resume</span>
        </Link>
        <Link
          href="mailto:vleonardojuanpablo@icloud.com"
          className="btn btn--secondary"
          aria-label="Send a mail to Leonardo Valdez"
        >
          <Mail className="btn__icon" />
          <span>Contact Me</span>
        </Link>
      </article>
    </section>
  );
}

export default Summary;
