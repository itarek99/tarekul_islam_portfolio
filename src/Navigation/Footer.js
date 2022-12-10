import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-[#2A2C39]'>
      <div className='container mx-auto px-2 py-6'>
        <p className='text-lg'>Social Connections</p>
        <div className='flex gap-2 text-3xl mt-2'>
          <a href='https://www.facebook.com/tarek161803/'>
            <FaFacebookSquare />
          </a>
          <a href='f.com'>
            <FaLinkedin />
          </a>
          <a href='f.com'>
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
