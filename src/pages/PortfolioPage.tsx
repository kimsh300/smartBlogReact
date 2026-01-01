import { useEffect, useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import SectionRenderer from '@/components/pageBuilder/SectionRenderer';
import { samplePortfolio, sampleUsers } from '@/data/sampleData';
import type { PortfolioPage, User } from '@/types';

interface OutletContext {
  setActiveSection: (sectionId: string) => void;
}

const PortfolioPage = () => {
  const { username } = useParams<{ username: string }>();
  const { setActiveSection } = useOutletContext<OutletContext>();
  const [portfolio, setPortfolio] = useState<PortfolioPage | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // TODO: Spring Boot API로 대체 - GET /api/portfolios/{username}
  // TODO: Redis 캐싱 적용 필요
  useEffect(() => {
    const fetchPortfolio = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // 시뮬레이션: API 호출 딜레이
        await new Promise((resolve) => setTimeout(resolve, 300));

        // 샘플 데이터에서 사용자 찾기
        const foundUser = sampleUsers.find((u) => u.username === username);
        
        if (!foundUser) {
          setError('User not found');
          return;
        }

        setUser(foundUser);
        // 실제로는 해당 사용자의 포트폴리오를 가져와야 함
        setPortfolio(samplePortfolio);
      } catch (err) {
        console.error('Failed to fetch portfolio:', err);
        setError('Failed to load portfolio');
      } finally {
        setIsLoading(false);
      }
    };

    if (username) {
      fetchPortfolio();
    }
  }, [username]);

  // 스크롤 위치에 따른 활성 섹션 업데이트
  useEffect(() => {
    if (!portfolio) return;

    const handleScroll = () => {
      const sections = portfolio.sections.map((s) => document.getElementById(s.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(portfolio.sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [portfolio, setActiveSection]);

  if (isLoading) {
    return (
      <div className="loading-spinner" style={{ minHeight: '80vh' }}>
        <div className="loading-spinner__icon" />
      </div>
    );
  }

  if (error || !portfolio || !user) {
    return (
      <div className="empty-state" style={{ minHeight: '80vh' }}>
        <svg className="empty-state__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <p className="empty-state__text">{error || 'Portfolio not found'}</p>
      </div>
    );
  }

  return (
    <div className="portfolio">
      <div className="portfolio__content">
        {portfolio.sections
          .sort((a, b) => a.order - b.order)
          .map((section) => (
            <SectionRenderer key={section.id} section={section} />
          ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
