import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 블로그 타이틀 */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 cursor-pointer">
              나 혼자 DB 레벨업
            </h1>
            <p className="text-sm text-gray-600">DB, SQL에 대해 공부하며 지식을 남기는 공간입니다.</p>
          </div>

          {/* 검색 */}
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="w-64 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              검색
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};