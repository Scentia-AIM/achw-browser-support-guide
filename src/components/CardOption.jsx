import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function CardOption({ title, description, category, browsers }) {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <p style={{ color: "#e5427a" }}>
          <i>Please select your browser:</i>
        </p>
        <ul>
          {browsers.map((browser, index) => {
            const displayName =
              browser.charAt(0).toUpperCase() + browser.slice(1); // Chrome instead of chrome
            return (
              <li key={index}>
                <Link to={`/${category}/${browser}`}>
                  {displayName} <FaArrowRight />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
