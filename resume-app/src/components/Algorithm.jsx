import { HiCpuChip } from 'react-icons/hi2';
import { HiExternalLink } from 'react-icons/hi';

const Algorithm = () => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 flex items-center gap-3 border-b-2 border-blue-600 pb-3">
        <HiCpuChip className="w-8 h-8" />
        알고리즘 역량
      </h2>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-start justify-between flex-wrap gap-6">
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              백준 온라인 저지
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              <span className="font-semibold">티어:</span> Platinum 5 |{' '}
              <span className="font-semibold">해결 문제 수:</span> 267문제
            </p>
            <a
              href="https://solved.ac/profile/tjdtna01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              <HiExternalLink className="w-5 h-5" />
              프로필 보기
            </a>
          </div>
          <div className="text-6xl">🏆</div>
        </div>
      </div>
    </section>
  );
};

export default Algorithm;
