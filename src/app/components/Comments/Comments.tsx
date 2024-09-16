import styles from "./Comment.module.css";
import { commentarySection } from "../../texts";
import { CommentItem } from "../Comment/Comment";
import {
  GenericAvatar,
  GenericAvatarProps,
} from "../GenericAvatar/GenericAvatar";
import {
  BaseTextAreaInput,
  BaseTextAreaProps,
} from "../Inputs/BaseTextAreaInput/BaseTextAreaInput";
import { UserInterface } from "../../types";
import { BaseButton, BaseButtonProps } from "../BaseButton/BaseButton";
import { SendIcon } from "../icons";
import { Comment } from "../Comment/Comment";
import { useLoading, UseLoading } from "../../hooks/useLoading";
import { PostComment } from "./PostComment";

type CommentarySectionProps = {
  loggedUser: UserInterface;
  comments: CommentItem[];
};

export const CommentarySection: React.FC<CommentarySectionProps> = ({
  loggedUser,
  comments,
}) => (
  <Comments
    loggedUser={loggedUser}
    comments={comments}
    AvatarComponent={GenericAvatar}
    TextAreaComponent={BaseTextAreaInput}
    ButtonComponent={BaseButton}
    useLoading={useLoading}
  />
);

type CommentsProps = CommentarySectionProps & {
  AvatarComponent: React.FC<GenericAvatarProps>;
  TextAreaComponent: React.FC<BaseTextAreaProps>;
  ButtonComponent: React.FC<BaseButtonProps>;
  useLoading: () => UseLoading;
};

const Comments: React.FC<CommentsProps> = ({
  loggedUser,
  comments,
  AvatarComponent,
  TextAreaComponent,
  ButtonComponent,
  useLoading,
}) => {
  const { loading, toggleLoading } = useLoading();

  return (
    <div className={styles["comments-container"]}>
      <PostComment
        loggedUserFullname={loggedUser.name}
        AvatarComponent={AvatarComponent}
        ButtonComponent={ButtonComponent}
        TextAreaComponent={TextAreaComponent}
        SendIconComponent={SendIcon}
        useLoading={useLoading}
      />

      <section className={styles["comments-section"]}>
        {comments.map((item) => (
          <Comment
            key={item.id}
            item={item}
            isLoggedUser={item.user.email === loggedUser.email}
          />
        ))}
      </section>
    </div>
  );
};
