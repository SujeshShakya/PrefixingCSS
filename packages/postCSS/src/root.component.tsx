import "../public/style.css";
export default function Root(props) {
  return (
    <section className="my-prefix">
      <div className="postCSS_file">{props.name} is mounted!</div>
    </section>
  );
}
