import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >  
        I'm a frontend engineer with extensive experience in developing <span className='text-[#915EFF]'>high-quality </span>
        and <span className='text-[#915EFF]'>user-friendly web applications</span>. 
          
        As a proficient software developer, I possess expertise in multiple programming languages, including <span className='text-[#915EFF]'>TypeScript</span> and <span className='text-[#915EFF]'>JavaScript</span>, as well as frameworks such as <span className='text-[#915EFF]'>React</span>, <span className='text-[#915EFF]'>Node.js</span>, and <span className='text-[#915EFF]'>Three.js</span>. 
        Additionally, I am well-versed in the entire <span className='text-[#915EFF]'>Adobe Creative Suite</span>. 
        My ability to learn quickly and work closely with clients enables me to deliver <span className='text-[#915EFF]'>scalable</span> and user-friendly solutions that address real-world problems.
        Let's <span className='text-[#915EFF]'>collaborate</span> and turn your ideas into a reality!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");