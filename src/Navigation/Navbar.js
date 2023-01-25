const Navbar = () => {
  return (
    <div className='container mx-auto py-4'>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <a href='/' className='text-3xl font-bold uppercase cursor-pointer'>
            Tarek
          </a>
        </div>

        {/* small screen navbar */}
        <div className='block md:hidden fixed text-center px-2 w-full left-0 right-0 top-20 z-40'>
          <ul className='mx-auto w-full max-w-xl bg-slate-400 space-y-3 py-4'>
            <li>
              <a className='py-1 block' href='#projects'>
                Projects
              </a>
            </li>
            <li>
              <a className='py-1 block' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='py-1 block' href='#contact'>
                Contact
              </a>
            </li>
            <li>
              <a className='py-1 block' href='/#blog'>
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* big screen navbar */}
        <div className='hidden md:block flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
            <li>
              <a href='/#blog'>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
