// pages/index.tsx
import CourseCard from '@/components/CourseCard';
import { courses } from '@/data/courses';


export default function pgae() {
  return (
    <main className="min-h-screen mt-32 p-8 dark:bg-[#09090B] bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 dark:text-white text-blue-800">
          Healthcare Training Programs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </main>
  );
}