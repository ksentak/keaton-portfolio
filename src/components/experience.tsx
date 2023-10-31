import React from 'react';
import ExperienceEntry from './experienceEntry';

const Experience: React.FC = () => {
  return (
    <div className='Experience'>
      <div className='container mt-5'>
        {/* Row 1 */}
        <div className='row'>
          <div className='col-12'>
            <h1 className='section-title text-center'>Experience</h1>
          </div>
        </div>
        {/* Row 2 */}
        <div className='row text-start'>
          <ExperienceEntry
            jobTitle='Software Engineer II'
            company='Comcast'
            startDate='Nov 2022'
            endDate='Present'
            location='Philadelphia, PA'
            jobDescriptions={[
              `Championed open-source initiatives by enriching an established community project and assisted in the transition of a proprietary system to open source, ensuring adherence to licensing compliance.`,
              `Developed custom functionalities for test reports, elevating the visibility and understanding of test outcomes.`,
              `Engaged in cooperative efforts with multidisciplinary teams to pinpoint project needs, resolve complex problems, and deliver superior software solutions aligned with company objectives.`,
            ]}
          />
          <ExperienceEntry
            jobTitle='Software Engineer'
            company='Passport'
            startDate='Jan 2022'
            endDate='Oct 2022'
            location='Charlotte, NC (Remote)'
            jobDescriptions={[
              `Delivered product features for the Permits team using React, Node, & AWS cloud computing tools such
              as DynamoDB and Lambda.`,
              `Utilized test-driven development to build functional solutions for requested software features.`,
              `Worked on an agile development team that defined, evaluated, prioritized, and completed user stories in two-week sprints.`,
            ]}
          />
          <ExperienceEntry
            jobTitle='Software Developer/Development Manager'
            company='MacguyverTech'
            startDate='Jul 2020'
            endDate='Jan 2022'
            location='Glenolden, PA (Remote)'
            jobDescriptions={[
              `Progressed from Software Developer to Development Manager, leading software development lifecycle from conceptualization to deployment.`,
              `Developed a more efficient process to deploy applications to cloud-based servers.`,
              `Spearheaded enhancements to existing applications, rectifying errors, and boosting functionality and performance.`,
              `Designed and maintained RESTful APIs, ensuring robust documentation and ease of integration for front-end applications.`,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
