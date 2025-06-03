// types/blog.ts
export interface BlogPost {
    id: string;
    title: string;
    summary: string;
    content: string;
    bannerImage: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    published: boolean;
  }
  
  export interface CreateBlogPost {
    title: string;
    summary: string;
    content: string;
    bannerImage: string;
    author: string;
    published: boolean;
  }
  
  export interface UpdateBlogPost extends Partial<CreateBlogPost> {
    id: string;
  }
  