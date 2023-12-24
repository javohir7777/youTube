import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./constainer/header";
import Main from "./constainer/layout";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Shorts from "./pages/shorts/Shorts";
import Subscriptions from "./pages/subscriptions/Subscriptions";
import NotFound from "./pages/not-found/NotFound";
import OnePage from "./pages/one-id/OnePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="*" element={<NotFound />} />
          <Route path="onePage/:videoId" element={<OnePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
