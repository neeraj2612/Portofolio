import React from 'react';
import { jobexperienceInfo } from '../../data/Jobexp';
import styles from './Experience.styles';

const Experience = () => {
  return (
    <section className={`w-full ${styles.experienceImage}`}>
      <div className="pb-20 md:max-w-screen-md lg:max-w-[69.375rem] md:mx-auto text-white border-t-[1px] border-b-[1px]">
        <h3 className="text-[2.5rem] font-bold text-white md:text-[3.5rem] lg:text-[4.5rem] ml-4 md:ml-0">
          Work History
        </h3>
        <div className="py-48 mx-[0.875rem] flex flex-col items-center md:mx-[2rem] md:flex-row md:flex-wrap md:text-left md:border-b-0 lg:mx-0 lg:justify-between lg:pt-[4.5rem] pb-0">
          {jobexperienceInfo.map((item, key) => (
            <div className="pb-5 md:w-[21.563rem] lg:pb-[3.625rem] mx-10" key={key}>
              <h3 className="text-[2rem] font-bold md:text-[2.5rem]">
                {item.company}
              </h3>
              <p className="text-portfolio-grey capitalize md:text-[1.125rem]">
                {item.postion}
              </p>
              <p className="text-portfolio-grey capitalize md:text-[1.125rem]">
                {item.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
