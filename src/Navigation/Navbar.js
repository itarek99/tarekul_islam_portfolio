const Navbar = () => {
  return (
    <div className='container mx-auto'>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <div className='text-3xl font-bold uppercase cursor-pointer'>Tarek</div>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a href='#project'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;