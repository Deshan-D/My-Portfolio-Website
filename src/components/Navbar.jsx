import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-white shadow-sm rounded-b-xl mb-4 mx-4 mt-2">
      
      <div className="text-xl font-bold tracking-widest text-slate-800 uppercase">
        Hiruni Jayawardene
      </div>

      <div className="flex gap-8 text-sm font-semibold uppercase tracking-wide">
        <Link to="/" className={`transition duration-300 ${location.pathname === '/' ? 'text-teal-600' : 'text-slate-500 hover:text-teal-600'}`}>
          Home
        </Link>
        <Link to="/projects" className={`transition duration-300 ${location.pathname === '/projects' ? 'text-teal-600' : 'text-slate-500 hover:text-teal-600'}`}>
          Projects
        </Link>
        <Link to="/certificates" className={`transition duration-300 ${location.pathname === '/certificates' ? 'text-teal-600' : 'text-slate-500 hover:text-teal-600'}`}>
          Certificates
        </Link>
      </div>
      
    </nav>
  );
};

export default Navbar;