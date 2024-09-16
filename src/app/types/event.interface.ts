import { UserInterface } from "./user.interface";

export enum EventTypesEnum {
  ReservaCreada = "ReservaCreada",
  ReservaModificada = "ReservaModificada",
  ComentarioAñadido = "ComentarioAñadido",
}

export type EventType =
  | EventTypesEnum.ReservaCreada
  | EventTypesEnum.ReservaModificada
  | EventTypesEnum.ComentarioAñadido;

export interface EventInterface {
  id: string;
  eventType: string;
  timestamp: string;
  message: string;
  user: UserInterface;
  details?: DetailInterface;
  booking: BookingInterface;
}

export interface BookingInterface {
  _id: string;
  customer: string;
}

export interface DetailInterface {
  previousValue: string;
  newValue: string;
}
