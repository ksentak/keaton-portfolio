import React from 'react';

interface ExperienceProps {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  jobDescriptions: string[];
}

const ExperienceEntry: React.FC<ExperienceProps> = ({
  jobTitle,
  company,
  startDate,
  endDate,
  location,
  jobDescriptions,
}) => {
  return (
    <div className='col-12 experience-entry'>
      <h3 className='experience-title mb-1 alt-green'>{jobTitle}</h3>
      <h4 className='experience-company mb-1'>{company}</h4>
      <h6 className='experience-dates-location mb-3'>
        {startDate} - {endDate}, {location}
      </h6>
      {jobDescriptions &&
        jobDescriptions.map((desc, index) => (
          <p key={index} className='experience-description'>
            - {desc}
          </p>
        ))}
    </div>
  );
};

export default ExperienceEntry;
