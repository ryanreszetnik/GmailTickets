import React, { useMemo } from "react";
import { appContext } from "../App";
import "./ticket.css";
import moment from "moment";
import ThreadPreview from "./ThreadPreview";
import NotesInput from "./NotesInput";

export default function TicketPreview({
  ticket,
  selectedTicket,
  onClick,
  isSelected,
  deleteTicket,
  moveToWaiting,
  moveToRead,
  isActive,
  mergeTickets,
}) {
  const { email } = React.useContext(appContext);
  const lastDate = useMemo(() => {
    const threads = ticket.threads.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    return threads.length > 0 ? threads[threads.length - 1]?.date : "";
  }, [ticket.threads]);
  return (
    <div
      style={{
        backgroundColor: isSelected ? "#ffd0d0" : isActive ? "#d0ffd0" : "#ccc",
      }}
      className="ticket-preview"
      onClick={onClick}
    >
      <div className="ticket-header">
        <h3 className="ticket-title">{ticket.title}</h3>
        <div className="ticket-date">{moment(lastDate).fromNow()}</div>
        <p className="ticket-people">
          {ticket.threads.length > 0 &&
            ticket.threads
              .flatMap((t) => t.people)
              .filter((p) => !email || !p.email.includes(email))
              .map((p) => p.name)
              .join(", ")}
        </p>
      </div>

      <span className="ticket-actions">
        {ticket.status !== "unread" && (
          <button onClick={deleteTicket}>Completed</button>
        )}
        {ticket.status !== "waitingOnResponse" && (
          <button onClick={moveToWaiting}>Move to Waiting</button>
        )}
        {ticket.status !== "read" && (
          <button onClick={moveToRead}>Move To Todo</button>
        )}
        {selectedTicket && selectedTicket.id !== ticket.id && (
          <button onClick={() => mergeTickets(selectedTicket, ticket)}>
            Merge Selected Into This
          </button>
        )}
      </span>

      {ticket.threads.map((thread, i) => (
        <ThreadPreview key={i} thread={thread} />
      ))}
      <NotesInput notes={""} setNotes={(val) => console.log("UPDATE", val)} />
      <span className="label-container">
        {ticket.categories.map((category, i) => (
          <span
            className="label"
            key={i}
            style={{ backgroundColor: "#ffaaaa" }}
          >
            {category}
          </span>
        ))}
      </span>
    </div>
  );
}
