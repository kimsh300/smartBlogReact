import type { User, PortfolioPage, NavItem, PageSection } from '@/types';

// ============================================
// 샘플 사용자 데이터
// TODO: Spring Boot API에서 가져오기 - GET /api/users
// TODO: Redis 캐싱 적용 필요
// ============================================

export const sampleUsers: User[] = [
  {
    id: '1',
    username: 'kimsiheung',
    displayName: '김시형',
    email: 'siheung@example.com',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: '주니어 백엔드 개발자',
    title: 'Backend Developer',
    subtitle: '조금은 늦었지만, 늦은 만큼 더 열심히 하는 신입 서버 개발자입니다.',
    createdAt: '2024-01-15',
    updatedAt: '2024-03-20',
  },
  {
    id: '2',
    username: 'honghyunyou',
    displayName: 'Hong Hyun You',
    email: 'hong@example.com',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: '풀스택 개발자',
    title: 'Full Stack Developer',
    subtitle: '사용자 경험을 중시하는 개발자입니다.',
    createdAt: '2024-02-10',
    updatedAt: '2024-03-18',
  },
  {
    id: '3',
    username: 'leejimin',
    displayName: '이지민',
    email: 'jimin@example.com',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    bio: 'UI/UX 디자이너',
    title: 'UI/UX Designer',
    subtitle: '아름다운 인터페이스로 세상을 바꿉니다.',
    createdAt: '2024-01-20',
    updatedAt: '2024-03-15',
  },
  {
    id: '4',
    username: 'parkjunho',
    displayName: '박준호',
    email: 'junho@example.com',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    bio: '데이터 엔지니어',
    title: 'Data Engineer',
    subtitle: '데이터로 인사이트를 만들어냅니다.',
    createdAt: '2024-02-05',
    updatedAt: '2024-03-22',
  },
  {
    id: '5',
    username: 'choisooyoung',
    displayName: '최수영',
    email: 'sooyoung@example.com',
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    bio: '프론트엔드 개발자',
    title: 'Frontend Developer',
    subtitle: 'React와 TypeScript를 사랑합니다.',
    createdAt: '2024-01-25',
    updatedAt: '2024-03-19',
  },
  {
    id: '6',
    username: 'kangminho',
    displayName: '강민호',
    email: 'minho@example.com',
    profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    bio: 'DevOps 엔지니어',
    title: 'DevOps Engineer',
    subtitle: '자동화로 개발 생산성을 높입니다.',
    createdAt: '2024-02-15',
    updatedAt: '2024-03-21',
  },
  {
    id: '7',
    username: 'jeongyerin',
    displayName: '정예린',
    email: 'yerin@example.com',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    bio: 'iOS 개발자',
    title: 'iOS Developer',
    subtitle: 'Swift로 최고의 앱을 만듭니다.',
    createdAt: '2024-01-30',
    updatedAt: '2024-03-17',
  },
  {
    id: '8',
    username: 'yoonseojun',
    displayName: '윤서준',
    email: 'seojun@example.com',
    profileImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    bio: 'AI/ML 엔지니어',
    title: 'AI/ML Engineer',
    subtitle: '인공지능으로 미래를 설계합니다.',
    createdAt: '2024-02-20',
    updatedAt: '2024-03-23',
  },
];

// ============================================
// 샘플 네비게이션 아이템
// TODO: Spring Boot API에서 가져오기 - GET /api/portfolios/{id}/nav
// ============================================

export const sampleNavItems: NavItem[] = [
  { id: 'nav-1', label: 'HOME', labelKey: 'nav.home', targetSectionId: 'home', order: 0 },
  { id: 'nav-2', label: 'ABOUT', labelKey: 'nav.about', targetSectionId: 'about', order: 1 },
  { id: 'nav-3', label: 'TECH SKILLS', labelKey: 'nav.techSkills', targetSectionId: 'skills', order: 2 },
  { id: 'nav-4', label: 'PROJECT', labelKey: 'nav.project', targetSectionId: 'project', order: 3 },
  { id: 'nav-5', label: 'EXPERIENCE', labelKey: 'nav.experience', targetSectionId: 'experience', order: 4 },
  { id: 'nav-6', label: 'CAREER', labelKey: 'nav.career', targetSectionId: 'career', order: 5 },
  { id: 'nav-7', label: 'EDUCATION', labelKey: 'nav.education', targetSectionId: 'education', order: 6 },
  { id: 'nav-8', label: 'BLOG', labelKey: 'nav.blog', targetSectionId: 'blog', order: 7 },
  { id: 'nav-9', label: 'CONTACT', labelKey: 'nav.contact', targetSectionId: 'contact', order: 8 },
];

