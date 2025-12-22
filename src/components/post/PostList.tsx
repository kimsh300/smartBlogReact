import React from 'react';

const mockPosts = [
  {
    id: 1,
    title: 'DB 접속이 안되는 5가지 이유',
    summary: '계인적인 테스트 DB라면 아래 1, 2번도 사용에 해당 되겠지만, 프로젝트에 투입될 상태라면 3,4,5 번 문제로 인해 접속을 못하는 경우입니다...',
    category: 'DBA',
    date: '2024. 6. 9.',
    thumbnail: 'https://via.placeholder.com/800x300/FF00FF/FFFFFF?text=DB+Connection',
  },
  {
    id: 2,
    title: 'ORACLE DBA 카테고리의 다른 글',
    summary: '아카이브 모드변경과 저장경로 설정방법에 대해 알아봅니다.',
    category: 'ORACLE > DBA',
    date: '2024.06.14',
  },
  {
    id: 3,
    title: 'Oracle 19c Install 예외 "ins-081010" 해결방안',
    summary: 'Oracle 19c 설치 시 발생하는 ins-081010 오류 해결 방법을 정리했습니다.',
    category: 'ORACLE/DBA',
    date: '2024.06.12',
  },
];

export const PostList: React.FC = () => {
  return (
    <div className="space-y-8">
      {mockPosts.map((post) => (
        <article key={post.id} className="border-b border-gray-200 pb-8">
          {/* 카테고리 & 날짜 */}
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <span className="text-blue-600 font-semibold">{post.category}</span>
            <span className="mx-2">·</span>
            <span>{post.date}</span>
          </div>

          {/* 제목 */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
            {post.title}
          </h2>

          {/* 썸네일 (있을 경우) */}
          {post.thumbnail && (
            <div className="mb-4">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-64 object-cover rounded"
              />
            </div>
          )}

          {/* 요약 */}
          <p className="text-gray-700 leading-relaxed mb-4">
            {post.summary}
          </p>

          {/* 더보기 버튼 */}
          <button className="text-blue-600 text-sm font-semibold hover:underline">
            더보기 →
          </button>
        </article>
      ))}
    </div>
  );
};