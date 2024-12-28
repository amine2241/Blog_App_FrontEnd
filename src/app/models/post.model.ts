export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  courseId?: string;
  conferenceId?: string;
  isPublic: boolean;
  mediaUrls: string[];
  createdAt: Date;
  updatedAt: Date;
}