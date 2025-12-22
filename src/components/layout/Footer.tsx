import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 블로그 소개 */}
          <div>
            <h3 className="text-xl font-bold mb-4">MyBlog</h3>
            <p className="text-gray-400 text-sm">
              개발과 일상을 기록하는 공간입니다.
              React, TypeScript, Spring Boot를 공부하고 있습니다.
            </p>
          </div>

          {/* 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* SNS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                G
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                T
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                F
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 MyBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};