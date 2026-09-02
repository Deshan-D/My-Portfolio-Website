import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-10">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;