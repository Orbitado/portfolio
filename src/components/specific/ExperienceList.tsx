import { experienceList } from "@/constants/experienceList";
import TagList from "@/components/common/TagList";
import ExpandableText from "../common/ExpandableText";
import ExpandableContainer from "../common/ExpandableContainer";

function ExperienceList() {
  return (
    <ol className="experience__list">
      {experienceList.map(
        ({
          company,
          position,
          startDate,
          endDate,
          description,
          technologies,
          softSkills,
        }) => (
          <li key={company} className="experience__item">
            <div className="experience__header">
              <h3 className="experience__role">{position}</h3>
              <h4 className="experience__company">{company}</h4>
              <time className="experience__date">
                {startDate} - {endDate}
              </time>
            </div>
            <div className="experience__description">
              <ExpandableContainer maxHeight={100}>
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </ExpandableContainer>
              <TagList list={technologies} />
              <TagList list={softSkills} />
            </div>
          </li>
        )
      )}
    </ol>
  );
}

export default ExperienceList;
