import CardOption from "./components/CardOption.jsx";
import Header from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom";
import { guides } from "./data/guides";
import GuidePage from "./pages/GuidePage.jsx";

const Browsers = [
  { name: "Google Chrome", link: "/chrome" },
  { name: "Microsoft Edge", link: "/edge" },
  { name: "Firefox", link: "/firefox" },
  { name: "Safari", link: "/safari" },
];

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header
              title="Browser Support Guide"
              subTitle="Australasian College of Health & Wellness"
            />
            <div className="container col-2" style={{ marginTop: "2rem" }}>
              <CardOption
                title="Clear your cache"
                description="If pages aren't loading properly or look outdated, clearing your cache can help. Select your browser below and follow the steps to refresh your content."
                category="cache"
                browsers={Object.keys(guides.cache)}
              />
              <CardOption
                title="Enable Pop-ups"
                description="Some websites need pop-ups to work correctly. If something isn’t opening, you may need to enable them. Select your browser below and follow the steps."
                category="popup"
                browsers={Object.keys(guides.popup)}
              />
            </div>
          </>
        }
      />
      {/* <Route path="/cache/chrome" element={<CacheChrome />} /> */}
      <Route path="/:type/:browser" element={<GuidePage />} />
    </Routes>
  );
}
