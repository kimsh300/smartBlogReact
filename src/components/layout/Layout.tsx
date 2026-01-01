import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { sampleNavItems } from '@/data/sampleData';
import type { NavItem } from '@/types';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // 포트폴리오 페이지인지 확인
  const isPortfolioPage = location.pathname.startsWith('/portfolio/');
  
  // TODO: 실제로는 해당 포트폴리오의 navItems를 API에서 가져와야 함
  // TODO: Spring Boot API - GET /api/portfolios/{slug}/nav
  const navItems: NavItem[] = isPortfolioPage ? sampleNavItems : [];

  // 반응형 처리
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = () => {
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    // 모바일에서는 메뉴 닫기
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(false);
    }
    // 해당 섹션으로 스크롤
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOverlayClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="layout">
      <Header 
        onMenuToggle={handleMenuToggle}
        isSidebarOpen={isSidebarOpen || isMobileMenuOpen}
      />
      
      <div className="layout__body">
        {/* 포트폴리오 페이지에서만 사이드바 표시 */}
        {isPortfolioPage && (
          <>
            <Sidebar
              isOpen={isSidebarOpen || isMobileMenuOpen}
              navItems={navItems}
              activeSection={activeSection}
              onNavClick={handleNavClick}
            />
            {/* 모바일 오버레이 */}
            <div 
              className={`overlay ${isMobileMenuOpen ? 'overlay--visible' : ''}`}
              onClick={handleOverlayClick}
            />
          </>
        )}
        
        <main className={`layout__content ${
          !isPortfolioPage || !isSidebarOpen ? 'layout__content--sidebar-closed' : ''
        }`}>
          <Outlet context={{ setActiveSection }} />
        </main>
      </div>
      
      <Footer isSidebarOpen={isPortfolioPage && isSidebarOpen} />
    </div>
  );
};

export default Layout;
