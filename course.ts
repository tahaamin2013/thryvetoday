// types/course.ts
export interface Course {
    title: string;
    price: number;
    duration: string;
    classroomHours?: number;
    labHours?: number;
    clinicalHours?: string;
    highlights: string[];
    description: string;
    targetAudience?: string[];
  }