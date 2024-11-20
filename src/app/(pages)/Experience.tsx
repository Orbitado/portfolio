import { BriefcaseBusiness } from "lucide-react";
import { experienceList } from "@/constants/experienceList";
import React from "react";

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="experience__title">
        <BriefcaseBusiness className="experience__icon" aria-hidden="true" />
        Experience
      </h2>
      <article className="experience__content">
        <ol className="experience__list">
          {experienceList.map(
            ({ company, position, startDate, endDate, description }) => (
              <li key={company} className="experience__item">
                <div className="experience__header">
                  <h3 className="experience__role">{position}</h3>
                  <h4 className="experience__company">{company}</h4>
                  <time className="experience__date">
                    {startDate} - {endDate}
                  </time>
                </div>
                <div className="experience__brief">
                  <p className="experience__description">{description}</p>
                </div>
              </li>
            )
          )}
        </ol>
      </article>
    </section>
  );
}

export default Experience;
