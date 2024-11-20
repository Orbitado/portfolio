import { BriefcaseBusiness } from "lucide-react";
import React from "react";

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="experience__title">
        <BriefcaseBusiness className="experience__icon" aria-hidden="true" />
        Experience
      </h2>
      <article>
        <ol className="experience__list">
          <li className="experience__item">
            <div>
              <h3 className="experience__role">WebUI Developer</h3>
              <h4 className="experience__company">Coppel</h4>
              <time className="experience__date">2023 - Present</time>
            </div>
            <div>
              <p className="experience__description">
                As a full-stack developer, I have had the opportunity to work on
                a wide range of projects, from small-scale applications to
                complex web applications. My primary focus has been on
                developing user interfaces using React, TypeScript, and Next.js,
                while also contributing to the backend development using
                Node.js, Express.js, and MongoDB.
              </p>
            </div>
          </li>
        </ol>
      </article>
    </section>
  );
}

export default Experience;
