import CertificationList from "@/components/specific/CertificationList";
import EducationList from "@/components/specific/EducationList";

function Education() {
  return (
    <section id="education" className="section">
      <article className="education section__content">
        <h3 className="section__heading">Education</h3>
        <EducationList />
        <CertificationList />
      </article>
    </section>
  );
}

export default Education;
