const Blog = () => {
  return (
    <div>
      <div id='blog' className='container mx-auto px-2 py-20'>
        <div>
          <div className='relative text-center'>
            <div className='hidden md:block text-8xl lg:text-9xl font-bold opacity-5'>BLOGS</div>
            <div className='absolute text-4xl lg:text-5xl font-bold  top-1/2 -translate-y-1/2 w-full'>
              <p>Blogs</p>
              <div className='w-28 h-[2px] bg-white mx-auto mt-2'></div>
            </div>
          </div>
        </div>

        <div className='mt-14'>
          <div className='flex justify-center'>
            <p className='text-2xl'>Coming Soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
