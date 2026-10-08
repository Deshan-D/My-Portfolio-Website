import { useState } from 'react';
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope, FaFigma, FaPalette, FaJira, FaDownload, FaEye, FaChevronDown } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { DiIntellij } from 'react-icons/di';
import { SiPostman } from 'react-icons/si';

const Hero = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-white shadow-sm rounded-xl mx-4 mt-6">
      
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
          I'm Deshan. Crafting Digital <br/> Experiences with Purpose.
        </h1>
        
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-3">About Me</h2>
        <p className="text-slate-600 leading-relaxed mb-6 text-lg">
          I am a professional UI/UX Designer and Frontend Developer. I specialize in taking complex problems and turning them into beautiful, user-friendly digital experiences.
        </p>

        {/* CV Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a 
            href={`${baseUrl}cv1.pdf`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700 transition shadow-md flex items-center gap-2"
          >
            <FaEye className="text-xl" /> VIEW CV
          </a>

          {/* Dropdown Button Container */}
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="border-2 border-slate-900 text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition shadow-md flex items-center gap-2"
            >
              <FaDownload className="text-xl" /> DOWNLOAD CV <FaChevronDown className="text-sm ml-1" />
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-10">
                <a 
                  href={`${baseUrl}cv1.pdf`} 
                  download="Deshan_UIUX_CV.pdf" 
                  className="block px-4 py-3 text-sm font-bold text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition border-b border-slate-100"
                  onClick={() => setShowDropdown(false)}
                >
                  UI/UX Design CV
                </a>
                <a 
                  href={`${baseUrl}cv2.pdf`} 
                  download="Deshan_SE_CV.pdf" 
                  className="block px-4 py-3 text-sm font-bold text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition"
                  onClick={() => setShowDropdown(false)}
                >
                  Software Engineering CV
                </a>
              </div>
            )}
          </div>
        </div>
        
        {/* Tools & Skills */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Tools I Use</h3>
          <div className="flex flex-wrap gap-5 text-4xl">
            <FaFigma className="text-[#F24E1E] hover:scale-110 transition-transform cursor-pointer" title="Figma" />
            <FaPalette className="text-[#00C4CC] hover:scale-110 transition-transform cursor-pointer" title="Canva" />
            <FaJira className="text-[#0052CC] hover:scale-110 transition-transform cursor-pointer" title="Jira" />
            <VscVscode className="text-[#007ACC] hover:scale-110 transition-transform cursor-pointer" title="VS Code" />
            <DiIntellij className="text-[#FE315D] hover:scale-110 transition-transform cursor-pointer" title="IntelliJ IDEA" />
            <SiPostman className="text-[#FF6C37] hover:scale-110 transition-transform cursor-pointer" title="Postman" />
            <FaGithub className="text-slate-800 hover:scale-110 transition-transform cursor-pointer" title="GitHub" />
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Let's Connect</h3>
          <p className="text-sm text-slate-500 mb-4 uppercase tracking-wider font-semibold">Reach out & view my work</p>
          <div className="flex gap-4">
            <a href="#" className="bg-[#0077b5] text-white p-3 rounded-xl text-3xl hover:bg-blue-700 transition shadow-md" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:your.email@example.com" className="bg-[#EA4335] text-white p-3 rounded-xl text-3xl hover:bg-red-600 transition shadow-md" title="Email">
              <FaEnvelope />
            </a>
            <a href="#" className="bg-black text-white p-3 rounded-xl text-3xl hover:bg-gray-800 transition shadow-md" title="Medium">
              <FaMedium />
            </a>
          </div>
        </div>
      </div>

      <div className="md:w-5/12 mt-12 md:mt-0 flex justify-center">
        <div className="w-80 h-96 bg-slate-200 rounded-3xl overflow-hidden shadow-xl border-8 border-white">
          <img 
            src={`${baseUrl}profile.png`} 
            alt="Deshan" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;