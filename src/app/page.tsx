"use client";

import { useState } from "react";
import Bitacora from ".";
import { ClockIcon } from "./components";
import { StylesConfig } from "../config";

const mockBooking = {
  _id: { $oid: "66b61d71f5a6ca035944dd4d" },
  customer: "grupo integraciones blue",
  supplier: "Hola",
  date: "21/08/2024",
  startTime: "13:00",
  endTime: "13:30",
  reference: "ASN-123",
  palletsQuantity: "1",
  lumpsQuantity: "1",
  volume: "0",
  driverName: "Juan",
  driverRut: "1234567-4",
  vehiclePatent: "BBDD12",
  peonetaName: "Juani",
  peonetaRut: "1234567-4",
  email: "gpo.integraciones@bx.cl",
  packingList: {
    url: "https://bx-fulfillm-qas.s3.amazonaws.com/infulf/reservas/packing_list/66b61d71f5a6ca035944dd4d-BD CUENTAS CONTABLES.xlsx",
    fileName: "66b61d71f5a6ca035944dd4d-BD CUENTAS CONTABLES.xlsx",
  },
  numberRequest: 41,
  deleted: false,
  state: "Agendado",
  observations: "",
  platform: "F8",
};

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <StylesConfig />

      {/* <div data-testid="modal-root" id="modal-root"></div> */}

      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        <ClockIcon />
      </button>

      <Bitacora
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={`Bitacora - Solicitud N° ${mockBooking.numberRequest}`}
        history={[]}
        comments={[]}
      />
    </main>
  );
}
