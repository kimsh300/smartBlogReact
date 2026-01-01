// ============================================
// 사용자 관련 타입
// ============================================

export interface User {
  id: string;
  username: string;
  displayName: string;
  email: string;
  profileImage: string;
  bio: string;
  title: string; // 예: "Server Developer", "Frontend Engineer"
  subtitle: string; // 부제목/슬로건
  createdAt: string;
  updatedAt: string;
}

// ============================================
// 포트폴리오 페이지 관련 타입
// ============================================

// 페이지 레이아웃 타입 (웹빌더 스타일)
export type LayoutType = '1:1' | '1:2' | '2:1' | '2:2';

// 섹션 컨텐츠 타입
export type SectionContentType = 
  | 'text'
  | 'image'
  | 'profile'
  | 'experience'
  | 'skills'
  | 'project'
  | 'education'
  | 'contact'
  | 'custom';

// 개별 섹션 블록
export interface SectionBlock {
  id: string;
  type: SectionContentType;
  content: Record<string, unknown>; // 각 타입에 맞는 컨텐츠
  order: number;
}

// 페이지 섹션 (레이아웃 포함)
export interface PageSection {
  id: string;
  layout: LayoutType;
  blocks: SectionBlock[]; // 레이아웃에 따라 1~4개의 블록
  backgroundColor?: string;
  order: number;
}

// 네비게이션 아이템
export interface NavItem {
  id: string;
  label: string;
  labelKey: string; // i18n 키
  targetSectionId: string;
  order: number;
}

// 포트폴리오 페이지 전체
export interface PortfolioPage {
  id: string;
  userId: string;
  slug: string; // URL 경로
  title: string;
  navItems: NavItem[];
  sections: PageSection[];
  theme: PageTheme;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

// ============================================
// 테마 관련 타입
// ============================================

export interface PageTheme {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  fontFamily: string;
}

// ============================================
// 컴포넌트별 컨텐츠 타입
// ============================================

export interface TextContent {
  heading?: string;
  subheading?: string;
  body: string;
}

export interface ImageContent {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProfileContent {
  name: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ExperienceContent {
  items: ExperienceItem[];
}

export interface SkillItem {
  id: string;
  name: string;
  level: number; // 1-100
  category: string;
}

export interface SkillsContent {
  items: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
}

export interface ProjectContent {
  items: ProjectItem[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
}

export interface EducationContent {
  items: EducationItem[];
}

export interface ContactContent {
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  blog?: string;
  location?: string;
}

// ============================================
// API 응답 타입
// ============================================

// TODO: Spring Boot API 응답 형식에 맞게 수정 필요
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  currentPage: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

// ============================================
// 상태 관리 타입
// ============================================

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}

export interface UIState {
  isSidebarOpen: boolean;
  isMobileMenuOpen: boolean;
  currentLanguage: 'ko' | 'en';
  theme: 'light' | 'dark';
}
