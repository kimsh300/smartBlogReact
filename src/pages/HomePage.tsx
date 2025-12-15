import React from 'react';
import { Header } from '../components/layout/Header';
import { Sidebar } from '../components/layout/Sidebar';
import { PostList } from '../components/post/PostList';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex max-w-7xl mx-auto">
        {/* 사이드바 */}
        <Sidebar />
        
        {/* 메인 콘텐츠 */}
        <main className="flex-1 p-8">
          <PostList />
          
          {/* 페이지네이션 */}
          <div className="mt-12 flex justify-center items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
              이전
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">3</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
              다음
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;