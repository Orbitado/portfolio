import { GraduationCap } from "lucide-react";
import { educationList } from "@/constants/educationList";
import ExpandableText from "../common/ExpandableText";

function EducationList() {
  return (
    <ul className="education__list">
      {educationList.map((education) => (
        <li key={education.course} className="education__item">
          <GraduationCap className="education__icon" />
          <div className="education__details">
            <h4 className="education__course">{education.course}</h4>
            <h5 className="education__institution">{education.institution}</h5>
            <time className="education__date">{education.date}</time>
            <ExpandableText text={education.description} maxLength={120} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default EducationList;
