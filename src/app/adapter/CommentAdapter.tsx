import { CommentItem } from "../components";
import { CommentInterface } from "../types/comment.interface";
import { ISODateToEventDate } from "../utils";

type CommentAdapterProps = CommentInterface[] | CommentInterface;
export const commentAdapter: (props: CommentAdapterProps) => CommentItem[] = (
  comments
) => {
  let commentsArray: CommentInterface[] = [];
  if (Array.isArray(comments)) {
    commentsArray = comments;
  } else {
    commentsArray.push(comments);
  }

  return commentsArray.map((comment) => {
    const user = {
      name:
        comment.user.email && /blue.cl/g.test(comment.user.email)
          ? "Jefe Inbound"
          : comment.user.name,
      email: comment.user.email,
    };

    return {
      id: comment.id,
      user,
      comment: comment.comment,
      date: ISODateToEventDate(comment.timestamp),
    };
  });
};
