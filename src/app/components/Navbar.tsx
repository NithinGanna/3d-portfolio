// components/Navbar.tsx

import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-transparent text-white border-b border-gray-200 border-opacity-50">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div>
          <Link to="home" smooth={true} duration={500} className="text-2xl font-bold hover:text-red-600">Ganna Nithin</Link>
        </div>
        <div className="space-x-6">
          <Link to="about" smooth={true} duration={500} className="hover:text-red-600">About</Link>
          <Link to="skills" smooth={true} duration={500} className="hover:text-red-600">Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-red-600">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-red-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
