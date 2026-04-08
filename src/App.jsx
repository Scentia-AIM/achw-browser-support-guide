import CardOption from "./components/CardOption.jsx";
import Header from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom";
import CacheChrome from "./pages/cache/CacheChrome.jsx";

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
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                category="cache"
                browserName={Browsers}
              />
              <CardOption
                title="Enable Pop-ups"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                category="pop-up"
                browserName={Browsers}
              />
            </div>
          </>
        }
      />
      <Route path="/cache/chrome" element={<CacheChrome />} />
    </Routes>
  );
}
