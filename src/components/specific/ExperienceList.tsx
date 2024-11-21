import { experienceList } from "@/constants/experienceList";
import TagList from "@/components/common/TagList";

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
              <p className="experience__description">{description}</p>
              <TagList list={technologies} />
            </div>
          </li>
        )
      )}
    </ol>
  );
}

export default ExperienceList;
