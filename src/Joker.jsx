import { useState, useEffect } from "react";

export default function Joker() {
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getNewJoke = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(URL);
      if (!res.ok) throw new Error("Failed to fetch joke");

      const data = await res.json();
      setJoke(data);
    } catch (err) {
      setError(err.message);
      setJoke(null);
    } finally {
      setLoading(false);
    }
  };

  // Load first joke on mount
  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>😂 Joker!</h1>

      {loading && <p>Loading joke...</p>}

      {error && <p style={{ color: "red" }}>❌ {error}</p>}

      {!loading && !error && joke && (
        <div style={{ margin: "20px 0" }}>
          <h2>{joke.setup}</h2>
          <p style={{ fontWeight: "bold" }}>{joke.punchline}</p>
        </div>
      )}

      <button
        onClick={getNewJoke}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Get Another Joke
      </button>
    </div>
  );
}
