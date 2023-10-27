import "./App.css";
import React from "react";
import Ticket from "./components/TicketPreview";

const exampleTicket = {
  categories: ["EUS", "EPTS", "MESC"],
  id: "1d69dd66-fda9-488b-a6e6-c677045d5225",
  lastUpdated: "2023-06-11T19:17:57.456Z",
  notes: "",
  status: "unread",
  threadIds: ["188a84b0391d1433"],
  title: "[EPTS] Pay-Slips over the year of 2022-23",
  threads: [
    {
      date: "2023-06-11T02:46:39.000Z",
      historyId: "9204755",
      isSent: false,
      isUnread: true,
      messages: [
        {
          date: "2023-06-11T02:46:39.000Z",
          from: {
            email: "epts@mcgilleus.ca",
            name: "McGill Engineering Peer Tutoring Service",
          },
          historyId: "9204755",
          id: "188a84b0391d1433",
          labelIds: [
            "UNREAD",
            "IMPORTANT",
            "STARRED",
            "CATEGORY_PERSONAL",
            "INBOX",
          ],
          snippet:
            "Hello Ryan, Hope you are doing well, and enjoying your summer. Can I ask for the pay-slips (more or less like a budget summary) of how much EUS have been paying to EPTS over the year of 2022-23. MESC",
          subject: "[EPTS] Pay-Slips over the year of 2022-23",
          to: [{ email: "vpfinance@mcgilleus.ca", name: "Ryan Reszetnik" }],
        },
      ],
      people: [
        {
          email: "epts@mcgilleus.ca",
          name: "McGill Engineering Peer Tutoring Service",
        },
        { email: "vpfinance@mcgilleus.ca", name: "Ryan Reszetnik" },
      ],
      snippet:
        "Hello Ryan, Hope you are doing well, and enjoying your summer. Can I ask for the pay-slips (more or less like a budget summary) of how much EUS have been paying to EPTS over the year of 2022-23. MESC",
      subject: "[EPTS] Pay-Slips over the year of 2022-23",
      threadId: "188a84b0391d1433",
    },
    {
      date: "2023-06-11T02:46:39.000Z",
      historyId: "9204755",
      isSent: false,
      isUnread: true,
      messages: [
        {
          date: "2023-06-11T02:46:39.000Z",
          from: {
            email: "epts@mcgilleus.ca",
            name: "McGill Engineering Peer Tutoring Service",
          },
          historyId: "9204755",
          id: "188a84b0391d1433",
          labelIds: [
            "UNREAD",
            "IMPORTANT",
            "STARRED",
            "CATEGORY_PERSONAL",
            "INBOX",
          ],
          snippet:
            "Hello Ryan, Hope you are doing well, and enjoying your summer. Can I ask for the pay-slips (more or less like a budget summary) of how much EUS have been paying to EPTS over the year of 2022-23. MESC",
          subject: "[EPTS] Pay-Slips over the year of 2022-23",
          to: [{ email: "vpfinance@mcgilleus.ca", name: "Ryan Reszetnik" }],
        },
      ],
      people: [
        {
          email: "epts@mcgilleus.ca",
          name: "McGill Engineering Peer Tutoring Service",
        },
        { email: "vpfinance@mcgilleus.ca", name: "Ryan Reszetnik" },
      ],
      snippet:
        "Hello Ryan, Hope you are doing well, and enjoying your summer. Can I ask for the pay-slips (more or less like a budget summary) of how much EUS have been paying to EPTS over the year of 2022-23. MESC",
      subject: "[EPTS] Pay-Slips over the year of 2022-23",
      threadId: "188a84b0391d1433",
    },
  ],
};

export const appContext = React.createContext({ email: null });

function App() {
  return (
    <div className="App">
      <appContext.Provider value={{ email: "vpfinance@mcgilleus.ca" }}>
        <Ticket ticket={exampleTicket} isSelected={false} />
      </appContext.Provider>
    </div>
  );
}

export default App;
