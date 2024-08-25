import { memo } from "react";
import styles from "./styles.module.css";

interface UserPreviewProps {
  username: string;
  avatar?: string;
  avatarPosition?: "right" | "left";
  clickHandler?: () => void;
  className?: string;
  avatarClassName?: string;
}

export default memo(function UserPreview({
  username,
  avatar,
  avatarPosition = "left",
  clickHandler,
  className,
  avatarClassName,
}: UserPreviewProps) {
  return (
    <div onClick={clickHandler} className={styles.auth + " " + className}>
      {avatarPosition === "left" && (
        <img
          className={styles.avatar + " " + avatarClassName}
          src={
            avatar ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&s"
          }
          alt="avatar"
        />
      )}
      <div className="header__username">{username}</div>
      {avatarPosition === "right" && (
        <img
          className={styles.avatar + " " + avatarClassName}
          src={
            avatar ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&s"
          }
          alt="avatar"
        />
      )}
    </div>
  );
});
