import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Certificates = () => {
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      title: "Computer Hardware Technician",
      issuer: "Lalith Athulathmudali Vocational Training Center",
      date: "2024",
      img: "https://placehold.co/800x600/e2e8f0/475569?text=Certificate+1"
    },
    {
      id: 2,
      title: "Python for Beginner",
      issuer: "University of Moratuwa",
      date: "2024",
      img: "/My-Portfolio-Website/cert02.png"
    },
    {
      id: 3,
      title: "Getting Started with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      date: "2026",
      img: "/My-Portfolio-Website/cert03.png"
    },
    {
      id: 4,
      title: "Exploring Networking with Cisco Packet Tracer",
      issuer: "Cisco Networking Academy",
      date: "2026",
      img: "/My-Portfolio-Website/cert04.png"
    },
    {
      id: 5,
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2026",
      img: "/My-Portfolio-Website/cert05.png"
    },
    {
      id: 6,
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      date: "2026",
      img: "/My-Portfolio-Website/cert06.png"
    },
    {
      id: 7,
      title: "Eco Pen Article Competition",
      issuer: "Zero Plastic Community of Sabaragamuwa University of Sri Lanka",
      date: "2025",
      img: "/My-Portfolio-Website/cert07.png"
    },
    {
      id: 8,
      title: "SLIOT Challenge 2026",
      issuer: "University of Moratuwa & SLT-Mobitel",
      date: "2026",
      img: "/My-Portfolio-Website/cert08.png"
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: '', issuer: '', date: '', img: ''
  });

  const handleAddCertificate = (e) => {
    e.preventDefault();
    
    const newCert = {
      id: certificates.length + 1,
      title: formData.title,
      issuer: formData.issuer,
      date: formData.date,
      img: formData.img || `https://placehold.co/800x600/e2e8f0/475569?text=${formData.title.replace(/ /g, '+')}`
    };

    setCertificates([newCert, ...certificates]); 
    
    setIsModalOpen(false);
    setFormData({ title: '', issuer: '', date: '', img: '' });
  };

  return (
    <div className="relative px-10 py-12 mx-4 mt-6 bg-white rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2 uppercase">My Certificates</h2>
          <p className="text-slate-500 uppercase tracking-wider text-sm font-semibold">Professional qualifications and achievements</p>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-teal-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-700 transition shadow-md"
        >
          + ADD NEW CERTIFICATE
        </button>
      </div>
      
      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert) => (
          <div key={cert.id} className="bg-slate-50 rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group cursor-pointer">
            
            {/* Image */}
            <div className="relative overflow-hidden h-56 bg-slate-200 flex items-center justify-center">
              <img 
                src={cert.img} 
                alt={cert.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            {/* Details */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-1">{cert.title}</h3>
              <p className="text-teal-600 font-bold text-sm mb-3">{cert.issuer}</p>
              <div className="inline-block bg-slate-200 text-slate-600 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                {cert.date}
              </div>
            </div>

          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
            
            {/* Close Button */}
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition text-xl">
              <FaTimes />
            </button>

            <h3 className="text-2xl font-bold text-slate-800 mb-6 uppercase">Add New Certificate</h3>
            
            <form onSubmit={handleAddCertificate} className="flex flex-col gap-4">
              <input type="text" placeholder="Certificate Title (e.g. Frontend Web Dev)" required className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-500"
                value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
              
              <input type="text" placeholder="Issuer (e.g. Coursera, Udemy)" required className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-500"
                value={formData.issuer} onChange={(e) => setFormData({...formData, issuer: e.target.value})} />
              
              <input type="text" placeholder="Date (e.g. Oct 2026)" required className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-500"
                value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
              
              <input type="url" placeholder="Image URL (Optional)" className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-500"
                value={formData.img} onChange={(e) => setFormData({...formData, img: e.target.value})} />

              <button type="submit" className="mt-4 bg-teal-600 text-white p-3 rounded-lg font-bold hover:bg-teal-700 transition">
                SAVE CERTIFICATE
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;