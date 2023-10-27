import React, { useEffect } from "react";

export default function NotesInput({ notes, setNotes }) {
  const [value, setValue] = React.useState(notes);
  const [timeoutId, setTimeoutId] = React.useState(null);

  useEffect(() => {
    setValue(notes);
  }, [notes]);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setTimeoutId(
      setTimeout(() => {
        setNotes(e.target.value);
        setTimeoutId(null);
      }, 600)
    );
    return () => clearTimeout(timeoutId);
  };

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <textarea
        style={{
          backgroundColor: timeoutId ? "#eee" : "#fff",
        }}
        value={value}
        onChange={handleChange}
        className="notes-input"
        placeholder="Notes..."
      />
    </div>
  );
}
