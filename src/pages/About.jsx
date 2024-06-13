import React from 'react'
import { skills , experiences} from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Marquee from "react-fast-marquee";
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Hishita Gupta</span> </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>A Seasoned Front End Developer with experience in blending the art of design with skill of programming to
        deliver an immersive and engaging user experience through efficient website development .</p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
         <Marquee autoFill='true' pauseOnHover='true' className='overflow-hidden no-scrollbar'>
          {skills.map((skill) => (
            <div className='block-container w-40 h-40'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          ))}
          </Marquee>
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Worked at different positions of impact at organisations , leveling up my skills and teaming up with smart people. Here's the rundown: </p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) =>(
              <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={<div className='flex justify-center items-center w-full h-full object-contain '>
                <img src={experience.icon} alt={experience.company_name} className='w-[80%] h-[90%] object-contain rounded-md' />
              </div>}
              iconStyle={{
                background:experience.iconBg
              }}
              contentStyle={{
                borderBottom:'8px',
                borderStyle:'solid',
                borderBottomColor:experience.iconBg,
                boxShadow:'none'

              }}
              
              >
                <div>
                  <h3 className='text-black text-xl font-semibold font-poppins'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point,index)=>(
                      <li key={`experience-point-${index}`}className='text-black-500/50 font-normal pl-1 text-small'>{point}</li>


                    ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200'/>
      <CTA/>

    </section>
  )
}

export default About;