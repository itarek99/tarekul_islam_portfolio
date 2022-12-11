import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#2A2C39]'>
      <div className='container mx-auto px-2 py-6'>
        <p className='text-lg'>Social Connections</p>
        <div className='flex gap-2 text-xl mt-2'>
          <div className='h-10 w-10 bg-base-100 flex items-center justify-center'>
            <a target='_blank' href='https://www.linkedin.com/in/-tarekul-islam/' rel='noreferrer'>
              <FaLinkedinIn />
            </a>
          </div>
          <div className='h-10 w-10 bg-base-100 flex items-center justify-center'>
            <a target='_blank' href='https://github.com/itarek99/' rel='noreferrer'>
              <FaGithub />
            </a>
          </div>
          <div className='h-10 w-10 bg-base-100 flex items-center justify-center'>
            <a target='_blank' href='https://www.facebook.com/tarek161803/' rel='noreferrer'>
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
