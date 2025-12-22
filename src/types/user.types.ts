export interface User {
  id: number;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto extends LoginDto {
  name: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}