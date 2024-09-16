"use client";
import React, { useState, useEffect } from "react";
import mockEvents from "./assets/mock-event.json";
import mockComments from "./assets/mock-comment.json";

/* const loggedUser = {
  name: "Francisco Agustin Castro",
  email: "francisco@gmail.com",
}; */

const loggedUser = {
  name: "Victoria",
  email: "Victoria@blue.cl",
};

const events = eventAdapter(mockEvents);
const comments = commentAdapter(mockComments);

// components
import {
  History,
  CommentarySection,
  TabSelector,
  BaseModal,
  RecordIcon,
  CommentaryIcon,
} from "./components";
import { TabItem, CloseIcon } from "./components";
import { commentAdapter, eventAdapter } from "./adapter";

type Event = {};
type History = Event[];

type Comment = {};
type Comments = Comment[];

const DefaultModalContainerId = "modal-root";

type Props = {
  isOpen: boolean;
  onClose(): void;
  title: string;
  history: History;
  comments: Comments;
  container?: Element | DocumentFragment;
  containerHtmlId?: string;
};

export default function Bitacora({
  isOpen,
  onClose,
  title,
  container,
  containerHtmlId,
}: Props) {
  const [modalContainer, setModalContainer] = useState<
    Element | DocumentFragment | undefined
  >();

  useEffect(() => {
    if (window === undefined) {
      setModalContainer(undefined);
    } else {
      const modalRoot = window.document.getElementById(
        containerHtmlId || DefaultModalContainerId
      );

      if (container && React.isValidElement(container)) {
        setModalContainer(container);
      } else if (modalRoot) {
        setModalContainer(modalRoot);
      } else {
        const newModalContainer = window.document.createElement("div");
        newModalContainer.id = DefaultModalContainerId;
        window.document.body.appendChild(newModalContainer);
        setModalContainer(newModalContainer);
      }
    }
  }, [isOpen, containerHtmlId, container]);

  return (
    isOpen &&
    modalContainer && (
      <BaseModal
        container={modalContainer}
        ModalHeader={<ModalHeader title={title} onClose={onClose} />}
        ModalBody={<ModalBody />}
      />
    )
  );
}

type ModalHeaderProps = {
  title: string;
  onClose(): void;
};
function ModalHeader({ title, onClose }: ModalHeaderProps) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p style={{ padding: 0, margin: 0, fontWeight: "bold" }}>{title}</p>
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        style={{
          border: "none",
          background: "none",
          padding: "0",
          margin: 0,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CloseIcon />
      </button>
    </div>
  );
}

enum Tabs {
  History = "History",
  Comments = "Comments",
}
type TabsDictionary = {
  [key in Tabs]: React.ReactNode;
};

const ICON_SIZE = 22;
const TABS: TabItem[] = [
  {
    id: Tabs.History,
    label: "Historial",
    leftIcon: <RecordIcon width={ICON_SIZE} height={ICON_SIZE} />,
  },
  {
    id: Tabs.Comments,
    label: "Comentarios",
    leftIcon: <CommentaryIcon width={ICON_SIZE} height={ICON_SIZE} />,
  },
];

const ModalBody: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs.History);

  const tabContent: TabsDictionary = {
    [Tabs.History]: <History events={events} />,
    [Tabs.Comments]: <CommentarySection loggedUser={loggedUser} comments={comments} />,
  };

  const handleChangeTab = (id: string) => {
    if (id in Tabs) setSelectedTab(id as Tabs);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "1.5rem",
      }}
    >
      <TabSelector tabs={TABS} onTabChange={handleChangeTab} />
      {tabContent[selectedTab]}
    </div>
  );
};
