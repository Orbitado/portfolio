import { GraduationCap } from "lucide-react";
import { educationList } from "@/constants/educationList";

function EducationList() {
  return (
    <ol className="education__list">
      {educationList.map((education) => (
        <li key={education.course} className="education__item">
          <GraduationCap className="education__icon" />
          <div className="education__details">
            <h3 className="education__title">{education.course}</h3>
            <h4 className="education__institution">{education.institution}</h4>
            <time className="education__date">{education.date}</time>
            {education.achievements.map((achievement, index) => (
              <p key={index} className="education__description">
                {achievement}
              </p>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default EducationList;
