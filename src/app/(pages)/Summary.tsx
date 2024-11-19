import { Download, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

function Summary() {
  return (
    <section id="summary" className="summary">
      <article className="summary__content">
        <h1 className="summary__title">Frontend Developer</h1>
        <p className="summary__text">
          Frontend Developer with expertise in{" "}
          <span className="highlight">React</span>,{" "}
          <span className="highlight">TypeScript</span>, and{" "}
          <span className="highlight">Next.js</span>. Proven track record in
          delivering high-quality web applications. Recognized for adaptability,
          problem-solving, and effective teamwork in fast-paced environments,
          consistently aligning with client needs and driving project success
          with a strong business vision.
        </p>
      </article>
      <article className="summary__actions">
        <Link
          href="/assets/resume.pdf"
          download="Valdez Leonardo Juan Pablo - Frontend Developer.pdf"
          target="_blank"
          className="btn btn--primary"
          aria-label="Download Resume"
        >
          <Download className="btn__icon" />
          <span className="sr-only">Download Resume</span>
        </Link>
        <Link
          href="mailto:vleonardojuanpablo@icloud.com"
          className="btn btn--secondary"
          aria-label="Contact Me"
        >
          <Mail className="btn__icon" />
          <span className="sr-only">Contact Me</span>
        </Link>
      </article>
    </section>
  );
}

export default Summary;
