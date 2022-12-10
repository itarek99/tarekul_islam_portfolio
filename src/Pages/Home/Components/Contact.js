const Contact = () => {
  return (
    <div id='contact' className='container mx-auto px-2 py-20'>
      <div>
        <div className='relative text-center'>
          <div className='hidden md:block text-8xl lg:text-9xl font-bold opacity-5'>CONTACT</div>
          <div className='absolute text-4xl lg:text-5xl font-bold  top-1/2 -translate-y-1/2 w-full'>
            <p>Get In Touch</p>
            <div className='w-48 h-[2px] bg-white mx-auto mt-2'></div>
          </div>
        </div>
      </div>

      <div className='mt-14'>
        <form action='' className='w-full max-w-5xl mx-auto'>
          <div className='grid grid-cols-2 gap-6'>
            <input type='text' placeholder='Name' className='input input-bordered w-full' />
            <input type='email' placeholder='Email' className='input input-bordered w-full' />
            <textarea rows='5' className='textarea textarea-bordered col-span-2' placeholder='Message'></textarea>
          </div>
          <div className='text-right mt-6'>
            <button className='btn btn-outline font-medium text-sm' type='submit'>
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
