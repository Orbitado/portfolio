function TagList({ list }: { list: string[] }) {
  return (
    <ul className="tag-list">
      {list.map((tag) => (
        <li key={tag} className="tag-item">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default TagList;
