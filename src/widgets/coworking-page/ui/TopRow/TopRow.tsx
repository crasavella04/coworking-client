import { FavoriteToggler } from "@/entities/coworking";
import { ExportOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

interface TopRowProps {
  id: string | number;
  isAuth: boolean;
  link?: string;
}

export default function TopRow({ id, link, isAuth }: TopRowProps) {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      {isAuth ? (
        <FavoriteToggler isButton id={id} defaultIsFavorite={true} />
      ) : (
        <Button
          style={{ opacity: 0, cursor: "default" }}
          type="primary"
          icon={<ExportOutlined />}
          size="large"
          disabled
        />
      )}
      {link && (
        <Button
          onClick={() => navigate(link)}
          type="primary"
          icon={<ExportOutlined />}
          size="large"
        />
      )}
    </div>
  );
}
