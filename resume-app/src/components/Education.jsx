import { HiAcademicCap } from 'react-icons/hi';

const Education = () => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 flex items-center gap-3 border-b-2 border-blue-600 pb-3">
        <HiAcademicCap className="w-8 h-8" />
        학력
      </h2>

      <div className="relative pl-8 border-l-2 border-gray-200">
        <div className="relative">
          <div className="absolute -left-[2.1rem] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 ring-4 ring-white ring-offset-2 ring-offset-gray-200"></div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              국립금오공과대학교
            </h3>
            <p className="text-lg text-gray-700 mb-2">
              컴퓨터소프트웨어공학과
            </p>
            <p className="text-gray-500 mb-3">2015.03 ~ 2021.02</p>
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              학사
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
