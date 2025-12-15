export interface Post {
  id: number;
  title: string;
  content: string;
  summary: string;
  thumbnail?: string;
  category: string;
  tags: string[];
  isPrivate: boolean;
  views: number;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
  author: Author;
}

export interface Author {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

export interface CreatePostDto {
  title: string;
  content: string;
  summary: string;
  category: string;
  tags: string[];
  isPrivate: boolean;
}

export interface UpdatePostDto extends Partial<CreatePostDto> {
  id: number;
}