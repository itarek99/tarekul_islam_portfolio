const About = () => {
  return (
    <div id='about' className='container mx-auto px-2 py-20'>
      <div>
        <div className='relative text-center'>
          <div className='hidden md:block text-8xl lg:text-9xl font-bold opacity-5'>ABOUT</div>
          <div className='absolute text-4xl lg:text-5xl font-bold  top-1/2 -translate-y-1/2 w-full'>
            <p>About Me</p>
            <div className='w-44 h-[2px] bg-white mx-auto mt-2'></div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-10 gap-12 mt-14'>
        <div className='md:col-span-5 lg:col-span-6'>
          <h4 className='text-3xl font-semibold'>Summary</h4>
          <p className='mt-6 text-justify'>
            I'm Tarekul Islam, a Front-End Web Developer. I love combining logic and creative design to make
            eye-catching, accessible, and user-friendly websites and seeing the results of my efforts helping the user
            experience.
          </p>
          <p className='mt-4 text-justify'>
            My current focus is on the MERN stack, but still exploring other technologies and frameworks that catch my
            interest! if you're looking for a developer to add to your team, I'd love to hear from you!
          </p>
        </div>
        <div className='md:col-span-5 lg:col-span-4'>
          <h4 className='text-3xl font-medium'>Personal Details</h4>

          <div className='mt-6'>
            <p>
              Name: <span className='font-medium'>Tarekul Islam</span>
            </p>
            <p className='mt-2'>
              Phone: <span className='font-medium'>+8801742797060</span>
            </p>
            <p className='mt-2'>
              Email: <span className='font-medium'>tarekulislam7060@gmail.com</span>
            </p>
            <p className='mt-2'>
              Address: <span className='font-medium'>Dhaka, Bangladesh</span>
            </p>
            <p className='mt-2'>
              Language: <span className='font-medium'>Bangla, English</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
