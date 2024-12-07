import { experienceList } from "@/constants/experienceList";
import TagList from "@/components/common/TagList";
import ExpandableText from "../common/ExpandableText";

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
        }) => (
          <li key={company} className="experience__item">
            <div className="experience__header">
              <h3 className="experience__role">{position}</h3>
              <h4 className="experience__company">{company}</h4>
              <time className="experience__date">
                {startDate} - {endDate}
              </time>
            </div>
            <div className="experience__brief">
              <ExpandableText text={description} maxLength={200} />
              <TagList list={technologies} />
            </div>
          </li>
        )
      )}
    </ol>
  );
}

export default ExperienceList;
