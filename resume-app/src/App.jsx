import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Training from './components/Training';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Algorithm from './components/Algorithm';

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-12">
        <Education />
        <Experience />
        <Training />
        <Certifications />
        <Skills />
        <Algorithm />
      </main>

      <footer className="bg-gray-800 text-gray-400 text-center py-8 mt-16">
        <p>© 2025 안준성. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
