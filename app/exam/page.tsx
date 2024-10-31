// pages/exam/index.tsx
import Link from 'next/link';

type Subject = {
  id: string;
  name: string;
};

const subjects: Subject[] = [
  { id: 'math', name: 'Mathematics' },
  { id: 'science', name: 'Science' },
  { id: 'history', name: 'History' },
  // Add more subjects as needed
];

const ExamPage: React.FC = () => {
  return (
    <div>
      <h1>Select a Subject</h1>
      <div>
        {subjects.map((subject) => (
          <Link key={subject.id} href={`/exam/${subject.id}`}>
              <div className="exam-card">
                <h2>{subject.name}</h2>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExamPage;
