import { useState } from 'react';

function SearchForm({ onSubmit, loading }) {
  const [data, setData] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.trim()) return;
    onSubmit({ data });
    setData('');
  };

  return (
    <div className="panel-card">
      <h2>Create Record</h2>
      <form onSubmit={handleSubmit} className="stack-form">
        <label htmlFor="data">Record content</label>
        <textarea
          id="data"
          rows="5"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Type something to save"
        />
        <button type="submit" disabled={loading}>Save</button>
      </form>
    </div>
  );
}

export default SearchForm;
