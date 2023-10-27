import React from "react";

export default function ThreadPreview({ thread }) {
  const [hovering, setHovering] = React.useState(false);

  return (
    <div
      className="email-container"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="email-header">{thread.subject}</div>
      {hovering && (
        <div className="email-hover">
          <p className="email-snippet">{thread.snippet}</p>
          <button
            onClick={() =>
              window.open(
                `https://mail.google.com/mail/u/0/#inbox/${thread.threadId}`
              )
            }
          >
            Open
          </button>
        </div>
      )}
    </div>
  );
}
