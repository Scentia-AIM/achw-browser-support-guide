import { useParams } from "react-router-dom";
import { guides } from "../data/guides";
import Header from "../components/Header.jsx";
import TextBox from "../components/TextBox.jsx";
import ImageWithText from "../components/ImageWithText.jsx";
import ReturnHome from "../components/ReturnHome.jsx";

export default function GuidePage() {
  const { type, browser } = useParams();
  const guide = guides[type]?.[browser];

  if (!guide) return <p>Page not found</p>;

  return (
    <>
      <Header title={guide.title} subTitle={guide.subTitle} />

      <div className="container" style={{ marginTop: "2rem" }}>
        {guide.steps.map((step, index) => {
          if (step.type === "text") {
            return <TextBox key={index} {...step.props} />;
          }

          if (step.type === "image") {
            return <ImageWithText key={index} {...step.props} />;
          }
        })}
      </div>

      <ReturnHome />
    </>
  );
}
