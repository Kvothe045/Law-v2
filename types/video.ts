// types/video.ts
export interface VideoPost {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateVideoPost {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
}

export interface UpdateVideoPost extends Partial<CreateVideoPost> {
  id: string;
}