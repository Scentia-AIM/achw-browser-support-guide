export default function ImageWithText({
  stepNumber,
  title,
  content,
  colorChoice,
  imageURL,
  imagePosition,
}) {
  return (
    <section className={`col-2 ${colorChoice} ${imagePosition}`}>
      <div className="content">
        <span>Step {stepNumber}</span>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className="image">
        <img src={imageURL} alt="" />
      </div>
    </section>
  );
}
