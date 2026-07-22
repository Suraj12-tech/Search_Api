function SearchList({ records }) {
  if (!records.length) {
    return <p className="hint">No records yet. Add one from the form above.</p>;
  }

  return (
    <ul className="record-list">
      {records.map((record) => (
        <li key={record.id} className="record-item">
          <div className="record-meta">#{record.id}</div>
          <div>{record.data}</div>
        </li>
      ))}
    </ul>
  );
}

export default SearchList;
