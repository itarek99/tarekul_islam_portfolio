import carBazaar from '../../../assets/images/car_bazaar.png';
import pixelPhotography from '../../../assets/images/pixel_photography.png';
import tustPoint from '../../../assets/images/tuts_point.png';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 'car-bazaar',
    title: 'Car Bazaar',
    details: 'Used Car Selling Website.',
    image: carBazaar,
    live_link: 'https://pixel-photography-b713f.web.app/',
    github_link: 'https://github.com/itarek99/pixel_photography-client-side',
  },

  {
    id: 'pixel-photography',
    title: 'Pixel Photography',
    details: 'Photography Service Provider Website.',
    image: pixelPhotography,
    live_link: 'https://pixel-photography-b713f.web.app/',
    github_link: 'https://github.com/itarek99/pixel_photography-client-side',
  },

  {
    id: 'tuts-point',
    title: 'Tuts Point',
    details: 'Online Education Platform.',
    image: tustPoint,
    live_link: 'https://pixel-photography-b713f.web.app/',
    github_link: 'https://github.com/itarek99/pixel_photography-client-side',
  },
];

const Projects = () => {
  return (
    <div id='projects' className='bg-[#2A2C39]'>
      <div className='container mx-auto px-2 py-20 pb-24'>
        <div>
          <div className='relative text-center'>
            <div className='hidden md:block text-8xl lg:text-9xl font-bold opacity-5'>PORTFOLIO</div>
            <div className='absolute text-4xl lg:text-5xl font-bold  top-1/2 -translate-y-1/2 w-full'>
              <p>My Works</p>
              <div className='w-36 h-[2px] bg-white mx-auto mt-2'></div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-8 lg:gap-12'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
