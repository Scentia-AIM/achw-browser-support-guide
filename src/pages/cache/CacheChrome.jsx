import Header from "../../components/Header.jsx";
import ImageWithText from "../../components/ImageWithText.jsx";
import TextBox from "../../components/TextBox.jsx";

export default function CacheChrome() {
  return (
    <>
      <Header title="Google Chrome" subTitle="Clearing your browser cache" />
      <div className="container" style={{ marginTop: "2rem" }}>
        <TextBox
          colorChoice="primary"
          stepNumber="One"
          title="Lorem ipsum sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <TextBox
          colorChoice="secondary"
          stepNumber="Two"
          title="Lorem ipsum sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <ImageWithText
          colorChoice="primary"
          imagePosition="left"
          stepNumber="Three"
          title="Lorem ipsum sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imageURL="https://cdn.prod.website-files.com/5e16b0053c053f2da681e51d/63d07beb3b9fe7cb50968245_00978_ACHW_WebsiteUpdates_QualsImages_AppliedHealthScience_20230125.png"
        />
        <ImageWithText
          colorChoice="secondary"
          imagePosition="right"
          stepNumber="Four"
          title="Lorem ipsum sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imageURL="https://cdn.prod.website-files.com/5e16b0053c053f2da681e51d/63d07beb3b9fe7cb50968245_00978_ACHW_WebsiteUpdates_QualsImages_AppliedHealthScience_20230125.png"
        />
      </div>
    </>
  );
}
