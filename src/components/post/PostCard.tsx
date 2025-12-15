import React from 'react';
import { Card } from '../common/Card';

interface PostCardProps {
  id: number;
  title: string;
  summary: string;
  thumbnail?: string;
  category: string;
  tags: string[];
  views: number;
  commentCount: number;
  createdAt: string;
  onClick?: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  title,
  summary,
  thumbnail,
  category,
  tags,
  views,
  commentCount,
  createdAt,
  onClick,
}) => {
  return (
    <Card hover onClick={onClick}>
      {/* 썸네일 */}
      {thumbnail && (
        <div className="mb-4 -mx-6 -mt-6">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </div>
      )}

      {/* 카테고리 */}
      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-3">
        {category}
      </span>

      {/* 제목 */}
      <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
        {title}
      </h3>

      {/* 요약 */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {summary}
      </p>

      {/* 태그 */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* 메타 정보 */}
      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
        <span>{createdAt}</span>
        <div className="flex items-center space-x-3">
          <span className="flex items-center">
            👁 {views}
          </span>
          <span className="flex items-center">
            💬 {commentCount}
          </span>
        </div>
      </div>
    </Card>
  );
};