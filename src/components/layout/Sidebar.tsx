import React from 'react';
import { Card } from '../common/Card';

export const Sidebar: React.FC = () => {
  const categories = [
    { name: '개발', count: 15 },
    { name: '일상', count: 8 },
    { name: '리뷰', count: 5 },
    { name: '여행', count: 3 },
  ];

  const popularPosts = [
    { id: 1, title: 'React TypeScript 시작하기', views: 1234 },
    { id: 2, title: 'Tailwind CSS 완벽 가이드', views: 987 },
    { id: 3, title: 'Spring Boot JPA 정리', views: 756 },
  ];

  const tags = [
    'React', 'TypeScript', 'Spring Boot', 'MySQL',
    'Tailwind', 'JavaScript', 'Java', 'Web'
  ];

  return (
    <aside className="space-y-6">
      {/* 프로필 카드 */}
      <Card>
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">김시형</h3>
          <p className="text-gray-600 text-sm mb-4">
            Backend Developer
          </p>
          <div className="flex justify-center space-x-4 text-sm text-gray-600">
            <div>
              <div className="font-bold text-gray-800">45</div>
              <div>게시글</div>
            </div>
            <div>
              <div className="font-bold text-gray-800">1.2K</div>
              <div>조회수</div>
            </div>
          </div>
        </div>
      </Card>

      {/* 카테고리 */}
      <Card>
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          📁 카테고리
        </h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.name}>
              <a
                href={`/category/${category.name}`}
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-700">{category.name}</span>
                <span className="text-sm text-gray-500">
                  ({category.count})
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Card>

      {/* 인기 게시글 */}
      <Card>
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          🔥 인기 게시글
        </h3>
        <ul className="space-y-3">
          {popularPosts.map((post, index) => (
            <li key={post.id}>
              <a
                href={`/post/${post.id}`}
                className="block hover:text-blue-600 transition-colors"
              >
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-blue-600 text-sm">
                    {index + 1}.
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">
                      {post.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      👁 {post.views}
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Card>

      {/* 태그 클라우드 */}
      <Card>
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          🏷️ 태그
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <a
              key={tag}
              href={`/tag/${tag}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors"
            >
              #{tag}
            </a>
          ))}
        </div>
      </Card>
    </aside>
  );
};
