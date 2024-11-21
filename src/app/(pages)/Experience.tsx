import { BriefcaseBusiness } from "lucide-react";
import ExperienceList from "@/components/specific/ExperienceList";

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="experience__title">
        <BriefcaseBusiness className="experience__icon" aria-hidden="true" />
        Experience
      </h2>
      <article className="experience__content">
        <ExperienceList />
      </article>
    </section>
  );
}

export default Experience;
