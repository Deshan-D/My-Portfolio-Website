import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFigma, FaTimes } from 'react-icons/fa'; // FaTimes අලුතින් එකතු කළා

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "TraffiX",
      desc: "AI-powered traffic monitoring system.",
      tech: ["NextJS", "Python", "TailwindCSS"],
      github: "https://github.com/Deshan-D/Capstone-Project.git",
      live: "#",
      img: "https://placehold.co/600x400/e2e8f0/475569?text=Project+1"
    },
    {
      id: 2,
      title: "Wildvine",
      desc: "An informational application about Red List endangered animals.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Deshan-D/webApplication.git",
      live: "#",
      img: "https://placehold.co/600x400/e2e8f0/475569?text=Project+2"
    },
    {
      id: 3,
      title: "Portfolio Website",
      desc: "A personal portfolio website showcasing my professional skills, knowledge, and achievements.",
      tech: ["ReactJS", "Figma", "TailwindCSS"],
      github: "https://github.com/Deshan-D/My-Portfolio-Website.git",
      live: "#",
      img: "https://placehold.co/600x400/e2e8f0/475569?text=Project+3"
    },
    {
      id: 4,
      title: "Eldershield",
      desc: "A smart digital skills growing app designed to educate and empower elderly persons.",
      tech: ["Figma"],
      figma: "https://www.figma.com/design/DNNaWDyiH197xLIPdOgBDw/ElderShield?node-id=0-1&t=87ABUsaGSeVIWwtt-1",
      live: "#",
      img: "https://placehold.co/600x400/e2e8f0/475569?text=Project+4"
    },
    {
      id: 5,
      title: "E-commerce Website",
      desc: "An e-commerce platform featuring item selection and add-to-cart functionality.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Deshan-D/E-commerce-Website.git",
      live: "#",
      img: "https://placehold.co/600x400/e2e8f0/475569?text=Project+5"
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: '', desc: '', tech: '', linkType: 'github', linkUrl: '', live: '', img: ''
  });

  const handleAddProject = (e) => {
    e.preventDefault();
    
    const newProject = {
      id: projects.length + 1,
      title: formData.title,
      desc: formData.desc,
      tech: formData.tech.split(',').map(item => item.trim()),
      [formData.linkType]: formData.linkUrl, 
      live: formData.live || "#",
      img: formData.img || `https://placehold.co/600x400/e2e8f0/475569?text=${formData.title}`
    };

    setProjects([newProject, ...projects]); 
    
    setIsModalOpen(false);
    setFormData({ title: '', desc: '', tech: '', linkType: 'github', linkUrl: '', live: '', img: '' });
  };

  return (
    <div className="relative px-10 py-12 mx-4 mt-6 bg-white rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2 uppercase">My Projects & Creations</h2>
          <p className="text-slate-500 uppercase tracking-wider text-sm font-semibold">Explore a curated selection of my recent work</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)} 
          className="bg-teal-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-700 transition shadow-md"
        >
          + ADD NEW PROJECT
        </button>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-slate-50 rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition duration-300">
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover border-b border-slate-200" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-4 text-sm h-12">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6 h-8 overflow-hidden">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-slate-200 text-slate-700 text-xs px-2 py-1 rounded-md font-semibold">{t}</span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 bg-teal-600 text-white text-center py-2 rounded-lg text-sm font-bold hover:bg-teal-700 transition flex items-center justify-center gap-2">
                  <FaExternalLinkAlt /> VIEW LIVE
                </a>

                {project.figma ? (
                  <a href={project.figma} target="_blank" rel="noopener noreferrer" className="flex-1 border-2 border-[#F24E1E] text-[#F24E1E] text-center py-2 rounded-lg text-sm font-bold hover:bg-[#F24E1E] hover:text-white transition flex items-center justify-center gap-2">
                    <FaFigma /> FIGMA
                  </a>
                ) : (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 border-2 border-slate-800 text-slate-800 text-center py-2 rounded-lg text-sm font-bold hover:bg-slate-800 hover:text-white transition flex items-center justify-center gap-2">
                    <FaGithub /> GITHUB
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg relative">
            
            {/* Close Button */}
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition text-xl">
              <FaTimes />
            </button>

            <h3 className="text-2xl font-bold text-slate-800 mb-6 uppercase">Add New Project</h3>
            
            <form onSubmit={handleAddProject} className="flex flex-col gap-4">
              <input type="text" placeholder="Project Title" required className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-500"
                value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
              
              <textarea placeholder="Description" required rows="2" className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-500"
                value={formData.desc} onChange={(e) => setFormData({...formData, desc: e.target.value})}></textarea>
              
              <input type="text" placeholder="Tech Stack (e.g. React, Node, CSS)" required className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-500"
                value={formData.tech} onChange={(e) => setFormData({...formData, tech: e.target.value})} />
              
              <div className="flex gap-4">
                <select className="p-3 border border-slate-300 rounded-lg bg-white outline-none" value={formData.linkType} onChange={(e) => setFormData({...formData, linkType: e.target.value})}>
                  <option value="github">GitHub Link</option>
                  <option value="figma">Figma Link</option>
                </select>
                <input type="url" placeholder="Paste link here" className="flex-1 p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-500"
                  value={formData.linkUrl} onChange={(e) => setFormData({...formData, linkUrl: e.target.value})} />
              </div>

              <input type="url" placeholder="Live View URL (Optional)" className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-500"
                value={formData.live} onChange={(e) => setFormData({...formData, live: e.target.value})} />
              
              <input type="url" placeholder="Image URL (Optional)" className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-500"
                value={formData.img} onChange={(e) => setFormData({...formData, img: e.target.value})} />

              <button type="submit" className="mt-2 bg-teal-600 text-white p-3 rounded-lg font-bold hover:bg-teal-700 transition">
                SAVE PROJECT
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;