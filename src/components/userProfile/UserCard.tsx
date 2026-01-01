import { useNavigate } from 'react-router-dom';
import type { User } from '@/types';

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/portfolio/${user.username}`);
  };

  return (
    <article className="user-card" onClick={handleClick}>
      <div className="user-card__image-wrapper">
        <img
          src={user.profileImage}
          alt={user.displayName}
          className="user-card__image"
          loading="lazy"
        />
      </div>
      <h3 className="user-card__name">{user.displayName}</h3>
      <p className="user-card__title">{user.title}</p>
      <p className="user-card__bio line-clamp-2">{user.subtitle || user.bio}</p>
    </article>
  );
};

export default UserCard;
