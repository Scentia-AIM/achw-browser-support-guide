import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function CardOption({
  title,
  description,
  category,
  browserName,
}) {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <p style={{ color: "#e5427a" }}>
          <i>Please select your browser:</i>
        </p>
        <ul>
          {browserName.map((browser, index) => (
            <li key={index}>
              <Link to={category + browser.link}>
                {browser.name} <FaArrowRight />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
