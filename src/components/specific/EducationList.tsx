import { GraduationCap } from "lucide-react";

function EducationList() {
  return (
    <ul className="education__list">
      <li className="education__item">
        <GraduationCap className="education__icon" />
        <div>
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
        </div>
      </li>
    </ul>
  );
}

export default EducationList;
