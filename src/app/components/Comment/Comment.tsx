import styles from "./Comment.module.css";
import { GenericAvatar } from "../GenericAvatar/GenericAvatar";
import { commentarySection } from "../../texts";

export type CommentItem = {
  id: string;
  user: CommentaryUser;
  comment: string;
  date: string;
};

export interface CommentaryUser {
  name: string;
  email: string;
}

type CommentProps = {
  item: CommentItem;
  isLoggedUser: boolean;
};

export const Comment: React.FC<CommentProps> = ({ item, isLoggedUser }) => {
  return (
    <div className={styles["comment-container"]}>
      <GenericAvatar fullname={item.user.name} />
      <section className={styles["comment-detail-section"]}>
        <p className={styles["comment-heading"]}>
          <span className={styles["comment-heading-user"]}>
            {item.user.name}
          </span>{" "}
          {commentarySection.userHasCommented} - {item.date}
        </p>
        <div
          className={
            isLoggedUser ? styles["logged-user-comment"] : styles["comment"]
          }
        >
          <p className={styles["user-comment"]}>{item.comment}</p>
        </div>
      </section>
    </div>
  );
};
