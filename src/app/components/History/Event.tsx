import React from "react";
import styles from "./Event.module.css";
import { GenericAvatar } from "../GenericAvatar/GenericAvatar";
import { Details } from "./Details/Details";

export type EventItem = {
  id: string;
  eventType: string;
  username: string; // represents the fullname of the user who triggered the performed action
  heading: string;
  date: string;
  details: Array<string>;
};

type EventProps = {
  item: EventItem;
};

export const Event: React.FC<EventProps> = React.memo(({ item }) => {
  return (
    <div className={styles["event-container"]}>
      <GenericAvatar fullname={item.username} />
      <section className={styles["event-details-container"]}>
        <p className={styles["event-heading"]}>
          <span className={styles["event-heading-user"]}>{item.username}</span>{" "}
          {item.heading} - {item.date}
        </p>

        <Details details={item.details} />
      </section>
    </div>
  );
});
Event.displayName = "Event";
