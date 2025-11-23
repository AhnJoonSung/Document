import { HiCode } from 'react-icons/hi';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Backend',
      skills: [
        'Java',
        'Spring Boot',
        'Spring Data JPA',
        'MyBatis',
        'Python',
        'Django REST Framework',
      ],
    },
    {
      category: 'Database',
      skills: ['MariaDB', 'Redis'],
    },
    {
      category: 'DevOps',
      skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'AWS'],
    },
    {
      category: 'Version Control',
      skills: ['Git', 'SVN'],
    },
    {
      category: 'Others',
      skills: ['Linux'],
    },
  ];

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 flex items-center gap-3 border-b-2 border-blue-600 pb-3">
        <HiCode className="w-8 h-8" />
        기술 스택
      </h2>

      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 hover:from-blue-200 hover:to-blue-300 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
