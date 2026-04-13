export default function ImageWithText({
  stepNumber,
  title,
  content,
  colorChoice,
  imageURL,
  imagePosition,
}) {
  const withBase = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

  return (
    <section className={`col-2 ${colorChoice} ${imagePosition}`}>
      <div className="content">
        <span>Step {stepNumber}</span>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
<img src={withBase(imageURL)} alt="" />
    </section>
  );
}
