const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-white shadow-sm rounded-b-xl mb-4 mx-4 mt-2">
      
      <div className="text-xl font-bold tracking-widest text-slate-800 uppercase">
        Deshan Disanayaka
      </div>

      <div className="flex gap-8 text-sm font-semibold uppercase tracking-wide">
        <a href="#" className="text-teal-600 hover:text-teal-500 transition duration-300">
          Home
        </a>
        <a href="#" className="text-slate-500 hover:text-teal-600 transition duration-300">
          Projects
        </a>
        <a href="#" className="text-slate-500 hover:text-teal-600 transition duration-300">
          Certificates
        </a>
      </div>
      
    </nav>
  );
};

export default Navbar;