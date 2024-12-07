import TagList from "@/components/common/TagList";
import { Code, ExternalLink, GithubIcon } from "lucide-react";
import Link from "next/link";
import { CardProps, Project } from "@/types/types";

function Card({ project }: CardProps) {
  return (
    <div className="projects__card">
      <figure className="projects__image">
        <img src={project.img} alt="E-commerce UI" />
      </figure>
      <section className="projects__content">
        <div>
          <h3 className="projects__heading">{project.title}</h3>
          <p className="projects__text">{project.description}</p>
          <TagList list={["React", "Next.js", "TypeScript", "Tailwind CSS"]} />
          <h4 className="projects__subheading">
            <Code className="projects__icon" aria-hidden="true" />
            Key Features
          </h4>
          <ul className="projects__list">
            {project.features.map((feature: string) => (
              <li key={feature} className="projects__list-item">
                {feature}
              </li>
            ))}
          </ul>
          <div className="projects__links">
            <Link href={project.github} className="projects__link">
              <GithubIcon className="projects__icon" /> <span>Code</span>
            </Link>
            <Link href={project.demo} className="projects__link">
              <ExternalLink className="projects__icon" />
              <span>Live Demo</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
