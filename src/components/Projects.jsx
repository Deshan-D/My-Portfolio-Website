import { FaGithub, FaExternalLinkAlt, FaFigma } from 'react-icons/fa';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "TraffiX",
      desc: "A professional UI/UX design and frontend for agricultural ecommerce platforms.",
      tech: ["NextJS", "Python", "TailwindCSS"],
      github: "https://github.com/Deshan-D/Capstone-Project.git",
      live: "#",
      img: "https://placehold.co/600x400/e2e8f0/475569?text=Project+1"
    },
    {
      id: 2,
      title: "Wildvine",
      desc: "Health related mobile app design and frontend implementation.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Deshan-D/webApplication.git",
      live: "https://deshan-d.github.io/webApplication/",
      img: "https://placehold.co/600x400/e2e8f0/475569?text=Project+2"
    },
    {
      id: 3,
      title: "Portfolio Website",
      desc: "Personal portfolio website with beautiful animations and clean UI.",
      tech: ["ReactJS", "Figma", "TailwindCSS"],
      github: "https://github.com/Deshan-D/My-Portfolio-Website.git",
      live: "#",
      img: "https://placehold.co/600x400/e2e8f0/475569?text=Project+3"
    },
    {
      id: 4,
      title: "Eldershield",
      desc: "Personal portfolio website with beautiful animations and clean UI.",
      tech: ["Figma"],
      figma: "https://www.figma.com/design/DNNaWDyiH197xLIPdOgBDw/ElderShield?node-id=0-1&t=87ABUsaGSeVIWwtt-1",
      live: "#",
      img: "https://placehold.co/600x400/e2e8f0/475569?text=Project+4"
    },
    {
      id: 5,
      title: "E-commerce Website",
      desc: "Personal portfolio website with beautiful animations and clean UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Deshan-D/E-commerce-Website.git",
      live: "https://e-commerce-website-deshan6.vercel.app/",
      img: "https://placehold.co/600x400/e2e8f0/475569?text=Project+5"
    }
  ];

  return (
    <div className="px-10 py-12 mx-4 mt-6 bg-white rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2 uppercase">My Projects & Creations</h2>
          <p className="text-slate-500 uppercase tracking-wider text-sm font-semibold">Explore a curated selection of my recent work</p>
        </div>
        <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-700 transition shadow-md">
          + ADD NEW PROJECT
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project) => (
          <div key={project.id} className="bg-slate-50 rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition duration-300">
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover border-b border-slate-200" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-4 text-sm h-10">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6 h-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-slate-200 text-slate-700 text-xs px-2 py-1 rounded-md font-semibold">{t}</span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {/* Live Button */}
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-teal-600 text-white text-center py-2 rounded-lg text-sm font-bold hover:bg-teal-700 transition flex items-center justify-center gap-2"
                >
                  <FaExternalLinkAlt /> VIEW LIVE
                </a>

                {/* Conditional Rendering: Figma link or github link button */}
                {project.figma ? (
                  <a 
                    href={project.figma} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-[#F24E1E] text-[#F24E1E] text-center py-2 rounded-lg text-sm font-bold hover:bg-[#F24E1E] hover:text-white transition flex items-center justify-center gap-2"
                  >
                    <FaFigma /> FIGMA
                  </a>
                ) : (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-slate-800 text-slate-800 text-center py-2 rounded-lg text-sm font-bold hover:bg-slate-800 hover:text-white transition flex items-center justify-center gap-2"
                  >
                    <FaGithub /> GITHUB
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;