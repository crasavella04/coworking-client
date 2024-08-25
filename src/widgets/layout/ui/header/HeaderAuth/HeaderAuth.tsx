import { UserPreview } from "@/features/user";
import { Button } from "antd";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const isAuth = false;

const data = {
  id: 1,
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&s",
  userName: "George",
};

export default function HeaderAuth() {
  const navigate = useNavigate();

  const clickHandler = useCallback(() => navigate("/profile"), [navigate]);

  if (isAuth)
    return (
      <UserPreview
        username={data.userName}
        avatar={data.avatar}
        clickHandler={clickHandler}
        avatarPosition="right"
        className={styles.profile}
      />
    );

  if (!isAuth)
    return (
      <div className={styles.auth}>
        <Button onClick={() => navigate("/signup")} type="primary" size="large">
          Регистрация
        </Button>
        <Button onClick={() => navigate("/login")} size="large">
          Вход
        </Button>
      </div>
    );
}