// ============================================
// 샘플 페이지 섹션 데이터
// TODO: Spring Boot API에서 가져오기 - GET /api/portfolios/{id}/sections
// ============================================

export const sampleSections: PageSection[] = [
  {
    id: 'home',
    layout: '1:2',
    blocks: [
      {
        id: 'block-1',
        type: 'text',
        content: {
          heading: 'I am\nServer\nDeveloper',
          subheading: '',
          body: '조금은 늦었지만,\n늦은 만큼 더 열심히 하는\n신입 서버 개발자 김병욱입니다.',
        },
        order: 0,
      },
      {
        id: 'block-2',
        type: 'image',
        content: {
          src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=1000&fit=crop',
          alt: 'Developer Profile',
          caption: '',
        },
        order: 1,
      },
    ],
    backgroundColor: '#ffffff',
    order: 0,
  },
  {
    id: 'about',
    layout: '1:1',
    blocks: [
      {
        id: 'block-3',
        type: 'profile',
        content: {
          name: '김시형',
          title: 'Backend Developer',
          subtitle: '문제 해결을 즐기는 개발자',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
          description: '3개월간의 Plugger 인턴십에서 API 호출 90% 감소, 응답 시간 5초→0.5초 개선 등의 성과를 달성했습니다.',
        },
        order: 0,
      },
    ],
    backgroundColor: '#fafafa',
    order: 1,
  },
  {
    id: 'experience',
    layout: '1:1',
    blocks: [
      {
        id: 'block-4',
        type: 'experience',
        content: {
          items: [
            {
              id: 'exp-1',
              company: 'Plugger',
              position: 'Backend Developer Intern',
              period: '2024.01 - 2024.03',
              description: '커머스 플랫폼 백엔드 개발',
              achievements: [
                'API 호출 90% 감소',
                '응답 시간 5초 → 0.5초 개선',
                '비동기 처리 설계 및 구현',
              ],
            },
          ],
        },
        order: 0,
      },
    ],
    backgroundColor: '#ffffff',
    order: 2,
  },
];

// ============================================
// 샘플 포트폴리오 페이지
// TODO: Spring Boot API에서 가져오기 - GET /api/portfolios/{slug}
// ============================================

export const samplePortfolio: PortfolioPage = {
  id: 'portfolio-1',
  userId: '1',
  slug: 'kimsiheung',
  title: '김시형 포트폴리오',
  navItems: sampleNavItems,
  sections: sampleSections,
  theme: {
    primaryColor: '#1a1a1a',
    secondaryColor: '#666666',
    backgroundColor: '#ffffff',
    textColor: '#1a1a1a',
    accentColor: '#0066cc',
    fontFamily: 'Pretendard Variable',
  },
  isPublished: true,
  createdAt: '2024-01-15',
  updatedAt: '2024-03-20',
};

// ============================================
// 무한 스크롤용 사용자 로드 함수
// TODO: Spring Boot API로 대체 - GET /api/users?page={page}&size={size}
// ============================================

export const loadMoreUsers = async (page: number, size: number = 8): Promise<{
  users: User[];
  hasMore: boolean;
  totalPages: number;
}> => {
  // 실제 API 호출 시뮬레이션을 위한 딜레이
  await new Promise(resolve => setTimeout(resolve, 500));

  const startIndex = page * size;
  const endIndex = startIndex + size;

  // 샘플 데이터를 반복해서 더 많은 데이터처럼 보이게 함
  const extendedUsers = [...sampleUsers, ...sampleUsers, ...sampleUsers, ...sampleUsers];
  const users = extendedUsers.slice(startIndex, endIndex).map((user, index) => ({
    ...user,
    id: `${user.id}-${page}-${index}`,
  }));

  return {
    users,
    hasMore: endIndex < extendedUsers.length,
    totalPages: Math.ceil(extendedUsers.length / size),
  };
};

// ============================================
// 사용자 검색 함수
// TODO: Spring Boot API로 대체 - GET /api/users/search?q={query}
// TODO: Elasticsearch 또는 MySQL Full-text search 적용
// ============================================

export const searchUsers = async (query: string): Promise<User[]> => {
  await new Promise(resolve => setTimeout(resolve, 300));

  const lowercaseQuery = query.toLowerCase();
  return sampleUsers.filter(user =>
    user.displayName.toLowerCase().includes(lowercaseQuery) ||
    user.title.toLowerCase().includes(lowercaseQuery) ||
    user.bio.toLowerCase().includes(lowercaseQuery)
  );
};
