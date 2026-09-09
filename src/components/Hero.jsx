import { FaLinkedin, FaGithub, FaMedium, FaEnvelope, FaFigma, FaPalette, FaJira } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { DiIntellij } from 'react-icons/di';
import { SiPostman } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-white shadow-sm rounded-xl mx-4 mt-6">
      
      {/* Left Side: Details */}
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
          I'm Deshan. Crafting Digital <br/> Experiences with Purpose.
        </h1>
        
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-3">About Me</h2>
        <p className="text-slate-600 leading-relaxed mb-8 text-lg">
          I am a professional UI/UX Designer and Frontend Developer. I specialize in taking complex problems and turning them into beautiful, user-friendly digital experiences.
        </p>
        
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
            {/* LinkedIn */}
            <a href="#" className="bg-[#0077b5] text-white p-3 rounded-xl text-3xl hover:bg-blue-700 transition shadow-md" title="LinkedIn">
              <FaLinkedin />
            </a>
            {/* Email */}
            <a href="mailto:your.email@example.com" className="bg-[#EA4335] text-white p-3 rounded-xl text-3xl hover:bg-red-600 transition shadow-md" title="Email">
              <FaEnvelope />
            </a>
            {/* Medium */}
            <a href="#" className="bg-black text-white p-3 rounded-xl text-3xl hover:bg-gray-800 transition shadow-md" title="Medium">
              <FaMedium />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-5/12 mt-12 md:mt-0 flex justify-center">
        <div className="w-80 h-96 bg-slate-200 rounded-3xl overflow-hidden shadow-xl border-8 border-white">
          <img 
            src="/My-Portfolio-Website/profile.png" 
            alt="Deshan Disanayaka" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;