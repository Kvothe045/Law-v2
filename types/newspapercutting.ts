export interface NewspaperCutting {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNewspaperCutting {
  category?: string;
  title: string;
  description?: string;
  date: string;
  image: string;
}

export interface UpdateNewspaperCutting extends Partial<CreateNewspaperCutting> {
  id: string;
}