import { BsGithub, BsGlobe2 } from 'react-icons/bs';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const { title, image, details, live_link, github_link, id } = project;

  return (
    <div>
      <img
        className='w-full aspect-[16/11]  object-cover object-top transition-all ease-in-out duration-[2000ms] hover:object-bottom'
        src={image}
        alt=''
      />
      <div className='bg-base-100 p-6'>
        <h3 className='text-lg'>{title}</h3>
        <p className='text-sm'>{details}</p>
        <div className='flex justify-between items-center mt-8'>
          <Link to={id} className='flex items-center text-xs font-medium '>
            READ MORE&nbsp;
            <FaChevronRight />
          </Link>

          <div className='flex items-center gap-3'>
            <a className='text-xl' target='_blank' rel='noreferrer' href={live_link}>
              <BsGlobe2 />
            </a>
            <a className='text-xl' target='_blank' rel='noreferrer' href={github_link}>
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
