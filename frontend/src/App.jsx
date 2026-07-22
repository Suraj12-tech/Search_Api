import { useEffect, useState } from "react";
import "./App.css";

import SearchForm from "./component/SearchForm";
import SearchList from "./component/SearchList";

function App() {
  const [records, setRecords] = useState([]);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [selectedRecord, setSelectedRecord] = useState(null);

  const [fetchId, setFetchId] = useState("");

  const apiUrl = "http://localhost:8080";

  async function loadAllRecords() {
    setLoading(true);
    setMessage("Loading records...");

    try {
      const response = await fetch(`${apiUrl}/search/all`);

      const result = await response.json();

      if (response.ok) {
        setRecords(result.data || []);
        setMessage("Records loaded successfully.");
      } else {
        setMessage("Could not load records.");
      }
    } catch (error) {
      setMessage("Something went wrong.");
      console.log(error);
    }

    setLoading(false);
  }

  async function createRecord(data) {
    setLoading(true);
    setMessage("Saving record...");

    try {
      const response = await fetch(`${apiUrl}/search`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Record created successfully.");
        loadAllRecords();
      } else {
        setMessage("Failed to create record.");
      }
    } catch (error) {
      setMessage("Something went wrong.");
      console.log(error);
    }

    setLoading(false);
  }
  async function fetchRecord(event) {
    event.preventDefault();
    if (fetchId === "") {
      setMessage("Please enter an ID.");
      return;
    }

    setLoading(true);
    setMessage("Fetching record...");

    try {
      const response = await fetch(
        `${apiUrl}/search/fetch?id=${fetchId}`
      );

      const result = await response.json();

      if (response.ok) {
        setSelectedRecord(result.data);

        setMessage("Record fetched successfully.");
      } else {
        setSelectedRecord(null);
        setMessage("Record not found.");
      }
    } catch (error) {
      setMessage("Something went wrong.");
      console.log(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadAllRecords();
  }, []);

  return (
    <div className="app-shell">

      <header className="hero-card">
        <h1>Search API Dashboard</h1>

        <p>
          Insert data, view all records,
          and find a record using its ID.
        </p>
      </header>


      <section className="panel-grid">

        {/* Create Record */}
        <SearchForm
          onSubmit={createRecord}
          loading={loading}
        />

        <div className="panel-card">

          <h2>Fetch One Record</h2>

          <form onSubmit={fetchRecord}>

            <input
              type="number"
              value={fetchId}
              onChange={(event) =>
                setFetchId(event.target.value)
              }
              placeholder="Enter ID"
            />

            <button
              type="submit"
              disabled={loading}
            >
              Fetch
            </button>

          </form>
          {selectedRecord ? (

            <div className="result-box">

              <p>
                <strong>ID:</strong>{" "}
                {selectedRecord.id}
              </p>

              <p>
                <strong>Data:</strong>{" "}
                {selectedRecord.data}
              </p>

            </div>

          ) : (

            <p>
              No record selected yet.
            </p>

          )}

        </div>

      </section>
      <section className="panel-card">

        <div className="section-header">

          <h2>All Records</h2>

          <button
            onClick={loadAllRecords}
            disabled={loading}
          >
            Refresh
          </button>

        </div>
        {message && (
          <p>{message}</p>
        )}
        <SearchList records={records} />

      </section>

    </div>
  );
}

export default App;