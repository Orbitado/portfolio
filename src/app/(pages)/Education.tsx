import { GraduationCap } from "lucide-react";
import React from "react";

function Education() {
  return (
    <section id="education" className="section">
      <h3 className="section__heading">
        <GraduationCap className="section__icon" aria-hidden="true" />
        Education
      </h3>
      <article className="section__content">
        <ul className="education__list">
          <li className="education__item">
            <h4 className="education__course">
              Bachelor in Software Development and Quality
            </h4>
            <h5 className="education__institution">
              University of the North Saint Thomas Aquinas
            </h5>
            <time className="education__date">2024 - 2026</time>
            <p className="education__description">
              Focused on web technologies and modern software development
              practices. Key courses included Web Development, User Interface
              Design, and Advanced JavaScript Programming.
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Education;
