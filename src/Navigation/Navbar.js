const Navbar = () => {
  return (
    <div className='container mx-auto py-4'>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <a href='/' className='text-3xl font-bold uppercase cursor-pointer'>
            Tarek
          </a>
        </div>
        <div className='flex-none'>
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
