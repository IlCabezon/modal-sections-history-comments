import React from "react";
import { EventItem, Event } from "./Event";

type HistoryProps = {
  events: EventItem[];
};

export const History: React.FC<HistoryProps> = ({ events }) => {
  return events?.length ? (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {events.map((event) => (
        <Event key={event.id} item={event} />
      ))}
    </div>
  ) : (
    <div>No events</div>
  );
};
