import { HiBookOpen } from 'react-icons/hi';

const Training = () => {
  const trainings = [
    {
      name: 'OSSCA (오픈소스 컨트리뷰션 아카데미)',
      role: '멘티',
      period: '2025.07 ~ 2025.11',
      status: '수료',
    },
    {
      name: 'SK Hy-five',
      role: null,
      period: '2025.02 ~ 2025.03',
      status: '수료',
    },
    {
      name: '42서울',
      role: '혁신적인 소프트웨어 교육 프로그램',
      period: '2023.02 ~ 2024.12',
      status: '수료',
    },
  ];

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 flex items-center gap-3 border-b-2 border-blue-600 pb-3">
        <HiBookOpen className="w-8 h-8" />
        교육 및 프로그램
      </h2>

      <div className="relative pl-8 border-l-2 border-gray-200">
        {trainings.map((training, index) => (
          <div
            key={index}
            className={`relative ${
              index !== trainings.length - 1 ? 'pb-10' : ''
            }`}
          >
            <div className="absolute -left-[2.1rem] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 ring-4 ring-white ring-offset-2 ring-offset-gray-200"></div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {training.name}
              </h3>
              {training.role && (
                <p className="text-lg text-gray-700 mb-2">{training.role}</p>
              )}
              <p className="text-gray-500 mb-3">{training.period}</p>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {training.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Training;
