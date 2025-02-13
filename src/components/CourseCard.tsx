// components/CourseCard.tsx
import { Course } from '../../course';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">{course.title}</h2>
        
        <div className="mb-4 space-y-2">
          <p className="text-xl font-semibold text-green-600">
            Price: ${course.price}
          </p>
          <p className="text-gray-700">Duration: {course.duration}</p>
          {course.classroomHours && (
            <p className="text-gray-700">Classroom Hours: {course.classroomHours} Hour</p>
          )}
          {course.labHours && (
            <p className="text-gray-700">Lab Hours: {course.labHours} Hours</p>
          )}
          {course.clinicalHours && (
            <p className="text-gray-700">{course.clinicalHours}</p>
          )}
        </div>

        <div className="mb-4">
          <p className="text-gray-700">{course.description}</p>
        </div>

        {course.highlights && (
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Program Highlights:</h3>
            <ul className="list-none space-y-2">
              {course.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {course.targetAudience && (
          <div>
            <h3 className="font-semibold text-lg mb-2">Who Should Enroll:</h3>
            <ul className="list-none space-y-2">
              {course.targetAudience.map((audience, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-700">{audience}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}