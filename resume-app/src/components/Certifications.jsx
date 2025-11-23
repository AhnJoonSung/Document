import { HiCheckCircle, HiBadgeCheck } from 'react-icons/hi';

const Certifications = () => {
  const certifications = [
    '정보처리기사',
    'SQLD (SQL 개발자)',
    '네트워크관리사 2급',
    'TOPCIT 수준 4 (문제해결형)',
  ];

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 flex items-center gap-3 border-b-2 border-blue-600 pb-3">
        <HiBadgeCheck className="w-8 h-8" />
        자격증
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <HiCheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            <span className="font-medium text-gray-900">{cert}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
