import { FaDownload } from 'react-icons/fa';
import heroImage from '../../../assets/images/programming.svg';

const Hero = () => {
  return (
    <div className='container mx-auto px-2'>
      <div className='min-h-[88vh] grid grid-cols-2 items-center'>
        <div className='col-span-2 md:col-span-1'>
          <h1 className='text-2xl sm:text-4xl font-bold'>
            <span>Hello! I'm</span>
            <br />
            <span className='text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl block mt-2'>Tarekul Islam</span>
          </h1>
          <p className='mt-4 mb-12'>Full Stack Web Developer.</p>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://drive.google.com/file/d/1-HyOjgXYulhbTlGSCLcftjKAH6Ss7Z5i/'
            className='btn btn-outline font-medium lg:px-8 lg:btn-lg text-base'
          >
            My Resume &nbsp;&nbsp; <FaDownload className='text-sm' />
          </a>
        </div>
        <div className='hidden md:block'>
          <img className='h-full' src={heroImage} alt='hero' />
        </div>
      </div>
    </div>
  );
};
export default Hero;
