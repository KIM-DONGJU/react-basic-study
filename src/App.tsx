import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import MainPage from '@/pages/index/MainPage';
import BookmarkPage from '@/pages/bookmark/Bookmark';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<MainPage />} />
          <Route path="/:id" element={<MainPage />} />
          <Route path="bookmark" element={<BookmarkPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
