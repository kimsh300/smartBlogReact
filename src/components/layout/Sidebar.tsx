import { useTranslation } from 'react-i18next';
import type { NavItem } from '@/types';

interface SidebarProps {
  isOpen: boolean;
  navItems: NavItem[];
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

const Sidebar = ({ isOpen, navItems, activeSection, onNavClick }: SidebarProps) => {
  const { t } = useTranslation();

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
      <nav className="sidebar__nav">
        <ul className="sidebar__nav-list">
          {navItems.map((item) => (
            <li key={item.id} className="sidebar__nav-item">
              <button
                className={`sidebar__nav-link ${
                  activeSection === item.targetSectionId ? 'sidebar__nav-link--active' : ''
                }`}
                onClick={() => onNavClick(item.targetSectionId)}
              >
                {t(item.labelKey, item.label)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
