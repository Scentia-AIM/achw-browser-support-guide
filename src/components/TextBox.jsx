export default function TextBox({ stepNumber, title, content, colorChoice }) {
  return (
    <section className={colorChoice}>
      <span>Step {stepNumber}</span>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}
