import { Award, Github, Link2 } from "lucide-react";
import { certificationsList } from "@/constants/certificationsList";
import Link from "next/link";

function CertificationList() {
  return (
    <div className="education__list--certifications">
      <Award className="education__icon" />
      <div className="education__header">
        <h3 className="education__title">Licenses and Certificates</h3>
        <ol className="education__list--container">
          {certificationsList.map((certification) => (
            <li key={certification.course} className="education__item">
              <div className="education__details">
                <h4 className="education__title--certification">
                  {certification.course}
                </h4>
                <h5 className="education__institution--certification">
                  {certification.institution}
                </h5>
                <Link
                  href={certification.certificate}
                  aria-label={`Link to the ${certification.course} certificate.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link2 className="education__icon--certification" />
                </Link>
                <Link
                  href={certification.project}
                  aria-label={`Link to the ${certification.course} project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="education__icon--certification" />
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default CertificationList;
