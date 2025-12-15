import { api, ApiResponse } from './api';
import { Post, CreatePostDto, UpdatePostDto } from '../types/post.types';

export const postService = {
  // 전체 게시글 조회
  getPosts: async (): Promise<Post[]> => {
    const response = await api.get<ApiResponse<Post[]>>('/posts');
    return response.data.data;
  },

  // 게시글 상세 조회
  getPost: async (id: number): Promise<Post> => {
    const response = await api.get<ApiResponse<Post>>(`/posts/${id}`);
    return response.data.data;
  },

  // 게시글 작성
  createPost: async (data: CreatePostDto): Promise<Post> => {
    const response = await api.post<ApiResponse<Post>>('/posts', data);
    return response.data.data;
  },

  // 게시글 수정
  updatePost: async (id: number, data: UpdatePostDto): Promise<Post> => {
    const response = await api.put<ApiResponse<Post>>(`/posts/${id}`, data);
    return response.data.data;
  },

  // 게시글 삭제
  deletePost: async (id: number): Promise<void> => {
    await api.delete(`/posts/${id}`);
  },

  // 카테고리별 조회
  getPostsByCategory: async (category: string): Promise<Post[]> => {
    const response = await api.get<ApiResponse<Post[]>>(`/posts/category/${category}`);
    return response.data.data;
  },
};