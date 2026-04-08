import { Link } from "react-router-dom";

export default function Header({ title, subTitle }) {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img
            src="https://cdn.prod.website-files.com/5e16b0053c053f2da681e51d/62413d95ea248c2807c92737_ACHW_Logo_250x92.png"
            alt=""
          />
        </Link>
        <div className="heading">
          <p>{subTitle}</p>
          <h1>{title}</h1>
        </div>
      </div>
    </header>
  );
}
