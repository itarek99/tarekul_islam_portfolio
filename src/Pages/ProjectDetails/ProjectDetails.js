import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <div className='container mx-auto py-4'>
        <div className='navbar bg-base-100'>
          <div className='flex-1'>
            <a href='/' className='text-3xl font-bold uppercase cursor-pointer'>
              Tarek
            </a>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-2'>{id}</div>
    </div>
  );
};
export default ProjectDetails;
