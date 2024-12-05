import TagList from "@/components/common/TagList";
import { Code, ExternalLink, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section__heading">Projects</h2>
      <article className="projects section__content">
        <figure className="projects__image">
          <Image
            src="/images/image.png"
            alt="Modern E-commerce UI project screenshot"
            width={500}
            height={500}
          />
        </figure>
        <section className="projects__content">
          <h3 className="projects__heading">Modern E-commerce UI</h3>
          <p className="projects__text">
            A responsive e-commerce interface built with React and modern design
            principles
          </p>
          <TagList list={["React", "Next.js", "TypeScript", "Tailwind CSS"]} />
          <h4 className="projects__subheading">
            <Code className="projects__icon" aria-hidden="true" />
            Key Features
          </h4>
          <ul className="projects__list">
            <li className="projects__list-item">
              Responsive product grid with filtering
            </li>
            <li className="projects__list-item">
              Animated transitions and micro-interactions
            </li>
            <li className="projects__list-item">
              Advanced cart management system
            </li>
          </ul>
          <div className="projects__links">
            <Link href="#">
              <GithubIcon className="projects__icon" /> Code
            </Link>
            <Link href="#">
              <ExternalLink className="projects__icon" />
              Live Demo
            </Link>
          </div>
        </section>
      </article>
    </section>
  );
}

export default Projects;
