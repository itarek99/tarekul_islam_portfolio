import { BsGithub, BsGlobe2 } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import firebase from '../../assets/icons/firebase.png';
import mongoDB from '../../assets/icons/mongodb.png';
import node from '../../assets/icons/nodejs.png';
import reactRouter from '../../assets/icons/react-router.png';
import reactIcon from '../../assets/icons/react.png';
import tailwindcss from '../../assets/icons/tailwindcss.png';

const projectDetailsData = [
  {
    id: 'car-bazaar',
    title: 'Car Bazaar',
    subTitle: 'Used Car Selling Website.',
    details: [
      'Dynamic dashboard for different types of users (admin/seller/buyer).',
      'Admin can delete a buyer or seller account and delete the reported products.',
      'The seller can advertise their products that will appear on the home page.',
    ],
    images: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5vbG9neXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
    ],
    liveLink: 'link',
    githubLink: 'link',
    technologies: [reactIcon, node, mongoDB, firebase, tailwindcss, reactRouter],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();

  const projectData = projectDetailsData.find((project) => project.id === id);

  return (
    <div>
      <div className='container mx-auto py-4'>
        <div className='navbar bg-base-100'>
          <div className='ml-auto'>
            <Link to='/' className='text-3xl font-bold uppercase cursor-pointer'>
              Tarek
            </Link>
          </div>
        </div>
      </div>

      {!projectData ? (
        <div className='container mx-auto px-2 '>
          <div className='min-h-[80vh] flex justify-center items-center'>
            <p className='text-xl'>Sorry No Project Found {':('}</p>
          </div>
        </div>
      ) : (
        <div className='container mx-auto px-2'>
          <div className='mb-6'>
            <h3 className='text-3xl font-medium'>{projectData.title}</h3>
            <p className='text-sm'>{projectData.subTitle}</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <img className='w-full' src={projectData.images[0]} alt='project screenshot' />
            </div>
            <div>
              <img className='w-full' src={projectData.images[1]} alt='project screenshot' />
            </div>
            <div className='md:col-span-2'>
              <img className='w-full max-h-96 object-cover' src={projectData.images[2]} alt='project screenshot' />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
            <div>
              <h4 className='text-3xl font-medium'>Project Details</h4>
              <ul className='ml-4 list-disc'>
                {projectData.details.map((detail) => (
                  <li className='mt-2'>{detail}</li>
                ))}
              </ul>
            </div>

            <div>
              <div>
                <h2 className='text-2xl font-medium'>Technology Used</h2>
                <div className='flex gap-2 mt-3'>
                  {projectData.technologies.map((technology) => (
                    <div className='h-12 w-12 p-2 bg-[#2A2C39] flex items-center justify-center'>
                      <img className='object-cover' src={technology} alt='technology' />
                    </div>
                  ))}
                </div>
              </div>

              <div className='mt-8'>
                <h2 className='text-2xl font-medium'>Links</h2>
                <div className='flex items-center gap-2 mt-3'>
                  <div className='h-12 w-12 p-1 bg-[#2A2C39] flex items-center justify-center'>
                    <a className='text-2xl' target='_blank' rel='noreferrer' href={projectData.liveLink}>
                      <BsGlobe2 />
                    </a>
                  </div>
                  <div className='h-12 w-12 p-1 bg-[#2A2C39] flex items-center justify-center'>
                    <a className='text-2xl' target='_blank' rel='noreferrer' href={projectData.githubLink}>
                      <BsGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProjectDetails;
