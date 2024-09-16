export const ISODateToEventDate = (timestamp: string): string => {
  const date = new Date(timestamp);

  if (isNaN(date.getTime())) {
    return timestamp; // if date is invalid, return the original timestamp
  }

  const day = date.getUTCDate();
  const month = date.toLocaleString("es-ES", { month: "short" });
  const year = date.getUTCFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day} de ${month} de ${year}, ${hours}:${minutes}`;
};
