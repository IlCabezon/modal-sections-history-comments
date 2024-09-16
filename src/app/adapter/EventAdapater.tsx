import { EventItem } from "../components/History/Event";
import { EventInterface } from "../types";
import { ISODateToEventDate } from "../utils";

type EventAdapterProps = EventInterface | EventInterface[];
export const eventAdapter: (props: EventAdapterProps) => EventItem[] = (
  events
) => {
  let eventsArray: EventInterface[] = [];
  if (Array.isArray(events)) {
    eventsArray = events;
  } else {
    eventsArray.push(events);
  }

  return eventsArray.map((event) => {
    const username =
      event.user.email && /blue.cl/g.test(event.user.email)
        ? "Jefe Inbound"
        : event.user.name;

    const detailValues = Object.values(event.details || {})
      .map((value) => value)
      .filter(Boolean);

    return {
      id: event.id,
      eventType: event.eventType,
      username,
      heading: event.message,
      date: ISODateToEventDate(event.timestamp),
      details: detailValues,
    };
  });
};
