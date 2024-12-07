import Card from "@/components/common/Card";
import { ecommerce } from "@/constants/projects";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section__heading">Projects</h2>
      <article className="projects">
        <Card project={ecommerce} />
        <Card project={ecommerce} />
      </article>
    </section>
  );
}

export default Projects;
