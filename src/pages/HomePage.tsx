import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import UserCard from '@/components/userProfile/UserCard';
import { loadMoreUsers, sampleUsers } from '@/data/sampleData';
import type { User } from '@/types';

const HomePage = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<User[]>(sampleUsers);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // TODO: Spring Boot API로 대체 - GET /api/users?page={page}&size=8
  // TODO: Redis 캐싱 적용 필요
  const fetchMoreUsers = useCallback(async () => {
    try {
      const result = await loadMoreUsers(page);
      setUsers((prev) => [...prev, ...result.users]);
      setPage((prev) => prev + 1);
      setHasMore(result.hasMore);
    } catch (error) {
      console.error('Failed to load more users:', error);
      setHasMore(false);
    }
  }, [page]);

  return (
    <div className="home">
      <div className="home__container">
        {/* Hero Section */}
        <section className="home__hero">
          <h1 className="home__title">{t('home.title')}</h1>
          <p className="home__subtitle">{t('home.subtitle')}</p>
        </section>

        {/* Featured Users Section */}
        <section className="home__section">
          <div className="home__section-header">
            <h2 className="home__section-title">{t('home.featuredUsers')}</h2>
          </div>
          
          <InfiniteScroll
            dataLength={users.length}
            next={fetchMoreUsers}
            hasMore={hasMore}
            loader={
              <div className="loading-spinner">
                <div className="loading-spinner__icon" />
              </div>
            }
            endMessage={
              <p className="scroll-end">
                {t('common.noResults')}
              </p>
            }
            scrollThreshold={0.9}
          >
            <div className="user-grid">
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </InfiniteScroll>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
