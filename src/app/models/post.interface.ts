export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl?: string;
  videoUrl?: string;
  isPublic: boolean;
  courseId?: string;
  conferenceId?: string;
  createdAt: Date;
  updatedAt: Date;
}