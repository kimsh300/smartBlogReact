import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { searchUsers } from '@/data/sampleData';
import type { User } from '@/types';

interface HeaderProps {
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // TODO: Spring Boot API로 대체 - GET /api/users/search?q={query}
  useEffect(() => {
    const handleSearch = async () => {
      if (searchQuery.trim().length < 2) {
        setSearchResults([]);
        return;
      }

      setIsSearching(true);
      try {
        const results = await searchUsers(searchQuery);
        setSearchResults(results);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setIsSearching(false);
      }
    };

    const debounce = setTimeout(handleSearch, 300);
    return () => clearTimeout(debounce);
  }, [searchQuery]);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ko' ? 'en' : 'ko';
    i18n.changeLanguage(newLang);
  };

  const handleResultClick = (user: User) => {
    setShowResults(false);
    setSearchQuery('');
    navigate(`/portfolio/${user.username}`);
  };

  return (
    <header className="header">
      <div className="header__left">
        <button 
          className="header__menu-btn" 
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <Link to="/" className="header__logo">
          Portfolio Builder
        </Link>
      </div>

      <div className="header__right">
        <div className="header__search" ref={searchRef}>
          <svg className="header__search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="header__search-input"
            placeholder={t('common.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowResults(true)}
          />
          
          {/* Search Results Dropdown */}
          {showResults && (searchQuery.length >= 2) && (
            <div className="search-results">
              {isSearching ? (
                <div className="search-results__empty">
                  {t('common.loading')}
                </div>
              ) : searchResults.length > 0 ? (
                searchResults.map((user) => (
                  <div
                    key={user.id}
                    className="search-results__item"
                    onClick={() => handleResultClick(user)}
                  >
                    <img
                      src={user.profileImage}
                      alt={user.displayName}
                      className="search-results__item-image"
                    />
                    <div className="search-results__item-info">
                      <div className="search-results__item-name">{user.displayName}</div>
                      <div className="search-results__item-title">{user.title}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="search-results__empty">
                  {t('common.noResults')}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="header__actions">
          <button 
            className="header__lang-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            {i18n.language === 'ko' ? 'EN' : '한국어'}
          </button>
          
          {/* TODO: 로그인 상태에 따라 버튼 변경 */}
          {/* TODO: Spring Boot API - POST /api/auth/login */}
          <button className="header__login-btn">
            {t('common.login')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
