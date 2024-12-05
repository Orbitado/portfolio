import Card from "@/components/common/Card";
import TagList from "@/components/common/TagList";
import { Code, ExternalLink, GithubIcon } from "lucide-react";
import Link from "next/link";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section__heading">Projects</h2>
      <Card />
      <Card />
    </section>
  );
}

export default Projects;
