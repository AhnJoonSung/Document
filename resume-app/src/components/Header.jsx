import { HiMail, HiPhone } from 'react-icons/hi';
import { FaGithub, FaPen } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          안준성
        </h1>
        <p className="text-2xl md:text-3xl mb-6 opacity-95">Backend Developer</p>
        <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">
          확장 가능한 백엔드 시스템을 설계하고 구현하는 개발자
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <a
            href="mailto:tjdtna01@naver.com"
            className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiMail className="w-5 h-5" />
            <span>tjdtna01@naver.com</span>
          </a>
          <a
            href="tel:010-3717-7612"
            className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
          >
            <HiPhone className="w-5 h-5" />
            <span>010-3717-7612</span>
          </a>
          <a
            href="https://velog.io/@tjdtna01"
            className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPen className="w-5 h-5" />
            <span>블로그</span>
          </a>
          <a
            href="https://github.com/AhnJoonSung"
            className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
