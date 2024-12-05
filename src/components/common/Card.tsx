import TagList from "@/components/common/TagList";
import { Code, ExternalLink, GithubIcon } from "lucide-react";
import Link from "next/link";
function Card() {
  return (
    <>
      <figure className="projects__image">
        <img src="/images/image.png" alt="E-commerce UI" />
      </figure>
      <article className="projects">
        <section className="projects__content">
          <div>
            <h3 className="projects__heading">Modern E-commerce UI</h3>
            <p className="projects__text">
              A responsive e-commerce interface built with React and modern
              design principles
            </p>
            <TagList
              list={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
            />
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
              <Link href="#" className="projects__link">
                <GithubIcon className="projects__icon" /> <span>Code</span>
              </Link>
              <Link href="#" className="projects__link">
                <ExternalLink className="projects__icon" />
                <span>Live Demo</span>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export default Card;
