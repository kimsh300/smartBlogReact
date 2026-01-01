import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import PortfolioPage from '@/pages/PortfolioPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="portfolio/:username" element={<PortfolioPage />} />
          {/* TODO: 추가 라우트 */}
          {/* <Route path="login" element={<LoginPage />} /> */}
          {/* <Route path="signup" element={<SignupPage />} /> */}
          {/* <Route path="builder" element={<PageBuilderPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
