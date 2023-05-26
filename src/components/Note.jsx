export default function Note({ title, content, id, onDelete }) {
  function handleClick() {
    onDelete(id);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>Done</button>
    </div>
  );
}
