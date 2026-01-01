import { useTranslation } from 'react-i18next';

interface FooterProps {
  isSidebarOpen: boolean;
}

const Footer = ({ isSidebarOpen }: FooterProps) => {
  const { t } = useTranslation();

  return (
    <footer className={`footer ${!isSidebarOpen ? 'footer--sidebar-closed' : ''}`}>
      <div className="footer__content">
        <p className="footer__copyright">
          {t('footer.copyright')}
        </p>
        <nav className="footer__links">
          <a href="/terms" className="footer__link">
            {t('footer.terms')}
          </a>
          <a href="/privacy" className="footer__link">
            {t('footer.privacy')}
          </a>
          <a href="/contact" className="footer__link">
            {t('footer.contact')}
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
