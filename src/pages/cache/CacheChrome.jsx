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
          title="Load up your browser"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <ImageWithText
          colorChoice="secondary"
          imagePosition="left"
          stepNumber="Two"
          title="Locate the 3 dots"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imageURL="/cache/chrome/chrome-clear-cache-step-1.png"
        />
        <ImageWithText
          colorChoice="secondary"
          imagePosition="right"
          stepNumber="Three"
          title="Select Delete Browsing Data"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imageURL="/cache/chrome/chrome-clear-cache-step-2.png"
        />
        <ImageWithText
          colorChoice="secondary"
          imagePosition="left"
          stepNumber="Four"
          title="Choose your chosen timeframe"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imageURL="/cache/chrome/chrome-clear-cache-step-3.png"
        />
        <ImageWithText
          colorChoice="secondary"
          imagePosition="right"
          stepNumber="Five"
          title="Select 'Cached images and files'"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imageURL="/cache/chrome/chrome-clear-cache-step-4.png"
        />
        <ImageWithText
          colorChoice="primary"
          imagePosition="left"
          stepNumber="Six"
          title="Click Delete Data"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          imageURL="/cache/chrome/chrome-clear-cache-step-5.png"
        />
        <TextBox
          colorChoice="secondary"
          stepNumber="Seven"
          title="Reload your webpage!"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
    </>
  );
}
