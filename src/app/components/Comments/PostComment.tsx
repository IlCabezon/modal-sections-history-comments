import styles from "./Comment.module.css";
import { UseLoading } from "../../hooks/useLoading";
import { BaseButtonProps } from "../BaseButton/BaseButton";
import { GenericAvatarProps } from "../GenericAvatar/GenericAvatar";
import { BaseTextAreaProps } from "../Inputs/BaseTextAreaInput/BaseTextAreaInput";
import { commentarySection } from "../../texts";
import { IconProps } from "../icons";

type PostCommentsProps = {
  loggedUserFullname: string;
  AvatarComponent: React.FC<GenericAvatarProps>;
  ButtonComponent: React.FC<BaseButtonProps>;
  TextAreaComponent: React.FC<BaseTextAreaProps>;
  SendIconComponent: React.FC<IconProps>;
  useLoading: () => UseLoading;
};
export const PostComment: React.FC<PostCommentsProps> = ({
  loggedUserFullname,
  AvatarComponent,
  ButtonComponent,
  TextAreaComponent,
  SendIconComponent,
  useLoading,
}) => {
  const { loading, toggleLoading } = useLoading();

  return (
    <section className={styles["new-commentary-section"]}>
      <AvatarComponent fullname={loggedUserFullname} />

      <TextAreaComponent
        name="comment"
        max={256}
        placeholder={commentarySection.textAreaPlaceholder}
      />

      <ButtonComponent
        leftIcon={<SendIconComponent width={20} height={20} fill="#fff" />}
        onClick={toggleLoading}
        isLoading={loading}
      >
        {commentarySection.sendCommentary}
      </ButtonComponent>
    </section>
  );
};
