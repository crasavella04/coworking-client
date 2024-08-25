import { Skeleton } from "antd";

export default function FilterSkeleton() {
  return (
    <div style={{ display: "flex", gap: "24px", flexDirection: "column" }}>
      <Skeleton.Input active={true} size={"large"} block={true} />
      <Skeleton.Input active={true} size={"large"} block={true} />
      <Skeleton.Input active={true} size={"large"} block={true} />
    </div>
  );
}
